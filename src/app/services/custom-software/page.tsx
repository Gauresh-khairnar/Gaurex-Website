import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Workflow Automation Consulting & Custom Software | GAUREX",
  description: "Get custom workflow automation and software solutions designed around your business processes, systems and operational requirements.",
  keywords: [
    "Workflow automation consulting",
    "Automated business workflows",
    "Custom software development company",
    "Custom business automation solutions",
    "Full-stack software engineering firm"
  ],
  alternates: {
    canonical: "https://gaurex.vercel.app/services/custom-software",
  },
  openGraph: {
    title: "Workflow Automation Consulting & Custom Software | GAUREX",
    description: "Get custom workflow automation and software solutions designed around your business processes, systems and operational requirements.",
    url: "https://gaurex.vercel.app/services/custom-software",
  },
};

export default function CustomSoftwarePage() {
  return (
    <ServiceDetail
      slug="custom-software"
      badge="Workflow Automation Consulting"
      title="Custom Workflow Automation for Your Business"
      subtitle="GAUREX architects and builds full-stack web applications, internal tools, and automated business workflows designed around your exact operational reality—with 100% code ownership and zero monthly seat licenses."
      outcome="Achieve absolute operational alignment with zero vendor lock-in and complete intellectual property ownership."
      problemHeading="Off-the-Shelf Software Doesn't Fit Your Proprietary Workflows"
      problemText="Generic SaaS products force your team into rigid operational templates. You pay expensive recurring seat licenses for dozens of features you never use while lacking the core custom functionality your business uniquely requires to maintain competitive advantage."
      targetAudience={[
        "Enterprises outgrowing off-the-shelf SaaS and paying punitive monthly per-seat licensing",
        "Companies with proprietary service delivery processes requiring bespoke internal portals",
        "Organizations needing strict regulatory compliance and private database isolation",
        "Startups needing scalable full-stack web applications built on clean TypeScript architectures"
      ]}
      automatableProcesses={[
        "Proprietary multi-role approval and dispatch workflows",
        "Automated client quote and complex engineering cost estimation engines",
        "Custom field technician scheduling, geolocation tracking, and mobile sign-offs",
        "Document generation, digital signature capture, and customer onboarding hubs",
        "Automated data migration pipelines between legacy on-prem systems and cloud databases",
        "Role-based access control (RBAC) with granular auditable permission boundaries"
      ]}
      workflowDemonstration={{
        title: "Complex Equipment Quoting: Manual Spreadsheets vs Custom Web Engine",
        manualProcess: {
          steps: [
            "Estimator opens massive multi-tab Excel spreadsheet with hundreds of formulas",
            "Manually updates raw material commodity prices from supplier PDFs",
            "Adjusts margin percentages and calculates custom delivery logistics",
            "Exports quote to Word, formats header/footer, and converts to PDF",
            "Sends to Director of Operations for email approval",
            "Waits 24-48 hours for sign-off before emailing customer",
            "If customer requests changes, repeats entire multi-hour spreadsheet cycle"
          ],
          timeTaken: "2–3 Days per Custom Quote",
          friction: "Broken spreadsheet formulas, version control collisions, lost deals due to quote latency"
        },
        automatedProcess: {
          steps: [
            "Estimator selects project specifications in custom web calculation portal &rarr; system pulls live commodity feeds, applies margin matrix with automated compliance validation, generates branded proposal PDF, routes for one-click mobile executive approval, and logs audit record in CRM."
          ],
          timeTaken: "Under 90 Seconds",
          gain: "95% faster quote generation, zero formula errors, instant deal cycle acceleration"
        }
      }}
      limitationsAndCosts={{
        limitations: [
          "Custom software requires initial architecture planning and user-testing phases rather than instantaneous template plug-and-play",
          "Scope must be clearly bounded per sprint to prevent unnecessary feature sprawl",
          "Requires dedicated cloud hosting environment (AWS, Vercel, or client private cloud)"
        ],
        costStructure: "Milestone-based engineering sprints starting from $6,500 with fixed milestones, 100% intellectual property handover, and zero ongoing per-user monthly SaaS fees."
      }}
      architectureHeading="Modern Clean-Architecture Web Core"
      architectureSteps={[
        { title: "Domain-Driven Data Modeling", desc: "We design robust relational database schemas optimized for your exact transaction lifecycle, concurrency requirements, and reporting." },
        { title: "Modular Type-Safe API Layer", desc: "Fast, secure REST and GraphQL endpoints built with comprehensive validation, caching, and rate limiting." },
        { title: "High-Performance Modern Frontend", desc: "Responsive, accessible user interfaces built with Next.js and React that deliver sub-second interactions on desktop and mobile." }
      ]}
      businessBenefits={[
        { title: "100% Tailored Workflow Fit", desc: "Software that mirrors your exact competitive advantage rather than forcing compliance with generic SaaS limitations." },
        { title: "Zero Recurring Seat Licenses", desc: "Scale from 10 to 1,000 team members without paying arbitrary per-user monthly SaaS subscription penalties." },
        { title: "Complete IP & Data Sovereignty", desc: "You own the full source code, database architecture, and deployment pipelines outright." }
      ]}
      useCases={[
        {
          title: "Custom Client Portal & Collaboration Hub",
          industry: "B2B Professional Services & Advisory",
          scenario: "Clients managing deliverables across disconnected email threads, shared drives, and spreadsheets.",
          outcome: "Unified branded client portal with document signing, milestone tracking, and automated status notifications."
        },
        {
          title: "Proprietary Equipment Scheduling & Field Operations",
          industry: "Heavy Construction & Field Service",
          scenario: "Dispatched teams relying on paper logs and phone calls to track heavy machinery allocation across job sites.",
          outcome: "Real-time responsive web app with geolocation tagging, equipment availability boards, and digital maintenance sign-offs."
        },
        {
          title: "High-Throughput Quote & Estimation Engine",
          industry: "Specialized Manufacturing & Engineering",
          scenario: "Complex engineering quotes taking days of manual spreadsheet formulas and engineering review.",
          outcome: "Rule-based web calculation engine that generates certified quotes and BOMs in seconds."
        }
      ]}
      implementationStages={[
        { stage: "Technical Architecture & Wireframes", timeframe: "Days 1–7", deliverable: "Interactive Figma wireframes, relational database schema, and architecture specification." },
        { stage: "Core Backend & Data Layer", timeframe: "Days 8–20", deliverable: "PostgreSQL schema, Prisma ORM migrations, authentication, and REST/GraphQL API endpoints." },
        { stage: "Frontend Development & Role Workflows", timeframe: "Days 21–35", deliverable: "Next.js responsive interface, role-based access control (RBAC), and user workflows." },
        { stage: "Security Audit, QA & Handover", timeframe: "Days 36–45", deliverable: "Security pen-testing, load verification, production cloud deployment, and full code handover." }
      ]}
      faqs={[
        {
          q: "What tech stack does GAUREX use for custom software?",
          a: "We rely on proven, enterprise-grade open-source technologies: Next.js and React for the frontend, TypeScript and Node.js / Python for the backend, PostgreSQL for data storage, and Docker / AWS for deployment."
        },
        {
          q: "Who owns the code upon project completion?",
          a: "You retain 100% intellectual property ownership of the entire repository, codebase, database schemas, and documentation. No licensing fees or hidden retainers."
        },
        {
          q: "How do you handle maintenance and feature upgrades after launch?",
          a: "We offer structured SLA-backed maintenance packages for proactive security patching, database optimization, and continuous feature roadmapping."
        },
        {
          q: "Can the software integrate with our existing accounting or ERP tools?",
          a: "Yes. Every custom software platform we build includes modular API adapters connecting cleanly to QuickBooks, NetSuite, SAP, Salesforce, or Stripe."
        }
      ]}
      deliverables={[
        "Production-Grade Full-Stack Web Application",
        "Type-Safe Backend APIs & Microservices",
        "Role-Based Authentication & Permissions (RBAC)",
        "Relational Database Migrations & Cloud Deployment",
        "Automated CI/CD Testing & Deployment Workflows",
        "100% Source Code & Intellectual Property Handover"
      ]}
      techStack={["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]}
      relatedServices={[
        { name: "Business Process Automation", href: "/services/business-automation", reason: "Automate background data flows between your custom software and external tools." },
        { name: "ERP & Management Systems", href: "/services/erp-systems", reason: "Integrate custom software into comprehensive enterprise resource planning." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Gain real-time business visibility across your custom software metrics." }
      ]}
    />
  );
}
