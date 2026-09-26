"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Cpu, Target, Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 w-full text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight max-w-4xl mx-auto"
        >
          Your Problem.<br />
          Our Technology.<br />
          One Solution.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light"
        >
          GAUREX transforms complex business problems into simple, scalable digital systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Find My Solution <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#solutions"
            className="px-8 py-4 bg-gray-100 text-black text-lg font-medium rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            Explore GAUREX
          </Link>
        </motion.div>
      </div>

      {/* System Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="mt-20 max-w-4xl mx-auto w-full px-6 relative z-0"
      >
        <div className="relative p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-gray-100 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-3xl -z-10" />
          
          {[
            { icon: Target, label: "Problem" },
            { icon: Activity, label: "Analyze" },
            { icon: Cpu, label: "Technology" },
            { icon: Rocket, label: "Solution" },
            { icon: ArrowRight, label: "Growth", highlight: true },
          ].map((item, index, arr) => (
            <div key={item.label} className="flex items-center w-full md:w-auto relative">
              <div className={`flex flex-col items-center gap-3 w-full ${item.highlight ? "text-black" : "text-gray-500"}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.highlight ? "bg-black text-white shadow-lg" : "bg-white shadow-sm border border-gray-100"}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${item.highlight ? "font-semibold" : ""}`}>{item.label}</span>
              </div>
              {index < arr.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[1px] bg-gradient-to-r from-gray-200 to-gray-300" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
