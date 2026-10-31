import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "AI Solutions & Autonomous Agents",
  description: "Enterprise-grade AI solutions, LLM workflows, and autonomous agents engineered to eliminate manual task overhead for growing businesses.",
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
      deliverables={[
        "Custom Fine-Tuned AI Agents with Tool-Calling Capability",
        "Automated Document & Invoice Parsing Pipelines",
        "Private Retrieval-Augmented Generation (RAG) Architecture",
        "CRM & Database Integration Webhooks",
        "Admin Monitoring Dashboard & Confidence Telemetry",
        "Complete Code & Model Configuration Ownership"
      ]}
      techStack={["Python", "FastAPI", "OpenAI / Claude APIs", "PostgreSQL (pgvector)", "LangChain", "Next.js"]}
    />
  );
}

