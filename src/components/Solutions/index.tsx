"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Business Growth Systems",
    desc: "Solve fragmented digital operations.",
    problem: "Disconnected tools stalling growth.",
    solution: "Unified digital ecosystem.",
    outcome: "Scalable business operations.",
  },
  {
    title: "AI Solutions",
    desc: "Use AI to automate decisions and workflows.",
    problem: "Slow, manual decision-making.",
    solution: "Custom AI integrations.",
    outcome: "Faster, smarter business output.",
  },
  {
    title: "Smart Websites",
    desc: "Turn online presence into a business asset.",
    problem: "Website acts as a brochure, not a tool.",
    solution: "Conversion-optimized digital platform.",
    outcome: "Predictable lead generation.",
  },
  {
    title: "Business Automation",
    desc: "Reduce repetitive manual work.",
    problem: "Hours wasted on data entry.",
    solution: "Automated workflow pipelines.",
    outcome: "Reclaimed time and zero human error.",
  },
  {
    title: "AI Agents",
    desc: "Create intelligent systems that handle business tasks.",
    problem: "Customer support & task handling is expensive.",
    solution: "24/7 AI-driven assistants.",
    outcome: "Lower costs, better customer experience.",
  },
  {
    title: "CRM & Lead Systems",
    desc: "Capture, organize and follow up with customers.",
    problem: "Losing track of potential clients.",
    solution: "Centralized lead management.",
    outcome: "Higher conversion rates.",
  },
  {
    title: "Booking Systems",
    desc: "Simplify appointments and scheduling.",
    problem: "Friction in booking services.",
    solution: "Seamless self-serve scheduling.",
    outcome: "Increased appointments, less admin.",
  },
  {
    title: "ERP & Management Systems",
    desc: "Connect business operations in one system.",
    problem: "Data scattered across departments.",
    solution: "Single source of truth platform.",
    outcome: "Total business visibility.",
  },
  {
    title: "Custom Software",
    desc: "Build technology around unique business requirements.",
    problem: "Off-the-shelf software doesn't fit.",
    solution: "Tailor-made digital architecture.",
    outcome: "Absolute operational alignment.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Solutions Built Around Your Business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-black/10 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-8">{item.desc}</p>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-medium w-16 shrink-0">Problem</span>
                  <span className="text-gray-800">{item.problem}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-medium w-16 shrink-0">Solution</span>
                  <span className="text-black font-medium">{item.solution}</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-start gap-3">
                  <span className="text-black font-semibold w-16 shrink-0">Outcome</span>
                  <span className="text-black font-semibold flex items-center gap-2">
                    {item.outcome} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
