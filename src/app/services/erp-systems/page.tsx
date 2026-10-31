import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom ERP & Business Management Systems | GAUREX",
  description: "Unified enterprise resource planning software connecting inventory, operations, billing, and team scheduling under one secure console with zero seat licenses.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/erp-systems",
  },
  openGraph: {
    title: "Custom ERP & Business Management Systems | GAUREX",
    description: "Replace disconnected departmental spreadsheets with a centralized relational ERP platform built specifically for your operations.",
    url: "https://gaurex.vercel.app/services/erp-systems",
  },
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
      businessBenefits={[
        { title: "Single Source of Truth", desc: "Unify fragmented operations, inventory, and finance so leadership makes decisions on real-time data." },
        { title: "Zero Monthly Seat Penalties", desc: "Unlike NetSuite or SAP that charge hundreds of dollars per user per month, your custom ERP has zero per-seat licensing fees." },
        { title: "Custom Operational Workflows", desc: "Built around your actual business processes rather than forcing your staff to adapt to generic software limitations." },
        { title: "Complete Compliance & Auditability", desc: "Immutable audit logs track every inventory transfer, price modification, and transaction status." }
      ]}
      useCases={[
        {
          title: "Multi-Warehouse Inventory & Fulfillment ERP",
          industry: "Wholesale, Import & Logistics",
          scenario: "Warehouse managers using disconnected spreadsheets unable to track batch numbers, expiration dates, or real-time shelf locations.",
          outcome: "Real-time barcode scanning, automated re-order thresholds, and bin-level location tracking across 4 regional warehouses."
        },
        {
          title: "Field Service & Job Dispatch Management",
          industry: "Commercial HVAC, Facilities & Contracting",
          scenario: "Technician schedules managed on whiteboards with work orders lost between field visits and finance billing.",
          outcome: "Mobile technician dispatch portal with digital customer sign-offs, parts tracking, and instant automated invoice generation."
        },
        {
          title: "Production Batch Tracking & Bill of Materials (BOM)",
          industry: "Precision Manufacturing & Fabrication",
          scenario: "Raw material consumption and assembly stages tracked on paper travelers leading to costly yield loss.",
          outcome: "Interactive shop-floor touch terminals tracking component usage, assembly stages, and quality inspection gates."
        }
      ]}
      implementationStages={[
        { stage: "Stage 1: Process Audit & Schema Design", timeframe: "Days 1–10", deliverable: "Entity relationship diagram (ERD), role hierarchy, and core transaction flows." },
        { stage: "Stage 2: Core Database & CRUD Modules", timeframe: "Days 11–30", deliverable: "Relational database implementation, role-based security, and primary departmental modules." },
        { stage: "Stage 3: Integration & Data Migration", timeframe: "Days 31–45", deliverable: "Historical spreadsheet and QuickBooks data migration, validation runs, and user acceptance testing." },
        { stage: "Stage 4: Phased Rollout & Team Training", timeframe: "Days 46–60", deliverable: "Department-by-department deployment, staff training workshops, and live cutover support." }
      ]}
      faqs={[
        {
          q: "How does a custom GAUREX ERP compare to NetSuite or SAP?",
          a: "Big-box ERP systems require 12–18 month implementations, cost hundreds of thousands of dollars, and charge punitive monthly per-seat licensing. GAUREX builds focused, clean ERP software tailored directly to your operations in 60 days, with 100% code ownership and zero ongoing seat license fees."
        },
        {
          q: "Can we migrate our existing historical spreadsheet data?",
          a: "Yes. Data migration is a core phase of our delivery. We sanitize, deduplicate, and import your existing spreadsheets, customer histories, and product SKUs into the new PostgreSQL relational database."
        },
        {
          q: "How secure is our enterprise data?",
          a: "All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We enforce strict Role-Based Access Control (RBAC), multi-factor authentication, and IP-whitelisted database access."
        },
        {
          q: "Can the ERP work offline on job sites?",
          a: "Yes. Mobile and technician interfaces are built with Progressive Web App (PWA) architecture and local IndexedDB caching, synchronizing automatically when connectivity is restored."
        }
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
      relatedServices={[
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Automate cross-departmental data flows between your ERP and external vendors." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Embed real-time financial, inventory, and operational KPIs directly into your ERP." },
        { name: "Custom Software Development", href: "/services/custom-software", reason: "Develop custom client-facing applications connected to your ERP core." }
      ]}
    />
  );
}
