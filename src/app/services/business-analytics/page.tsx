import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Business Operations & Analytics Solutions | GAUREX",
  description: "Improve business visibility with analytics dashboards, reporting systems and connected operational data from GAUREX.",
  keywords: [
    "Business operations automation",
    "Business process optimization",
    "Business dashboards and analytics",
    "Executive telemetry systems",
    "Connected operational data"
  ],
  alternates: {
    canonical: "https://gaurex.vercel.app/services/business-analytics",
  },
  openGraph: {
    title: "Business Operations & Analytics Solutions | GAUREX",
    description: "Improve business visibility with analytics dashboards, reporting systems and connected operational data from GAUREX.",
    url: "https://gaurex.vercel.app/services/business-analytics",
  },
};

export default function BusinessAnalyticsPage() {
  return (
    <ServiceDetail
      slug="business-analytics"
      badge="Business Operations Automation"
      title="Make Better Business Decisions with Connected Data"
      subtitle="GAUREX aggregates fragmented metrics from marketing channels, CRM pipelines, financial software, and fulfillment databases into clean, real-time command consoles built for executive clarity."
      outcome="Make decisive business decisions backed by real-time operational data, not month-end guesswork."
      problemHeading="Fragmented Metrics, Conflicting Numbers & Month-End Reporting Lag"
      problemText="Founders and executives spend hours each week manually stitching together spreadsheets from Stripe, Google Ads, HubSpot, and bank portals just to understand basic monthly revenue, CAC, and churn. By the time reports are assembled, data is already outdated and operational bottlenecks remain hidden."
      targetAudience={[
        "Founders and executives spending 10+ hours monthly preparing manual spreadsheet reports",
        "Operations leaders managing multi-channel sales and fulfillment without a unified dashboard",
        "B2B SaaS companies requiring real-time ARR, MRR, churn, and cohort retention telemetry",
        "Enterprises seeking proactive anomaly alerts before revenue leaks go unnoticed"
      ]}
      automatableProcesses={[
        "Automated multi-platform API metric ingestion (Stripe, Razorpay, HubSpot, Google Ads)",
        "Daily/weekly automated executive PDF digests dispatched via email",
        "Real-time customer churn and subscription downgrade anomaly alerts via Slack",
        "Departmental throughput and technician productivity telemetry tracking",
        "Automated financial cash-flow and burn-rate runway forecasting calculations",
        "Customer health scoring aggregating support tickets, usage frequency, and invoice aging"
      ]}
      workflowDemonstration={{
        title: "Monthly Financial & Operational Reporting: Manual vs Automated Telemetry",
        manualProcess: {
          steps: [
            "Finance analyst logs into Stripe, Razorpay, QuickBooks, and bank portal",
            "Exports CSV files and copy-pastes records into master Excel workbook",
            "Runs VLOOKUPs to match client IDs across marketing and accounting tools",
            "Manually formats charts, adjusts date ranges, and writes notes",
            "Discovers discrepancy between payment gateway and CRM numbers; investigates for 3 hours",
            "Exports workbook to PDF and emails leadership team 8 days after month close"
          ],
          timeTaken: "25–30 Hours per Month",
          friction: "Reporting lag, human copy-paste errors, conflicting numbers across departments"
        },
        automatedProcess: {
          steps: [
            "Background serverless cron pipelines continuously ingest API payloads into high-speed columnar data store &rarr; executive dashboard computes real-time MRR, cash velocity, customer health, and CAC:LTV curves with automated weekly PDF digests delivered Monday morning at 8:00 AM."
          ],
          timeTaken: "Zero Human Hours (Live 24/7)",
          gain: "100% elimination of reporting labor, sub-second query latency, unified single source of truth"
        }
      }}
      limitationsAndCosts={{
        limitations: [
          "Data accuracy depends on underlying data hygiene in source applications (Stripe, CRM)",
          "Complex multi-currency cross-entity consolidations require initial currency exchange schema modeling",
          "Source platform API limits are managed via scheduled caching and background webhooks"
        ],
        costStructure: "Turnkey executive dashboard implementations starting at $4,000 with custom data warehouse configuration, automated reports, and zero monthly SaaS seat penalties."
      }}
      architectureHeading="Unified Telemetry Data Aggregation Architecture"
      architectureSteps={[
        { title: "Automated Multi-Source Extraction", desc: "Background cron workers periodically fetch raw transaction records from payment gateways, ad platforms, and operational databases." },
        { title: "Transformation & Anomaly Detection", desc: "Data is normalized, deduplicated, and analyzed against historical baselines to flag unusual spikes or drop-offs." },
        { title: "Real-Time Executive Visual Telemetry", desc: "Zero-latency interactive dashboards featuring drill-down filters, automated PDF executive summaries, and mobile alert hooks." }
      ]}
      businessBenefits={[
        { title: "Instant Executive Visibility", desc: "Eliminate 15+ hours spent each month manually compiling Excel reports across disparate platforms." },
        { title: "Proactive Anomaly Alerts", desc: "Get notified via Slack or WhatsApp the moment customer churn, ad acquisition costs, or inventory levels breach safety thresholds." },
        { title: "High-Performance Aggregations", desc: "Query millions of raw historical transactions in under 200 milliseconds using modern columnar or indexed data stores." }
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
        { stage: "KPI Definition & Data Audit", timeframe: "Days 1–5", deliverable: "Executive metrics scorecard, source API credentials audit, and data schema design." },
        { stage: "Extraction & Data Warehouse Pipeline", timeframe: "Days 6–15", deliverable: "ETL/ELT sync jobs, PostgreSQL storage, and historical data backfill." },
        { stage: "Dashboard Interface & Visualizations", timeframe: "Days 16–23", deliverable: "Interactive chart components, drill-down filters, and role-based views." },
        { stage: "Automated Alerts & Executive Briefs", timeframe: "Days 24–28", deliverable: "Automated weekly email PDF digests, Slack anomaly webhooks, and team training." }
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
      techStack={["Next.js", "TypeScript", "PostgreSQL", "Apache ECharts", "Tailwind CSS", "Node.js"]}
      relatedServices={[
        { name: "ERP & Management Systems", href: "/services/erp-systems", reason: "Connect your executive dashboards directly to operational inventory and dispatch databases." },
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Trigger automated operational actions directly when telemetry thresholds are breached." },
        { name: "AI Solutions & Agents", href: "/services/ai-solutions", reason: "Use AI agents to synthesize natural-language summaries of weekly dashboard trends." }
      ]}
    />
  );
}
