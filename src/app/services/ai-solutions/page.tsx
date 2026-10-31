import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions & Autonomous AI Agents | GAUREX",
  description: "Enterprise-grade AI solutions, LLM workflows, and autonomous agents engineered to eliminate manual task overhead for businesses in USA, UK, UAE & India.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/ai-solutions",
  },
  openGraph: {
    title: "Enterprise AI Solutions & Autonomous AI Agents | GAUREX",
    description: "Deploy private LLM pipelines and autonomous agents with tool-calling capabilities and deterministic business safeguards.",
    url: "https://gaurex.vercel.app/services/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return (
    <ServiceDetail
      slug="ai-solutions"
      badge="Intelligent Automation & LLMs"
      title="AI Solutions & Autonomous Agents"
      subtitle="We engineer reliable AI systems embedded directly into your core business applications—automating routine communication, document parsing, and decision triage 24/7."
      outcome="Eliminate up to 70% of routine manual triage with zero human latency."
      problemHeading="Manual Data Triage & High Support Overhead"
      problemText="Growing companies lose hundreds of hours each month manually reviewing inbound leads, reading repetitive client inquiries, and copying data from PDF documents into CRMs. Traditional chatbot widgets hallucinate or frustrate customers with generic answers."
      architectureHeading="Deterministic AI Agent Architecture"
      architectureSteps={[
        { title: "Retrieval-Augmented Ingestion", desc: "We ingest your internal SOPs, product documentation, and client histories into a private, secure vector database." },
        { title: "Tool-Calling Agents", desc: "Our agents execute verified database lookups, CRM status updates, and calendar bookings with strict schema validation." },
        { title: "Human-in-the-Loop Safeguards", desc: "Edge cases that fall below confidence thresholds are routed cleanly to senior team members with full audit context." }
      ]}
      businessBenefits={[
        { title: "70% Reduction in Triage Time", desc: "Immediate responses to customer inquiries and automated classification without manual intervention." },
        { title: "Zero Hallucination Guarantee", desc: "Agents operate within bounded context windows with deterministic tool-calling schemas and fallback verification." },
        { title: "Private Data Sovereignty", desc: "Your proprietary business knowledge is stored in dedicated vector databases and never used for public model training." },
        { title: "24/7 Operational Availability", desc: "Autonomous workflows handle cross-timezone inquiries, invoice verification, and system alerts without staffing delays." }
      ]}
      useCases={[
        {
          title: "Autonomous Inbound Lead Qualification",
          industry: "B2B SaaS & Professional Services",
          scenario: "High-volume inbound inquiries requiring qualification against company criteria, CRM enrichment, and automated booking.",
          outcome: "Under-60-second response latency, 42% higher qualified meeting conversion rate."
        },
        {
          title: "Multi-Format Invoice & Contract Parsing",
          industry: "Logistics, Supply Chain & Legal",
          scenario: "Incoming PDFs, scanned receipts, and multi-page agreements requiring structured extraction into ERP systems.",
          outcome: "99.4% field extraction accuracy with automated discrepancy escalation."
        },
        {
          title: "Context-Aware Customer Support Co-Pilot",
          industry: "Fintech & E-Commerce",
          scenario: "Support engineers overloaded with tier-1 inquiries while managing complex enterprise accounts.",
          outcome: "Instant drafted responses referencing live order history and internal runbooks, cutting resolution time by 55%."
        }
      ]}
      implementationStages={[
        { stage: "Stage 1: Architecture & Data Ingestion", timeframe: "Days 1–5", deliverable: "Knowledge base ingestion, vector embedding setup, and schema definition." },
        { stage: "Stage 2: Agent Tooling & Guardrails", timeframe: "Days 6–15", deliverable: "Tool-calling webhooks, guardrail test suite, and edge-case routing logic." },
        { stage: "Stage 3: Integration & Sandboxed Pilot", timeframe: "Days 16–22", deliverable: "CRM/ERP connection, live shadowing mode, and validation benchmarks." },
        { stage: "Stage 4: Production Deployment & Telemetry", timeframe: "Days 23–30", deliverable: "Production release, admin monitoring dashboard, and operational runbook." }
      ]}
      faqs={[
        {
          q: "How does GAUREX prevent AI hallucinations?",
          a: "We implement Retrieval-Augmented Generation (RAG) coupled with strict schema-constrained tool calling. The model is instructed to answer solely using retrieved internal data and must output structured JSON parameters. If confidence falls below 95%, it triggers a graceful human handoff."
        },
        {
          q: "Will our company data be used to train public AI models?",
          a: "Never. We utilize enterprise API agreements (Azure OpenAI, Claude Enterprise, or self-hosted open models like Llama 3) with zero-data-retention policies. Your intellectual property and customer records remain strictly private."
        },
        {
          q: "Can the AI agent take actions in our existing software?",
          a: "Yes. Our agents are built with tool-calling capabilities that interface with your existing REST APIs, GraphQL endpoints, SQL databases, CRMs (HubSpot, Salesforce), and ERPs."
        },
        {
          q: "What is the typical timeline to deploy a production AI agent?",
          a: "A focused pilot is delivered within 14 days, followed by full production deployment, integration testing, and team training within 30 days."
        }
      ]}
      deliverables={[
        "Custom Fine-Tuned AI Agents with Tool-Calling Capability",
        "Automated Document & Invoice Parsing Pipelines",
        "Private Retrieval-Augmented Generation (RAG) Architecture",
        "CRM & Database Integration Webhooks",
        "Admin Monitoring Dashboard & Confidence Telemetry",
        "Complete Code & Model Configuration Ownership"
      ]}
      techStack={["Python", "FastAPI", "OpenAI / Claude APIs", "PostgreSQL (pgvector)", "LangChain", "Next.js"]}
      relatedServices={[
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Connect AI agents to multi-step RPA and webhook triggers across legacy tools." },
        { name: "Custom Software Development", href: "/services/custom-software", reason: "Build scalable cloud microservices and proprietary platforms to power your AI." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Track agent ROI, error rates, and operational throughput in real-time." }
      ]}
    />
  );
}
