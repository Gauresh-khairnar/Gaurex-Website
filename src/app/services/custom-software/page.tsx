import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom Software Development & Engineering | GAUREX",
  description: "Enterprise full-stack software development tailored to your exact business operations and technical architecture. Zero vendor lock-in with 100% IP ownership.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Engineering Firm | GAUREX",
    description: "Architect and build full-stack web applications, internal tools, and scalable cloud systems engineered for your proprietary operations.",
    url: "https://gaurex.vercel.app/services/custom-software",
  },
};

export default function CustomSoftwarePage() {
  return (
    <ServiceDetail
      slug="custom-software"
      badge="Full-Stack Engineering"
      title="Custom Software Development"
      subtitle="We architect and build full-stack web applications and internal tools designed around your proprietary business workflows—free from monthly seat licenses and vendor lock-in."
      outcome="Achieve absolute operational alignment with 100% intellectual property ownership."
      problemHeading="Off-the-Shelf Software Doesn't Fit Your Reality"
      problemText="Generic SaaS products force your team into rigid operational templates. You pay expensive recurring seat licenses for dozens of features you never use while lacking the core custom functionality your business uniquely requires."
      architectureHeading="Modern Clean-Architecture Web Core"
      architectureSteps={[
        { title: "Domain-Driven Data Modeling", desc: "We design robust relational database schemas optimized for your exact transaction lifecycle, concurrency requirements, and reporting." },
        { title: "Modular Type-Safe API Layer", desc: "Fast, secure REST and GraphQL endpoints built with comprehensive validation, caching, and rate limiting." },
        { title: "High-Performance Modern Frontend", desc: "Responsive, accessible user interfaces built with Next.js and React that deliver sub-second interactions on desktop and mobile." }
      ]}
      businessBenefits={[
        { title: "100% Tailored Workflow Fit", desc: "Software that mirrors your exact competitive advantage rather than forcing compliance with generic SaaS limitations." },
        { title: "Zero Recurring Seat Licenses", desc: "Scale from 10 to 1,000 team members without paying arbitrary per-user monthly SaaS subscription penalties." },
        { title: "Complete IP & Data Sovereignty", desc: "You own the full source code, database architecture, and deployment pipelines outright." },
        { title: "Enterprise Scalability & Speed", desc: "Engineered with modular microservices and modern relational databases that scale to millions of records." }
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
        { stage: "Stage 1: Technical Architecture & Wireframes", timeframe: "Days 1–7", deliverable: "Interactive Figma wireframes, relational database schema, and architecture specification." },
        { stage: "Stage 2: Core Backend & Data Layer", timeframe: "Days 8–20", deliverable: "PostgreSQL schema, Prisma ORM migrations, authentication, and REST/GraphQL API endpoints." },
        { stage: "Stage 3: Frontend Development & Role Workflows", timeframe: "Days 21–35", deliverable: "Next.js responsive interface, role-based access control (RBAC), and user workflows." },
        { stage: "Stage 4: Quality Assurance, Security Audit & Handover", timeframe: "Days 36–45", deliverable: "Security pen-testing, load verification, production cloud deployment, and full code handover." }
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
        { name: "Web Applications & Platforms", href: "/services/web-applications", reason: "Optimize your customer-facing web presence with sub-second Core Web Vitals." },
        { name: "ERP & Management Systems", href: "/services/erp-systems", reason: "Integrate custom software into comprehensive enterprise resource planning." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Gain real-time business visibility across your custom software metrics." }
      ]}
    />
  );
}
