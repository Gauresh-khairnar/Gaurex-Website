import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Bridge data model matching GAUREX iOS SalesLead schema
export interface BridgeSalesLead {
  id: string;
  clientName: string;
  companyName: string;
  email: string;
  phone?: string;
  projectScope: string;
  estimatedValue: number;
  stage: "discovery" | "proposal" | "negotiation" | "contract" | "closed";
  priority: "high" | "critical" | "medium";
  source: "gaurex_website_estimator" | "gaurex_website_contact" | "gaurex_neo_concierge";
  createdAt: string;
  notes?: string;
}

const STORAGE_PATH = path.join(process.cwd(), ".gaurex_leads.json");

function readStoredLeads(): BridgeSalesLead[] {
  try {
    if (fs.existsSync(STORAGE_PATH)) {
      const raw = fs.readFileSync(STORAGE_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading lead bridge storage:", err);
  }
  return [];
}

function writeStoredLeads(leads: BridgeSalesLead[]) {
  try {
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(leads.slice(0, 100), null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing lead bridge storage:", err);
  }
}

// GET: iOS app queries latest website leads
export async function GET(req: NextRequest) {
  const apiKey = req.headers.get("x-gaurex-key");
  const authHeader = req.nextUrl.searchParams.get("key");

  // Optional lightweight executive token check (defaults to open or secured if key configured)
  const expectedKey = process.env.GAUREX_IOS_BRIDGE_KEY || "gaurex_exec_2026";
  if (apiKey !== expectedKey && authHeader !== expectedKey) {
    // Return sanitized status
    return NextResponse.json({
      status: "online",
      service: "GAUREX Website-to-iOS Lead Bridge",
      timestamp: new Date().toISOString(),
      leadCount: readStoredLeads().length,
    });
  }

  const leads = readStoredLeads();
  return NextResponse.json({
    status: "ok",
    total: leads.length,
    leads,
  });
}

// POST: Website actions dispatch new leads into the bridge
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newLead: BridgeSalesLead = {
      id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      clientName: body.fullName || body.name || "Enterprise Prospect",
      companyName: body.companyName || body.company || "Enterprise Corp",
      email: body.email,
      phone: body.phone || "",
      projectScope: body.requiredSolution || body.scope || body.problem || "Full Architecture",
      estimatedValue: Number(body.estimatedValue) || (body.budget === "₹10L - ₹25L" ? 1800000 : 250000),
      stage: "discovery",
      priority: (body.budget && body.budget.includes("₹10L")) ? "critical" : "high",
      source: body.source || "gaurex_website_contact",
      createdAt: new Date().toISOString(),
      notes: body.problem ? `Need: ${body.problem} | Timeline: ${body.timeline || "Immediate"}` : undefined,
    };

    const currentLeads = readStoredLeads();
    currentLeads.unshift(newLead);
    writeStoredLeads(currentLeads);

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      message: "Lead successfully mirrored to GAUREX iOS Dashboard pipeline",
      lead: newLead,
    });
  } catch (err) {
    console.error("Bridge POST error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to bridge lead" },
      { status: 500 }
    );
  }
}
