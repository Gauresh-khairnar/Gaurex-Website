import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "ERP Automation Solutions for Businesses | GAUREX",
  description: "Simplify business management with custom ERP systems that connect workflows, data and operational processes.",
  keywords: [
    "ERP automation solutions",
    "Business system automation",
    "Custom ERP systems for SMEs",
    "Business management software",
    "Business operations automation"
  ],
  alternates: {
    canonical: "https://gaurex.vercel.app/services/erp-systems",
  },
  openGraph: {
    title: "ERP Automation Solutions for Businesses | GAUREX",
    description: "Simplify business management with custom ERP systems that connect workflows, data and operational processes.",
    url: "https://gaurex.vercel.app/services/erp-systems",
  },
};

export default function ERPSystemsPage() {
  return (
    <ServiceDetail
      slug="erp-systems"
      badge="ERP Automation Solutions"
      title="Smarter ERP Systems for Connected Business Operations"
      subtitle="GAUREX designs and develops centralized ERP automation platforms that connect your inventory, service dispatch, team allocations, and financial reconciliations under one real-time console with zero per-seat fees."
      outcome="Achieve total operational visibility, unified financial accounting, and automated cross-departmental coordination."
      problemHeading="Fragmented Departmental Spreadsheets & Blind Spots"
      problemText="When accounting operates in QuickBooks, sales in a disconnected CRM, and operations on physical whiteboards or personal messaging apps, leadership has zero real-time operational visibility. Decision-making is based on outdated data, and departments constantly step on each other."
      targetAudience={[
        "Growing distributors and manufacturers outgrowing Excel and experiencing inventory discrepancies",
        "Field service contractors managing technician dispatching across whiteboards and WhatsApp",
        "Companies paying astronomical monthly per-seat licensing to NetSuite or SAP without using 80% of features",
        "Enterprises requiring customized multi-warehouse inventory and BOM tracking workflows"
      ]}
      automatableProcesses={[
        "Automated inventory deduction and low-stock supplier re-order notifications",
        "Job dispatching with automated technician mobile task notifications",
        "Order-to-invoice generation and multi-gateway payment reconciliation",
        "Time tracking, technician billable hour logging, and payroll export",
        "Bill of Materials (BOM) explosion and raw material yield calculations",
        "Role-based audit logging tracking every transaction and status shift immutably"
      ]}
      workflowDemonstration={{
        title: "Field Job Completion to Customer Invoicing: Manual vs Automated ERP",
        manualProcess: {
          steps: [
            "Technician completes repair work on customer site",
            "Fills out paper carbon-copy work order and gets customer signature",
            "Returns to office at end of week and drops paperwork in billing tray",
            "Billing clerk deciphers handwritten notes and part serial numbers",
            "Manually updates inventory ledger in spreadsheet",
            "Re-types line items into invoicing software and mails invoice to client",
            "Finance reconciles payments 30 days later when customer calls with questions"
          ],
          timeTaken: "5–7 Days Latency",
          friction: "Lost paperwork, inventory stockouts, delayed cash collection, customer disputes"
        },
        automatedProcess: {
          steps: [
            "Technician marks job completed on mobile ERP portal with digital customer sign-off &rarr; system immediately deducts truck inventory, triggers automated parts replenishment, stages digital invoice sent to customer email with instant payment link, and updates executive revenue ledger."
          ],
          timeTaken: "Under 15 Seconds (Real-Time)",
          gain: "Shortened billing latency from 7 days to 15 seconds, 100% inventory accuracy"
        }
      }}
      limitationsAndCosts={{
        limitations: [
          "Data migration from legacy spreadsheets requires data sanitization and deduplication review",
          "Staff training and phased department-by-department rollout are required for smooth adoption",
          "Requires client commitment to deprecate offline shadow spreadsheets"
        ],
        costStructure: "Fixed milestone rollout typically spanning 45–60 days starting at $7,500, with zero ongoing per-seat monthly license fees and full database ownership."
      }}
      architectureHeading="Relational Enterprise Backbone Architecture"
      architectureSteps={[
        { title: "Central Transaction Core", desc: "Every inventory shift, client invoice, and employee timesheet is committed to an ACID-compliant central relational database." },
        { title: "Granular Role-Based Permissions", desc: "Managers, technicians, finance personnel, and executives each receive purpose-built interfaces with strict data boundary security." },
        { title: "Automated Ledger & Audit Trail", desc: "Every status change is immutably timestamped, providing a clear compliance audit trail and eliminating reconciliation discrepancies." }
      ]}
      businessBenefits={[
        { title: "Single Source of Truth", desc: "Unify fragmented operations, inventory, and finance so leadership makes decisions on real-time data." },
        { title: "Zero Monthly Seat Penalties", desc: "Unlike big-box ERPs that charge hundreds of dollars per user per month, your custom ERP has zero per-seat licensing fees." },
        { title: "Custom Operational Workflows", desc: "Built around your actual business processes rather than forcing your staff to adapt to generic software limitations." }
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
        { stage: "Process Audit & Schema Design", timeframe: "Days 1–10", deliverable: "Entity relationship diagram (ERD), role hierarchy, and core transaction flows." },
        { stage: "Core Database & Departmental Modules", timeframe: "Days 11–30", deliverable: "Relational database implementation, role-based security, and primary departmental modules." },
        { stage: "Integration & Historical Data Migration", timeframe: "Days 31–45", deliverable: "Historical spreadsheet and QuickBooks data migration, validation runs, and user acceptance testing." },
        { stage: "Phased Rollout & Team Training", timeframe: "Days 46–60", deliverable: "Department-by-department deployment, staff training workshops, and live cutover support." }
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
