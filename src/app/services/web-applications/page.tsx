import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Modern Web Applications & Client Portals",
  description: "High-performance, conversion-engineered web portals and digital platforms engineered for sub-second load speeds and reliable customer conversion.",
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
      deliverables={[
        "Custom Ultra-Fast Next.js Web Platform",
        "Interactive Lead Qualification & Intake Tools",
        "Self-Service Client Portal & Document Vault",
        "Technical SEO Architecture & Schema Structured Data",
        "Global Edge CDN Deployment with 99.9% Uptime",
        "Full Analytics & Conversion Tracking Infrastructure"
      ]}
      techStack={["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Cloudflare / Vercel Edge", "Zod"]}
    />
  );
}

