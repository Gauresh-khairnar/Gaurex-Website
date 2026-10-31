import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Business Dashboards & Analytics Engineering | GAUREX",
  description: "Real-time executive command consoles, live telemetry dashboards, and multi-source business intelligence systems built for operational decision-making.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/business-analytics",
  },
  openGraph: {
    title: "Business Dashboards & Analytics Engineering | GAUREX",
    description: "Replace month-end reporting lag with real-time executive telemetry connecting Stripe, HubSpot, inventory, and accounting into one dashboard.",
    url: "https://gaurex.vercel.app/services/business-analytics",
  },
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
      businessBenefits={[
        { title: "Instant Executive Visibility", desc: "Eliminate 15+ hours spent each month manually compiling Excel reports across disparate platforms." },
        { title: "Proactive Anomaly Alerts", desc: "Get notified via Slack or WhatsApp the moment customer churn, ad acquisition costs, or inventory levels breach safety thresholds." },
        { title: "High-Performance Aggregations", desc: "Query millions of raw historical transactions in under 200 milliseconds using modern columnar or indexed data stores." },
        { title: "Single Source of Truth", desc: "Align leadership, finance, and marketing teams around validated, unified KPIs without conflicting spreadsheet numbers." }
      ]}
      useCases={[
        {
          title: "Executive Revenue & Cash Flow Console",
          industry: "B2B SaaS & Digital Agencies",
          scenario: "Leadership unable to accurately forecast runway, MRR churn, and net revenue retention across payment processors and currencies.",
          outcome: "Real-time ARR/MRR dashboard with cohort retention curves, automated runway projections, and LTV:CAC metrics."
        },
        {
          title: "Multi-Store Retail & Fulfillment Command Center",
          industry: "E-Commerce & Omnichannel Retail",
          scenario: "Operations managers blind to warehouse fulfillment bottlenecks, shipping carrier delays, and stockout risks.",
          outcome: "Live geospatial order fulfillment map tracking SLA compliance, courier performance, and inventory velocity."
        },
        {
          title: "Client Health & Churn Prevention Telemetry",
          industry: "Enterprise Service Providers & Logistics",
          scenario: "Account managers discovering dissatisfied or disengaged enterprise clients only after receiving contract cancellation notices.",
          outcome: "Automated account health scoring monitoring usage frequency, ticket sentiment, and payment timeliness to trigger retention interventions."
        }
      ]}
      implementationStages={[
        { stage: "Stage 1: KPI Definition & Data Audit", timeframe: "Days 1–5", deliverable: "Executive metrics scorecard, source API credentials audit, and data schema design." },
        { stage: "Stage 2: Extraction & Data Warehouse Pipeline", timeframe: "Days 6–15", deliverable: "ETL/ELT sync jobs, PostgreSQL/ClickHouse storage, and historical data backfill." },
        { stage: "Stage 3: Dashboard Interface & Visualizations", timeframe: "Days 16–23", deliverable: "Interactive chart components, drill-down filters, and role-based views." },
        { stage: "Stage 4: Automated Alerts & Executive Briefs", timeframe: "Days 24–28", deliverable: "Automated weekly email PDF digests, Slack anomaly webhooks, and team training." }
      ]}
      faqs={[
        {
          q: "How does GAUREX connect to our disparate data sources?",
          a: "We build secure serverless ETL workers that poll or receive webhooks from your payment gateways (Stripe, Razorpay), CRMs (HubSpot, Salesforce), ad platforms (Google Ads, Meta), and internal databases."
        },
        {
          q: "Can the dashboard be embedded inside our existing internal portal?",
          a: "Yes. Dashboards can be built as standalone executive consoles or seamlessly embedded into your existing Next.js or React web applications with secure token authentication."
        },
        {
          q: "How fresh is the data shown on the dashboard?",
          a: "Data can be streamed in real-time (via WebSockets or database change-data-capture) or synced at configurable intervals (e.g., every 5, 15, or 60 minutes) depending on your operational requirements."
        },
        {
          q: "Can we export reports for investors or board meetings?",
          a: "Yes. Dashboards include one-click PDF, CSV, and Excel export capabilities, as well as scheduled weekly/monthly executive summary email dispatches."
        }
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
      relatedServices={[
        { name: "ERP & Management Systems", href: "/services/erp-systems", reason: "Connect your executive dashboards directly to operational inventory and dispatch databases." },
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Trigger automated operational actions directly when telemetry thresholds are breached." },
        { name: "AI Solutions & Agents", href: "/services/ai-solutions", reason: "Use AI agents to synthesize natural-language summaries of weekly dashboard trends." }
      ]}
    />
  );
}
