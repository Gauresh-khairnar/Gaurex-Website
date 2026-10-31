import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Custom Software Engineering Firm",
  description: "Enterprise full-stack software development tailored to your exact business operations and technical architecture.",
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
      deliverables={[
        "Production-Grade Full-Stack Web Application",
        "Type-Safe Backend APIs & Microservices",
        "Role-Based Authentication & Permissions (RBAC)",
        "Relational Database Migrations & Cloud Deployment",
        "Automated CI/CD Testing & Deployment Workflows",
        "100% Source Code & Intellectual Property Handover"
      ]}
      techStack={["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]}
    />
  );
}

