import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Business Dashboards & Analytics",
  description: "Real-time executive command consoles, live telemetry dashboards, and multi-source business intelligence systems.",
};

export default function BusinessAnalyticsPage() {
  return (
    <ServiceDetail
      slug="business-analytics"
      badge="Business Intelligence"
      title="Business Dashboards & Analytics"
      subtitle="We aggregate fragmented metrics from marketing channels, CRM pipelines, and financial software into clean, real-time command consoles built for executive clarity."
      outcome="Make decisive business decisions backed by real-time operational data, not month-end guesswork."
      problemHeading="Fragmented Metrics & Reporting Lag"
      problemText="Founders and executives spend hours each week manually stitching together spreadsheets from Stripe, Google Ads, HubSpot, and bank portals just to understand basic monthly revenue and churn. Operational issues go unnoticed until it's too late."
      architectureHeading="Unified Telemetry Data Aggregation"
      architectureSteps={[
        { title: "Automated Multi-Source Extraction", desc: "Background cron workers periodically fetch raw transaction records from payment gateways, ad platforms, and operational databases." },
        { title: "Transformation & Anomaly Detection", desc: "Data is normalized, deduplicated, and analyzed against historical baselines to flag unusual spikes or drop-offs." },
        { title: "Real-Time Executive Visual Telemetry", desc: "Zero-latency interactive dashboards featuring drill-down filters, automated PDF executive summaries, and mobile alert hooks." }
      ]}
      deliverables={[
        "Custom Executive Telemetry Dashboard Console",
        "Multi-Platform API Data Ingestion Pipelines",
        "Automated Weekly PDF Executive Briefs via Email",
        "Threshold Alert System for Slack & WhatsApp",
        "Role-Based Executive vs Managerial Displays",
        "Database Architecture & Data Warehouse Setup"
      ]}
      techStack={["Next.js", "TypeScript", "ClickHouse / PostgreSQL", "Apache ECharts", "Tailwind CSS", "Node.js"]}
    />
  );
}

