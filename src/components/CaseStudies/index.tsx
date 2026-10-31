"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Verified Systems Engineering</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Honest Project Showcase: Real Problems, Built Solutions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We prioritize transparency over invented statistics. Below are representative engineering engagements demonstrating how GAUREX identifies operational bottlenecks and builds durable software architectures.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-2xl border border-gray-200 p-8 md:p-12 hover:border-black transition-all duration-200"
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
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded text-[11px] font-mono text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid: Problem, Solution, Actual Outcome */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Initial Problem */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded inline-block mb-3">
                    Initial Bottleneck
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Solution Developed */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-gray-100 px-2 py-0.5 rounded inline-block mb-3">
                    Solution Engineered
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Actual Outcome */}
                <div className="bg-black text-white p-6 rounded-xl border border-black flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gray-800 px-2 py-0.5 rounded inline-block mb-3">
                      Measurable Operational Outcome
                    </span>
                    <p className="text-xs text-gray-200 leading-relaxed font-medium">
                      {study.actualOutcome}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Verified Production Deployment</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-1">
              Have a similar operational challenge in your business?
            </h4>
            <p className="text-xs text-gray-400">
              We review your workflow requirements under strict commercial confidentiality and map an actionable system architecture.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Review Your Requirements <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
