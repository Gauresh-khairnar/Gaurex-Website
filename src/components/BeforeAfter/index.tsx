"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function BeforeAfter() {
  const badFlow = ["Instagram DM", "WhatsApp", "Excel Sheet", "Manual Follow-up", "Lost Lead"];
  const goodFlow = ["Ad / Traffic", "GAUREX CRM", "AI Qualification", "Automated Nurture", "Closed Client"];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            The difference a system makes.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 justify-center">
          {/* Before */}
          <div className="flex-1 w-full bg-red-50/30 p-8 rounded-[3rem] border border-red-100 flex flex-col items-center">
            <span className="text-sm font-bold text-red-500 tracking-widest uppercase mb-12">Before GAUREX</span>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              {badFlow.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full bg-white border border-red-200 text-gray-500 py-4 px-6 rounded-xl text-center shadow-sm">
                    {step}
                  </div>
                  {i < badFlow.length - 1 && <X className="w-5 h-5 text-red-300 my-4" />}
                </div>
              ))}
            </div>
          </div>

          <div className="w-12 flex justify-center items-center">
            <ArrowRight className="w-8 h-8 text-gray-300 hidden lg:block" />
            <ArrowRight className="w-8 h-8 text-gray-300 lg:hidden rotate-90" />
          </div>

          {/* After */}
          <div className="flex-1 w-full bg-black p-8 rounded-[3rem] shadow-2xl flex flex-col items-center text-white">
            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-12">With GAUREX</span>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              {goodFlow.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full bg-white/10 border border-white/20 text-white py-4 px-6 rounded-xl text-center font-medium shadow-lg backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {step}
                  </div>
                  {i < goodFlow.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="my-4"
                    >
                      <ArrowRight className="w-5 h-5 text-white/50 rotate-90" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
