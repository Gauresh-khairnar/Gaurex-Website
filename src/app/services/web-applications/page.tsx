import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Modern Web Applications & Client Portals | GAUREX",
  description: "High-performance, conversion-engineered web portals and digital platforms engineered for sub-second load speeds, Apple-grade minimalism, and B2B lead generation.",
  alternates: {
    canonical: "https://gaurex.vercel.app/services/web-applications",
  },
  openGraph: {
    title: "Modern Web Applications & Client Portals | GAUREX",
    description: "Replace slow, bloated websites with high-performance Next.js web applications engineered for sub-second interaction speeds and high-intent B2B conversion.",
    url: "https://gaurex.vercel.app/services/web-applications",
  },
};

export default function WebApplicationsPage() {
  return (
    <ServiceDetail
      slug="web-applications"
      badge="Web Engineering"
      title="Web Applications & Client Portals"
      subtitle="We build high-converting, lightning-fast digital assets and self-service portals that represent your brand with authority and turn visitors into paying clients."
      outcome="Achieve sub-second interaction speeds and convert qualified visitors into predictable pipeline revenue."
      problemHeading="Slow, Static Websites That Act As Passive Brochures"
      problemText="Most corporate websites are bloated WordPress themes that take 6+ seconds to load on mobile, contain broken contact forms, and fail to qualify visitors. They generate zero measurable pipeline and damage brand credibility."
      architectureHeading="Edge-Rendered High-Throughput Web Stack"
      architectureSteps={[
        { title: "Server-Component Edge Streaming", desc: "HTML is streamed instantly from global edge nodes with zero render-blocking scripts, maximizing Core Web Vitals (LCP < 1.5s)." },
        { title: "Dynamic Lead Qualification Engine", desc: "Interactive calculators, architecture estimators, and multi-step intake flows capture high-intent enterprise prospects." },
        { title: "Direct CRM & Scheduler Synchronization", desc: "Submissions instantly trigger calendar invitations and sync directly to your internal sales pipeline." }
      ]}
      businessBenefits={[
        { title: "Sub-Second Global Page Loads", desc: "Edge prerendering ensures Largest Contentful Paint (LCP) under 1.2s across North America, Europe, Asia, and the Middle East." },
        { title: "Authoritative Apple-Grade Aesthetics", desc: "Clean minimalist typography and generous whitespace establish immediate brand trust for enterprise buyers." },
        { title: "Technical SEO & AEO Dominance", desc: "Comprehensive Schema.org markup, semantic HTML5, and llms.txt protocols position your brand for Google and AI engines." },
        { title: "Zero Security Vulnerabilities", desc: "Static generation and serverless APIs eliminate common CMS database vulnerabilities and exploit vectors." }
      ]}
      useCases={[
        {
          title: "Enterprise Technology Firm Digital Presence",
          industry: "B2B SaaS & Tech Consultancy",
          scenario: "Outdated WordPress site with slow load times, poor mobile UX, and weak lead conversion rates.",
          outcome: "Next.js migration achieving 99/100 Core Web Vitals, 3.4x increase in technical inquiry form completions."
        },
        {
          title: "Self-Service Customer Account Portal",
          industry: "Financial & Real Estate Services",
          scenario: "Clients constantly calling customer service to retrieve statements, invoices, and project updates.",
          outcome: "Secure authenticated portal reducing support call volume by 68% and enabling instant document downloads."
        },
        {
          title: "Multi-Region Marketing & Discovery Platform",
          industry: "Global Industrial & Manufacturing",
          scenario: "International clients needing localized catalog browsing and fast regional quotation requests.",
          outcome: "Multi-region edge-deployed platform with currency conversion, localized RFQ routing, and instant WhatsApp/Email handoff."
        }
      ]}
      implementationStages={[
        { stage: "Stage 1: UX Architecture & Design System", timeframe: "Days 1–7", deliverable: "Figma interactive prototype, typographic scale, and conversion wireframes." },
        { stage: "Stage 2: Next.js Engineering & Component Library", timeframe: "Days 8–18", deliverable: "Fully responsive component architecture, zero-bloat CSS, and animations." },
        { stage: "Stage 3: Forms, Integrations & CMS Setup", timeframe: "Days 19–26", deliverable: "Dual-email dispatch, CRM webhooks, calendar scheduling integration, and analytics." },
        { stage: "Stage 4: Core Web Vitals Optimization & Launch", timeframe: "Days 27–30", deliverable: "Lighthouse 95+ audit, global CDN deployment, DNS cutover, and search console indexing." }
      ]}
      faqs={[
        {
          q: "Why does GAUREX build with Next.js instead of WordPress or Webflow?",
          a: "Next.js provides unmatched speed, security, and developer flexibility. WordPress sites suffer from plugin bloat, database vulnerabilities, and sluggish mobile performance. Next.js delivers sub-second edge-rendered static pages with zero security maintenance."
        },
        {
          q: "Can non-technical team members update content easily?",
          a: "Yes. We integrate headless CMS solutions (such as Sanity, Contentful, or Git-based markdown) giving your marketing team an intuitive visual editor without compromising technical code performance."
        },
        {
          q: "How do you ensure strong technical SEO and Google rankings?",
          a: "Every page is built with semantic HTML5 hierarchy, dynamic OpenGraph assets, automated XML sitemaps, canonical links, and deep Schema.org structured data (Organization, Service, FAQPage)."
        },
        {
          q: "What is your typical delivery timeframe for a web application?",
          a: "A high-performance B2B website or customer portal is typically designed, developed, tested, and launched in 3 to 4 weeks."
        }
      ]}
      deliverables={[
        "Custom Ultra-Fast Next.js Web Platform",
        "Interactive Lead Qualification & Intake Tools",
        "Self-Service Client Portal & Document Vault",
        "Technical SEO Architecture & Schema Structured Data",
        "Global Edge CDN Deployment with 99.9% Uptime",
        "Full Analytics & Conversion Tracking Infrastructure"
      ]}
      techStack={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Cloudflare / Vercel Edge", "Zod"]}
      relatedServices={[
        { name: "Custom Software Development", href: "/services/custom-software", reason: "Extend your web portal into full enterprise SaaS applications and custom tools." },
        { name: "AI Solutions & Agents", href: "/services/ai-solutions", reason: "Embed intelligent AI agents directly into your customer onboarding and support flows." },
        { name: "Business Analytics & Dashboards", href: "/services/business-analytics", reason: "Track visitor journeys, conversion funnels, and customer retention metrics." }
      ]}
    />
  );
}
