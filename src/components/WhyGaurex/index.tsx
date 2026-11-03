"use client";

import { Target, Cpu, GitMerge, ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  {
    icon: Target,
    title: "Problem-First Engineering",
    description: "Most agencies start by pitching a trendy tech stack or an expensive monthly retainer. We start by analyzing your balance sheet of lost hours, data bottlenecks, and manual friction. If an off-the-shelf tool solves it best, we tell you immediately.",
  },
  {
    icon: Cpu,
    title: "Practical AI + Software Integration",
    description: "We do not build gimmicky chatbots or experimental toy apps. We engineer production-grade LLM pipelines and autonomous agents directly into relational databases, ERP consoles, and operational software where they perform measurable work.",
  },
  {
    icon: GitMerge,
    title: "Built Around Actual Workflows",
    description: "Standard SaaS forces your operators to adapt to rigid third-party interfaces. GAUREX architects software directly around how your team actually works—matching your terminology, compliance guidelines, and custom edge cases.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Architecture & 100% Code Ownership",
    description: "You own every single line of code, database schema, and deployment configuration. Our systems are built with clean, enterprise-grade TypeScript, modern relational databases, and self-hosted cloud infrastructure designed to scale with zero seat licenses.",
  },
  {
    icon: UserCheck,
    title: "Direct Founder & Senior Engineering Involvement",
    description: "Every engagement is directly overseen, architected, and reviewed by Founder Gauresh Khairnar and senior engineers. Your project is never handed off to junior offshore contractors or junior account managers.",
  },
];

export default function WhyGaurex() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F7F7] border-b border-gray-200">
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
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Why Growing Businesses Partner With GAUREX.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We don&apos;t make hyperbolic guarantees. We deliver disciplined engineering, honest technical counsel, and digital systems built for operational reliability.
          </p>
        </motion.div>

        {/* 5 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="group-hover:text-black transition-colors">Standard 0{idx + 1}</span>
                  <span className="text-black font-semibold">Strict Compliance</span>
                </div>
              </motion.div>
            );
          })}

          {/* Founder Statement Card */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="bg-black text-white rounded-2xl border border-black p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">
                Founder&apos;s Commitment
              </span>
              <p className="text-sm md:text-base text-gray-200 font-light leading-relaxed mb-6 italic">
                &ldquo;Our philosophy is straightforward: technology should serve your business operations, not complicate them. We engineer systems that work reliably so you can focus on building your enterprise.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <div className="font-bold text-sm text-white">Gauresh Khairnar</div>
              <div className="text-xs text-gray-400">Founder & Principal Systems Architect, GAUREX</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
