import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "AI Business Automation Services | GAUREX",
  description: "Explore AI-powered business automation solutions from GAUREX. Simplify workflows, process information and build smarter business systems.",
  keywords: [
    "AI business automation services",
    "AI workflow automation agency",
    "Autonomous AI agents development",
    "AI solutions company",
    "Business process automation services"
  ],
  alternates: {
    canonical: "https://gaurex.vercel.app/services/ai-solutions",
  },
  openGraph: {
    title: "AI Business Automation Services | GAUREX",
    description: "Explore AI-powered business automation solutions from GAUREX. Simplify workflows, process information and build smarter business systems.",
    url: "https://gaurex.vercel.app/services/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return (
    <ServiceDetail
      slug="ai-solutions"
      badge="AI Business Automation Services"
      title="AI Automation Solutions for Modern Businesses"
      subtitle="GAUREX engineers reliable, deterministic AI systems and autonomous agents embedded directly into your core business applications—automating routine communication, document parsing, and decision triage 24/7."
      outcome="Eliminate up to 70% of routine manual triage with zero human latency and 100% data privacy."
      problemHeading="Manual Data Triage, Document Overload & Slow Support Response"
      problemText="Growing companies lose hundreds of hours each month manually reviewing inbound leads, reading repetitive client emails, and copying data from PDF documents and invoices into CRMs. Traditional chatbot widgets hallucinate or frustrate customers with generic answers, while staff are overwhelmed trying to maintain instant response times across timezones."
      targetAudience={[
        "B2B service firms receiving high volumes of repetitive inquiries and RFPs",
        "Logistics, freight, and accounting teams parsing thousands of PDF invoices monthly",
        "Support teams bogged down answering repetitive tier-1 technical and policy questions",
        "Founders looking to deploy autonomous AI agents that take verified database actions"
      ]}
      automatableProcesses={[
        "24/7 inbound lead qualification, enrichment, and CRM routing",
        "Unstructured PDF invoice, receipt, and contract data extraction",
        "Multi-language tier-1 customer inquiries with live database lookups",
        "Automated proposal drafting referencing historical deal records",
        "Internal company SOP knowledge retrieval for employees (Private RAG)",
        "Automated exception flagging and confidence-based human-in-the-loop escalation"
      ]}
      workflowDemonstration={{
        title: "Vendor Invoice Data Extraction: Manual vs Autonomous AI",
        manualProcess: {
          steps: [
            "Accounts payable receives PDF invoice via email",
            "Opens document and manually inspects line items, tax rates, and vendor details",
            "Logs into accounting software (QuickBooks/SAP)",
            "Manually re-keys vendor name, invoice date, amounts, and due dates",
            "Compares invoice against original purchase order for discrepancies",
            "Emails department head for sign-off if over authorization limit",
            "Files PDF in shared drive and marks email thread complete"
          ],
          timeTaken: "15–20 Minutes per Invoice",
          friction: "Typo risks on invoice numbers, delayed vendor payments, missed early-payment discounts"
        },
        automatedProcess: {
          steps: [
            "Incoming PDF invoice received &rarr; GAUREX vision/document AI extracts structured line items with 99.4% accuracy, validates tax calculations, performs automated PO matching in database, and stages ready-to-pay transaction in accounting console with human approval alert."
          ],
          timeTaken: "Under 6 Seconds per Document",
          gain: "95% reduction in invoice processing time, zero transcription errors, instant audit trail"
        }
      }}
      limitationsAndCosts={{
        limitations: [
          "AI agents require clear boundary rules and confidence thresholds to ensure deterministic output",
          "Low-resolution or handwritten scanned documents may require human verification fallback",
          "Enterprise API usage costs (OpenAI, Claude, Azure) scale with token volume (typically $30–$150/mo for mid-size teams)"
        ],
        costStructure: "Sprint-based implementation starting from $4,500 for custom agent workflows and private RAG databases, with complete code ownership and zero monthly agency retainers."
      }}
      architectureHeading="Deterministic AI Agent Architecture"
      architectureSteps={[
        { title: "Retrieval-Augmented Ingestion", desc: "We ingest your internal SOPs, product documentation, and client histories into a private, secure vector database." },
        { title: "Tool-Calling Agents", desc: "Our agents execute verified database lookups, CRM status updates, and calendar bookings with strict schema validation." },
        { title: "Human-in-the-Loop Safeguards", desc: "Edge cases that fall below confidence thresholds are routed cleanly to senior team members with full audit context." }
      ]}
      businessBenefits={[
        { title: "70% Reduction in Triage Time", desc: "Immediate responses to customer inquiries and automated classification without manual intervention." },
        { title: "Zero Hallucination Guarantee", desc: "Agents operate within bounded context windows with deterministic tool-calling schemas and fallback verification." },
        { title: "Private Data Sovereignty", desc: "Your proprietary business knowledge is stored in dedicated vector databases and never used for public model training." }
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
        { stage: "Architecture & Data Ingestion", timeframe: "Days 1–5", deliverable: "Knowledge base ingestion, vector embedding setup, and schema definition." },
        { stage: "Agent Tooling & Guardrails", timeframe: "Days 6–15", deliverable: "Tool-calling webhooks, guardrail test suite, and edge-case routing logic." },
        { stage: "Integration & Sandboxed Pilot", timeframe: "Days 16–22", deliverable: "CRM/ERP connection, live shadowing mode, and validation benchmarks." },
        { stage: "Production Deployment & Telemetry", timeframe: "Days 23–30", deliverable: "Production release, admin monitoring dashboard, and operational runbook." }
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
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Connect AI agents to multi-step background webhook triggers across legacy tools." },
        { name: "Custom Software Development", href: "/services/custom-software", reason: "Build scalable cloud microservices and proprietary platforms to power your AI." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Track agent ROI, error rates, and operational throughput in real-time." }
      ]}
    />
  );
}
