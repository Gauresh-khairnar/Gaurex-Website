"use client";

import { ArrowRight, Search, Compass, Terminal, Gauge } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    phase: "Understand",
    icon: Search,
    headline: "Identify the Actual Operational Problem",
    description: "We begin with a thorough operational discovery. We interview your operators, audit manual hand-offs, inspect scattered data silos, and identify the root bottleneck before writing a single line of code.",
    deliverables: "Process map, friction audit, and clear problem definition.",
  },
  {
    num: "02",
    phase: "Architect",
    icon: Compass,
    headline: "Design the Appropriate Technical Blueprint",
    description: "We engineer a lean, modular architecture specifying data models, security boundaries, third-party integrations, and user permissions. We eliminate tech stack bloat and select the exact right tool for the job.",
    deliverables: "System architecture blueprint, database schema, and fixed scope.",
  },
  {
    num: "03",
    phase: "Engineer",
    icon: Terminal,
    headline: "Build, Integrate, and Rigorously Test",
    description: "Our senior engineers develop clean, maintainable TypeScript code, high-throughput APIs, and responsive frontends. We rigorously test edge cases, error conditions, and automated background failovers.",
    deliverables: "Production-ready codebase, automated test suites, and staging environment.",
  },
  {
    num: "04",
    phase: "Optimize",
    icon: Gauge,
    headline: "Deploy, Monitor, and Continuously Improve",
    description: "We deploy the system to high-availability cloud infrastructure, integrate live monitoring telemetry, train your core team, and measure operational throughput against baseline performance.",
    deliverables: "Live deployment, team onboarding session, and 99.9% uptime SLA.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] border-b border-gray-200">
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
            <span>Engineering Discipline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            How GAUREX Works: From Bottleneck to Solution.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We operate with surgical precision. No vague consulting decks, no endless scope creep, and no untested software. Just structured engineering focused on business outcomes.
          </p>
        </motion.div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col justify-between hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative group"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <span className="text-2xl font-black font-mono text-black group-hover:tracking-wider transition-all">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    Phase {step.num} &mdash; {step.phase}
                  </span>
                  
                  <h3 className="text-lg font-bold text-black mb-3 leading-snug">
                    {step.headline}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                    Core Deliverable:
                  </span>
                  <span className="text-xs font-semibold text-black leading-snug block">
                    {step.deliverables}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
          >
            <span>Have a technical problem? Review our architecture roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
