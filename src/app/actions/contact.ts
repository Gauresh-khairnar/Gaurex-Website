"use server";

import { dispatchInquiryEmails, InquiryEmailData } from "@/lib/email";

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  problem: string;
  requiredSolution: string;
  budget: string;
  timeline: string;
  honeypot?: string; // Anti-spam field
}

export interface ContactActionResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string>;
}

export async function submitContactInquiry(formData: ContactFormData): Promise<ContactActionResult> {
  // 1. Anti-spam check (honeypot)
  if (formData.honeypot && formData.honeypot.trim() !== "") {
    return {
      success: true,
      message: "Your inquiry has been received.",
      referenceId: `GRX-${Date.now().toString(36).toUpperCase()}`
    };
  }

  // 2. Server-side validation
  const errors: Record<string, string> = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Please provide your full name (minimum 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = "Please provide a valid business email address.";
  }

  if (!formData.companyName || formData.companyName.trim().length < 2) {
    errors.companyName = "Please provide your company or organization name.";
  }

  if (!formData.problem || formData.problem.trim().length < 15) {
    errors.problem = "Please describe the problem you are trying to solve in at least 15 characters.";
  }

  if (!formData.requiredSolution) {
    errors.requiredSolution = "Please select the primary solution you are looking for.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors before submitting.",
      errors
    };
  }

  // 3. Generate unique reference tracking ID
  const referenceId = `GRX-${Date.now().toString(36).toUpperCase()}`;
  const timestamp = new Date().toISOString();

  const inquiryPayload: InquiryEmailData = {
    referenceId,
    fullName: formData.fullName.trim(),
    email: formData.email.trim(),
    companyName: formData.companyName.trim(),
    industry: formData.industry,
    problem: formData.problem.trim(),
    requiredSolution: formData.requiredSolution,
    budget: formData.budget,
    timeline: formData.timeline,
    timestamp,
  };

  // 4. Dispatch emails to Admin (gaurex.ai@gmail.com) AND Customer
  try {
    await dispatchInquiryEmails(inquiryPayload);
  } catch (err) {
    console.error("[INQUIRY EMAIL ERROR]:", err);
  }

  // 5. If external webhook is configured, dispatch payload
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryPayload)
      });
    } catch (err) {
      console.error("[GAUREX LEAD DISPATCH ERROR]:", err);
    }
  }

  return {
    success: true,
    message: "Thank you for contacting GAUREX. Your inquiry has been routed directly to our engineering team, and a confirmation email has been sent to your inbox.",
    referenceId
  };
}
