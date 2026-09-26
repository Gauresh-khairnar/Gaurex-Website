"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

const techStack = [
  { id: "nextjs", name: "Next.js & React", reason: "For building blazing fast, highly interactive user interfaces and robust web applications." },
  { id: "python", name: "Python & FastAPI", reason: "Powers our high-performance backend systems, automation scripts, and complex data processing." },
  { id: "ai", name: "AI/ML & LLMs", reason: "Enables intelligent data analysis, automated customer support, and dynamic system reasoning." },
  { id: "supabase", name: "Supabase", reason: "Provides secure, scalable, real-time database architecture and user authentication." },
  { id: "cloud", name: "Cloud Infrastructure", reason: "Ensures 99.9% uptime, global scalability, and strict security compliance for all deployed systems." },
];

export default function TechStack() {
  const [activeTech, setActiveTech] = useState(techStack[0]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Technology Stack Explorer
          </h2>
          <p className="text-lg text-gray-500">We use the exact right tool for the exact right problem.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          
          {/* Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {techStack.map(tech => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(tech)}
                className={`px-4 py-4 rounded-xl text-sm font-bold tracking-wide transition-all border ${
                  activeTech.id === tech.id
                    ? "bg-black text-white border-black scale-105 shadow-lg"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-black"
                }`}
              >
                {tech.name}
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm w-full relative overflow-hidden"
              >
                <Code2 className="absolute -bottom-4 -right-4 w-32 h-32 text-gray-50/50 -z-10" />
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-4">
                  Why we use {activeTech.name}
                </span>
                <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
                  {activeTech.reason}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
