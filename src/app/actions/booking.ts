"use server";

import { dispatchDiscoveryCallEmails, BookingEmailData } from "@/lib/email";
import { saveLeadToBridge } from "@/lib/leadBridge";

export interface BookingFormData {
  name: string;
  email: string;
  company?: string;
  slot: string;
}

export interface BookingActionResult {
  success: boolean;
  message: string;
  referenceId?: string;
  meetLink?: string;
  errors?: Record<string, string>;
}

export async function submitDiscoveryCallBooking(data: BookingFormData): Promise<BookingActionResult> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.slot) {
    errors.slot = "Please select a preferred meeting window.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fill in all required fields.",
      errors,
    };
  }

  const referenceId = `GRX-CALL-${Date.now().toString(36).toUpperCase()}`;
  const timestamp = new Date().toISOString();

  const payload: BookingEmailData = {
    referenceId,
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company?.trim() || "Not Specified",
    slot: data.slot,
    timestamp,
  };

  try {
    const { meetLink } = await dispatchDiscoveryCallEmails(payload);
    
    // Mirror Discovery booking into GAUREX iOS Lead Bridge
    try {
      saveLeadToBridge({
        name: data.name.trim(),
        email: data.email.trim(),
        company: data.company?.trim(),
        scope: "Discovery Strategy Session",
        estimatedValue: 450000,
        source: "gaurex_website_contact",
        notes: `Confirmed Slot: ${data.slot} | Ref: ${referenceId}`,
      });
    } catch {
      // Non-fatal
    }

    return {
      success: true,
      message: `Your discovery session has been confirmed for ${data.slot}. An invitation has been sent to ${data.email}.`,
      referenceId,
      meetLink,
    };
  } catch (err) {
    console.error("[BOOKING ERROR]:", err);
    return {
      success: false,
      message: "Could not complete booking. Please try again or email gaurex.ai@gmail.com directly.",
    };
  }
}

