"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

const modules = [
  { id: "web", label: "Website" },
  { id: "lead", label: "Lead Capture" },
  { id: "crm", label: "CRM" },
  { id: "ai", label: "AI Agent" },
  { id: "auto", label: "Automation" },
  { id: "analytics", label: "Analytics" },
];

export default function ArchitectureBuilder() {
  const [selected, setSelected] = useState<string[]>(["web", "lead", "crm"]);

  const toggleModule = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);
  };

  // Keep order of modules based on the array
  const activeModules = modules.filter(m => selected.includes(m.id));

  return (
    <section className="py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Interactive Architecture Builder
          </h2>
          <p className="text-lg text-gray-500">Select modules to build your custom GAUREX system.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
          {/* Controls */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 block">
              System Modules
            </span>
            {modules.map(mod => (
              <button
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all border ${
                  selected.includes(mod.id)
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <span className="font-medium">{mod.label}</span>
                {selected.includes(mod.id) && <CheckCircle2 className="w-5 h-5" />}
              </button>
            ))}
          </div>

          {/* Visualization */}
          <div className="w-full md:w-2/3 bg-white border border-gray-100 rounded-3xl p-12 shadow-sm flex flex-col items-center justify-center min-h-[500px]">
            <span className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-12 block text-center w-full">
              Live System Map
            </span>
            
            {activeModules.length === 0 ? (
              <div className="text-gray-400 font-medium">Select a module to start building.</div>
            ) : (
              <div className="flex flex-col items-center w-full max-w-xs">
                <AnimatePresence>
                  {activeModules.map((mod, i) => (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center w-full"
                    >
                      <div className="w-full bg-white border-2 border-black text-black py-4 px-6 rounded-xl text-center font-bold shadow-[0_4px_0_0_#000] relative z-10">
                        {mod.label}
                      </div>
                      {i < activeModules.length - 1 && (
                        <div className="flex justify-center items-center h-12 my-2 relative z-0">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 48 }}
                            className="w-0.5 bg-gray-300"
                          />
                          <ArrowDown className="absolute bottom-0 w-4 h-4 text-gray-400 translate-y-1/2" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
