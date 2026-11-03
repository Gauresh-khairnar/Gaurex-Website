"use client";

import Link from "next/link";
import { ArrowRight, Bot, Workflow, Code, Database, Globe, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Bot,
    title: "AI Solutions & Agents",
    slug: "ai-solutions",
    outcome: "Eliminate 70% of routine manual triage with 24/7 intelligent task execution.",
    description: "Purpose-built LLM agents and machine intelligence embedded directly into your core business applications. We automate complex customer communication, data extraction, and decision support.",
    capabilities: [
      "24/7 Autonomous Customer & Lead Triage",
      "Intelligent Document & Invoice Parsing",
      "Custom Enterprise Knowledge-Base RAG",
      "Automated Multi-Step AI Workflow Execution"
    ],
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    slug: "business-automation",
    outcome: "Eliminate human data re-entry and recover 20+ hours of operational overhead weekly.",
    description: "Reliable background automation pipelines that connect isolated SaaS tools, databases, and APIs. We replace brittle manual hand-offs with bulletproof, auditable software workflows.",
    capabilities: [
      "Cross-Platform API & Webhook Pipelines",
      "Automated Order & Invoice Generation",
      "Customer Onboarding Sequences",
      "Multi-System Data Synchronization"
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    slug: "custom-software",
    outcome: "Achieve absolute operational alignment with 100% proprietary code ownership.",
    description: "Full-stack software engineering tailored specifically to your unique business logic. We build scalable, secure platforms free from monthly SaaS seat fees and rigid feature limitations.",
    capabilities: [
      "Modern Next.js & React Architecture",
      "High-Throughput Node & Python APIs",
      "Scalable Relational Database Schemas",
      "Enterprise Cloud Deployment & CI/CD"
    ],
  },
  {
    icon: Database,
    title: "ERP & Management Systems",
    slug: "erp-systems",
    outcome: "Consolidate operations, inventory, and finances into a single source of truth.",
    description: "Custom enterprise resource planning platforms engineered for growing SMEs. We connect supply chains, project milestones, team allocation, and billing into one synchronized command console.",
    capabilities: [
      "Granular Role-Based Access Controls",
      "Real-Time Inventory & Procurement Tracking",
      "Client Management & Milestone Billing",
      "Automated Financial Reconciliation"
    ],
  },
  {
    icon: Globe,
    title: "Web Applications & Portals",
    slug: "web-applications",
    outcome: "Convert visitors into paying customers with sub-second, conversion-engineered portals.",
    description: "Ultra-fast, enterprise-grade digital platforms engineered to capture, qualify, and retain customers. Built with pristine code quality, rock-solid security, and responsive layouts across all devices.",
    capabilities: [
      "Sub-Second Core Web Vitals Performance",
      "Self-Service Client & Partner Portals",
      "Custom E-Commerce & Transaction Engines",
      "Enterprise Authentication & Audit Logs"
    ],
  },
  {
    icon: BarChart2,
    title: "Business Dashboards & Analytics",
    slug: "business-analytics",
    outcome: "Make confident executive decisions backed by real-time visual telemetry.",
    description: "Unified business intelligence consoles that pull fragmented metrics across marketing, sales pipelines, and operations into clean, actionable dashboards with zero reporting delay.",
    capabilities: [
      "Live KPI Telemetry & Executive Displays",
      "Multi-Source Ingestion (Stripe, Ads, CRM)",
      "Automated Weekly PDF Executive Briefs",
      "Anomaly Detection & Operational Alerts"
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Pillars of Engineering</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Engineered Solutions Built Around Your Real Workflows.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We don&apos;t sell generic software templates. Every GAUREX platform is engineered from the ground up to solve specific operational bottlenecks and scale cleanly.
          </p>
        </motion.div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div>
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200/80 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-gray-400 font-semibold group-hover:text-black transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black">
                    {item.title}
                  </h3>

                  {/* Quantifiable Outcome Pill */}
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 mb-5 group-hover:bg-gray-100/70 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black block mb-0.5">
                      Business Outcome:
                    </span>
                    <span className="text-xs font-semibold text-gray-800 leading-snug block">
                      {item.outcome}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Key Capabilities:
                    </span>
                    {item.capabilities.map((cap, capIdx) => (
                      <div key={capIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Page Link */}
                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href={`/services/${item.slug}`}
                    className="w-full py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center gap-2 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-200"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
