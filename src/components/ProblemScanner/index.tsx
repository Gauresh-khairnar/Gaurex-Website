"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const issues = [
  {
    label: "Lead Generation",
    chain: ["Lead leakage", "No centralized CRM", "Manual follow-ups", "Lost opportunities"],
    system: ["Lead Capture", "CRM", "Automation", "Analytics"]
  },
  {
    label: "Manual Operations",
    chain: ["Data entry errors", "Time wasted", "Slow execution", "Stalled growth"],
    system: ["Workflow Mapping", "API Integration", "Custom Automations", "ERP Dashboards"]
  },
  {
    label: "Customer Experience",
    chain: ["Slow response times", "Friction in booking", "Poor communication", "Lost clients"],
    system: ["Self-serve Booking", "AI Support Agents", "Automated SMS", "Client Portals"]
  }
];

export default function ProblemScanner() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            What's broken in your business?
          </h2>
          <p className="text-lg text-gray-500">Select an area to run a diagnostic.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Sidebar selector */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-1/3">
            {issues.map((issue, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`text-left px-6 py-4 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal font-medium text-lg border ${
                  selected === i
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                }`}
              >
                {issue.label}
              </button>
            ))}
          </div>

          {/* Diagnostic Display */}
          <div className="w-full lg:w-2/3 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                {/* Problem Chain */}
                <div className="mb-12">
                  <div className="text-xs font-bold text-red-500 tracking-widest uppercase mb-6">
                    PROBLEM DETECTED
                  </div>
                  <div className="flex flex-col gap-3">
                    {issues[selected].chain.map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-lg md:text-xl text-gray-800 font-medium">{item}</span>
                        {idx < issues[selected].chain.length - 1 && (
                          <ArrowDown className="w-4 h-4 text-gray-300 my-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Chain */}
                <div>
                  <div className="text-xs font-bold text-black tracking-widest uppercase mb-6">
                    GAUREX SYSTEM
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {issues[selected].system.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg md:text-xl text-black font-semibold">{item}</span>
                        {idx < issues[selected].system.length - 1 && (
                          <span className="text-gray-300 font-bold">+</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-10 mt-10 border-t border-gray-100">
              <button className="flex items-center gap-2 text-white bg-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Build My Solution <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
