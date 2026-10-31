import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Business Process Automation & API Integration | GAUREX",
  description: "End-to-end API pipeline engineering and business workflow automation that eliminates manual data entry, human error, and operational bottlenecks.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/business-automation",
  },
  openGraph: {
    title: "Business Process Automation & Workflow Engineering | GAUREX",
    description: "Replace repetitive manual data transfers with deterministic event-driven API workflows and zero-touch synchronization.",
    url: "https://gaurex.vercel.app/services/business-automation",
  },
};

export default function BusinessAutomationPage() {
  return (
    <ServiceDetail
      slug="business-automation"
      badge="Workflow Engineering"
      title="Business Process Automation"
      subtitle="We design and deploy bulletproof API integration pipelines connecting your sales, billing, inventory, and fulfillment tools into zero-touch operational workflows."
      outcome="Reclaim 20+ hours of administrative overhead per week and eliminate manual data entry errors."
      problemHeading="Brittle Manual Hand-Offs & Data Desynchronization"
      problemText="When customer orders are logged in one app, invoices manually drafted in another, and dispatches sent over personal messaging, communication breaks down. Human data entry errors create lost inventory, billing delays, and customer dissatisfaction."
      architectureHeading="Event-Driven Micro-Service Pipeline"
      architectureSteps={[
        { title: "Webhook Ingestion & Idempotency", desc: "Every operational trigger is captured via secure webhook endpoints with automated retry policies and duplicate prevention." },
        { title: "Payload Transformation & Validation", desc: "Incoming records are sanitized, normalized to unified schemas, and validated against business rules." },
        { title: "Distributed Multi-Endpoint Sync", desc: "Transactions are committed synchronously across CRM, accounting, and communication APIs with real-time audit logs." }
      ]}
      businessBenefits={[
        { title: "Elimination of Data Entry Errors", desc: "Transactions map directly between systems with schema validation, preventing lost revenue and accounting discrepancies." },
        { title: "10x Operational Speed", desc: "Customer orders, payment confirmations, and fulfillment tickets trigger in milliseconds rather than hours." },
        { title: "Zero Lock-In Architecture", desc: "Built using production-standard TypeScript microservices rather than brittle no-code platforms that hit rate limits." },
        { title: "Comprehensive Audit Logging", desc: "Every transaction, payload, and API response is logged with searchable tracing for total compliance." }
      ]}
      useCases={[
        {
          title: "Order-to-Cash Automation",
          industry: "B2B Wholesale & Distribution",
          scenario: "Orders received via email/portal manually entered into QuickBooks and warehouse management software.",
          outcome: "Automated invoice generation, payment reconciliation, and warehouse dispatch within 3 seconds of checkout."
        },
        {
          title: "Cross-System Inventory Synchronization",
          industry: "Omnichannel Retail & E-Commerce",
          scenario: "Stock levels out-of-sync across Shopify, Amazon, and physical warehouse ERP resulting in overselling.",
          outcome: "Real-time bi-directional stock synchronization with low-inventory automated supplier PO generation."
        },
        {
          title: "Automated Client Onboarding Sequence",
          industry: "Financial & Legal Advisory",
          scenario: "New client sign-ups requiring NDA generation, KYC verification, folder creation in Google Drive, and Slack notifications.",
          outcome: "Completely automated onboarding path taking 45 seconds from signature to provisioned client portal."
        }
      ]}
      implementationStages={[
        { stage: "Stage 1: Workflow & API Mapping", timeframe: "Days 1–4", deliverable: "Process flow diagram, endpoint authentication, and edge-case mapping." },
        { stage: "Stage 2: Pipeline Microservice Development", timeframe: "Days 5–12", deliverable: "Worker queues, rate-limiter, idempotent webhook handlers, and error fallbacks." },
        { stage: "Stage 3: Staging Shadow Runs", timeframe: "Days 13–18", deliverable: "Dual-run comparison against existing manual processes to verify 100% accuracy." },
        { stage: "Stage 4: Live Cutover & Alert Setup", timeframe: "Days 19–25", deliverable: "Production release, automated Slack/email error telemetry, and failover runbook." }
      ]}
      faqs={[
        {
          q: "Why custom code instead of tools like Zapier or Make?",
          a: "While Zapier is suitable for simple 2-step tasks, enterprise operations quickly hit payload size limits, race conditions, expensive task billing, and brittle failure modes. GAUREX builds robust TypeScript worker pipelines with proper queuing, retry mechanisms, and zero per-run fees."
        },
        {
          q: "What happens if one of our third-party APIs goes down?",
          a: "Our pipelines use persistent message queues (Redis/BullMQ) with exponential backoff retries and dead-letter queues. No data is ever dropped; once the third-party endpoint recovers, the system drains the queue cleanly."
        },
        {
          q: "Can you automate legacy systems that lack public APIs?",
          a: "Yes. For legacy software, we implement headless browser automation, SFTP/database polling, or reverse-engineered private internal endpoints to bridge legacy platforms with modern cloud infrastructure."
        },
        {
          q: "Who owns the automation code and infrastructure?",
          a: "You retain 100% intellectual property ownership of the source code, deployment scripts, and credentials upon project completion."
        }
      ]}
      deliverables={[
        "Custom API & Webhook Integration Microservices",
        "Automated Invoicing & Payment Reconciliation Flows",
        "Automated Multi-Channel Client Notification Engines",
        "Error Logging & Self-Healing Retry Handlers",
        "Executive Dashboard for Pipeline Status",
        "Full Documentation & Endpoint Specifications"
      ]}
      techStack={["Node.js", "TypeScript", "Redis / BullMQ", "PostgreSQL", "Cloudflare Workers", "AWS Lambda"]}
      relatedServices={[
        { name: "ERP & Management Systems", href: "/services/erp-systems", reason: "Unify fragmented departmental spreadsheets into a centralized relational system." },
        { name: "AI Solutions & Agents", href: "/services/ai-solutions", reason: "Add intelligent cognitive classification and unstructured document parsing to your workflows." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Visualize automation throughput, cycle time reductions, and system health." }
      ]}
    />
  );
}
