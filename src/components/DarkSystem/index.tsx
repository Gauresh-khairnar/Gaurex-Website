"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  { id: "AI", label: "AI", desc: "Automate complex decision-making and scale hyper-personalized customer interactions instantly." },
  { id: "WEB", label: "WEB", desc: "Build conversion-focused digital platforms engineered structurally to capture target audiences." },
  { id: "DATA", label: "DATA", desc: "Centralize scattered business data into a single, accessible source of truth for real-time insights." },
  { id: "AUTOMATION", label: "AUTOMATION", desc: "Map repetitive manual workflows and convert them into perfectly executed digital pipelines." },
  { id: "CRM", label: "CRM", desc: "Deploy intelligent tracking systems to organize leads, retain clients, and increase lifetime value." }
];

export default function DarkSystem() {
  const [activeTech, setActiveTech] = useState("AI");

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 max-w-4xl mx-auto"
        >
          Explore the GAUREX Stack.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-4xl mx-auto border border-white/10 rounded-[3rem] p-8 md:p-16 bg-white/[0.02] backdrop-blur-md min-h-[400px] flex flex-col justify-between"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xl md:text-3xl font-bold">
            {technologies.map((tech, i, arr) => (
              <div key={tech.id} className="flex items-center gap-6 md:gap-12">
                <button
                  onClick={() => setActiveTech(tech.id)}
                  className={`transition-all duration-300 ${
                    activeTech === tech.id ? "text-white scale-110" : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {tech.label}
                </button>
                {i < arr.length - 1 && (
                  <span className="text-white/10 font-light">+</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed"
              >
                {technologies.find(t => t.id === activeTech)?.desc}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Connecting Lines representing data flow */}
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
              className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
