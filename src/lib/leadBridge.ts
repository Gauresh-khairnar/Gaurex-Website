import fs from "fs";
import path from "path";

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

export function saveLeadToBridge(leadData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  scope: string;
  estimatedValue?: number;
  source?: BridgeSalesLead["source"];
  notes?: string;
}): BridgeSalesLead {
  const lead: BridgeSalesLead = {
    id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    clientName: leadData.name,
    companyName: leadData.company || "Enterprise Corp",
    email: leadData.email,
    phone: leadData.phone || "",
    projectScope: leadData.scope,
    estimatedValue: leadData.estimatedValue || 250000,
    stage: "discovery",
    priority: (leadData.estimatedValue && leadData.estimatedValue >= 1000000) ? "critical" : "high",
    source: leadData.source || "gaurex_website_contact",
    createdAt: new Date().toISOString(),
    notes: leadData.notes,
  };

  try {
    let current: BridgeSalesLead[] = [];
    if (fs.existsSync(STORAGE_PATH)) {
      const raw = fs.readFileSync(STORAGE_PATH, "utf-8");
      current = JSON.parse(raw);
    }
    current.unshift(lead);
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(current.slice(0, 100), null, 2), "utf-8");
  } catch (err) {
    console.error("[LEAD BRIDGE LOCAL WRITE ERROR]:", err);
  }

  return lead;
}
