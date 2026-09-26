"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "THE PROBLEM",
    content: "Your business is losing leads.",
  },
  {
    num: "02",
    label: "WHY?",
    content: "Leads are coming from Instagram + Website + WhatsApp. But nothing is connected.",
  },
  {
    num: "03",
    label: "THE GAUREX SOLUTION",
    content: "Website + CRM + Automation + Analytics",
  },
  {
    num: "04",
    label: "THE SYSTEM",
    content: "Everything connected.",
  },
  {
    num: "05",
    label: "THE RESULT",
    content: "More visibility.\nLess manual work.\nBetter follow-up.",
  },
];

export default function ProblemStories() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="py-16 md:py-24"
              >
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
                  {step.num} / {step.label}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight whitespace-pre-line">
                  {step.content}
                </h3>
              </motion.div>
              
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 80, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-px bg-gray-200 relative"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-200 translate-y-1/2" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
