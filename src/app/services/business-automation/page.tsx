import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Business Process Automation Services",
  description: "End-to-end API pipeline engineering and business workflow automation that eliminates manual data entry and operational bottlenecks.",
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
      deliverables={[
        "Custom API & Webhook Integration Microservices",
        "Automated Invoicing & Payment Reconciliation Flows",
        "Automated Multi-Channel Client Notification Engines",
        "Error Logging & Self-Healing Retry Handlers",
        "Executive Dashboard for Pipeline Status",
        "Full Documentation & Endpoint Specifications"
      ]}
      techStack={["Node.js", "TypeScript", "Redis / BullMQ", "PostgreSQL", "Cloudflare Workers", "AWS Lambda"]}
    />
  );
}

