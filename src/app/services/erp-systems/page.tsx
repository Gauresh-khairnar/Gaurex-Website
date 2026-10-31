import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom ERP & Business Management Systems",
  description: "Unified enterprise resource planning software connecting inventory, operations, billing, and team scheduling under one secure console.",
};

export default function ERPSystemsPage() {
  return (
    <ServiceDetail
      slug="erp-systems"
      badge="Enterprise Systems"
      title="ERP & Business Management Systems"
      subtitle="We build centralized management platforms that unite your inventory, service dispatch, team allocations, and financial reconciliations into a single real-time console."
      outcome="Total operational visibility and unified accounting across all active departments."
      problemHeading="Fragmented Data Silos & Blind Spots"
      problemText="When accounting operates in QuickBooks, sales in a disconnected CRM, and operations on physical whiteboards or spreadsheets, leadership has zero real-time visibility. Decision-making is based on outdated data, and departments constantly step on each other."
      architectureHeading="Relational Enterprise Backbone"
      architectureSteps={[
        { title: "Central Transaction Core", desc: "Every inventory shift, client invoice, and employee timesheet is committed to an ACID-compliant central relational database." },
        { title: "Granular Role-Based Permissions", desc: "Managers, technicians, finance personnel, and executives each receive purpose-built interfaces with strict data boundary security." },
        { title: "Automated Ledger & Audit Trail", desc: "Every status change is immutably timestamped, providing a clear compliance audit trail and eliminating reconciliation discrepancies." }
      ]}
      deliverables={[
        "Custom Centralized ERP Management Platform",
        "Inventory, Dispatch & Asset Tracking Modules",
        "Role-Based Permission & Security Management",
        "Automated Invoicing & Payment Reconciliation Engine",
        "Live Operational Command Console for Executives",
        "Staff Training & Ongoing Systems Maintenance SLA"
      ]}
      techStack={["Next.js App Router", "TypeScript", "PostgreSQL", "Supabase / AWS RDS", "Redis", "Tailwind CSS"]}
    />
  );
}

