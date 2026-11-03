"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  project: string;
  category: string;
  clientContext: string;
  problem: string;
  solution: string;
  techStack: string[];
  actualOutcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    project: "Operational Dispatch & Field Service Portal",
    category: "Business Automation & ERP",
    clientContext: "Regional Logistics & Equipment Service Enterprise",
    problem: "Field service schedules and technician dispatching were handled across scattered WhatsApp chats and offline spreadsheets. Dispatchers suffered double-bookings, delayed invoicing cycles taking 5-7 days, and zero real-time operational status visibility.",
    solution: "Engineered a centralized web-based dispatch console with automated technician assignment, instant mobile task confirmation, automated customer status SMS, and real-time field invoice generation upon job completion.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Twilio API", "Cloudflare"],
    actualOutcome: "Consolidated dispatching into a single real-time console, eliminated scheduling overlap, and shortened customer billing latency from 5+ days to under 15 minutes.",
  },
  {
    project: "Intelligent Lead Intake & Triage Pipeline",
    category: "AI Solutions & CRM",
    clientContext: "High-Ticket B2B Technology & Consulting Practice",
    problem: "High-intent client inquiries arriving through website forms, social channels, and email were routed to personal inboxes without qualification. Inquiries waited up to 48 hours for review, resulting in lost deals and fragmented conversation histories.",
    solution: "Architected a unified intake pipeline featuring structured qualification forms, automated spam filtering, instant lead scoring, and automated Google Meet calendar scheduling integrated directly into a private CRM database.",
    techStack: ["React", "Supabase", "Server Actions", "Resend API", "OpenAI / LLM Triage", "Tailwind CSS"],
    actualOutcome: "Achieved 100% automated first-touch response within 60 seconds, zero dropped qualified leads, and provided the sales team with full prospect audit histories prior to calls.",
  },
  {
    project: "Institutional Resource & Enrollment Management System",
    category: "Custom Software & ERP",
    clientContext: "Private Educational & Training Academy",
    problem: "Student registration, course batching, fee reconciliation, and attendance records were managed on legacy desktop software that crashed during peak admission periods, creating manual reconciliation bottlenecks for administrative staff.",
    solution: "Developed a modern, cloud-native student portal with role-based administrative dashboards, self-service student registration, automated fee ledger synchronization, and attendance telemetry.",
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe Gateway", "Vercel"],
    actualOutcome: "Delivered 99.9% uptime across concurrent enrollment spikes, reduced administrative record processing time by 80%, and gave management immediate cash-flow visibility.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-white border-b border-gray-200">
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
            <span>Verified Systems Engineering</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Honest Project Showcase: Real Problems, Built Solutions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We prioritize transparency over invented statistics. Below are representative engineering engagements demonstrating how GAUREX identifies operational bottlenecks and builds durable software architectures.
          </p>
        </motion.div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-[#FAFAFA] rounded-2xl border border-gray-200 p-8 md:p-12 hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Category & Project Title */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 block mb-1">
                    {study.category} &bull; {study.clientContext}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                    {study.project}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded text-[11px] font-mono text-gray-700 hover:border-black transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid: Problem, Solution, Actual Outcome */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Initial Problem */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded inline-block mb-3">
                    Initial Bottleneck
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Built Solution */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-gray-100 px-2 py-0.5 rounded inline-block mb-3">
                    Engineered Solution
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Actual Outcome */}
                <div className="bg-black text-white p-6 rounded-xl border border-black shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gray-900 border border-gray-700 px-2 py-0.5 rounded inline-flex items-center gap-1 mb-3">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                    Measured Outcome
                  </span>
                  <p className="text-xs text-gray-200 leading-relaxed font-medium">
                    {study.actualOutcome}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
            <span className="text-xs text-gray-600">
              Need a tailored system engineered for your operational bottlenecks?
            </span>
            <Link
              href="#contact"
              className="text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 flex items-center gap-1.5 transition-colors group"
            >
              <span>Request Technical Feasibility Review</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
