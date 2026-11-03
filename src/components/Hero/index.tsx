"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ArrowDown, Database, Cpu, Workflow, BarChart3, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-100 overflow-hidden">
      
      {/* Subtle Apple-like Minimal Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(#000000 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 35%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 35%, #000 40%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Top Header Group */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100/90 border border-gray-200/80 mb-6 shadow-xs hover:border-black/30 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800">
              BUSINESS TECHNOLOGY & AI SOLUTIONS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08] text-balance mb-6"
          >
            Business Automation & AI Solutions for Growing Businesses.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto text-balance mb-10"
          >
            GAUREX designs and builds intelligent software, AI solutions and business automation systems that simplify operations and help growing businesses scale.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-sm"
            >
              Discuss Your Problem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {onOpenBooking ? (
              <button
                type="button"
                onClick={onOpenBooking}
                className="group w-full sm:w-auto px-8 py-4 bg-gray-50 text-black text-sm font-bold uppercase tracking-wider rounded-full border border-gray-200 hover:bg-gray-100 hover:border-gray-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Schedule Discovery Call
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-black transition-all" />
              </button>
            ) : (
              <Link
                href="#solutions"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-50 text-black text-sm font-bold uppercase tracking-wider rounded-full border border-gray-200 hover:bg-gray-100 hover:border-gray-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Explore Solutions
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:text-black transition-all" />
              </Link>
            )}
          </motion.div>

        </div>

        {/* Minimal Connected System Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mt-6"
        >
          <div className="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-gray-300 transition-colors">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              
              {/* Column 1: Disconnected Reality */}
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="w-full md:w-5/12 bg-white rounded-xl border border-gray-200 p-5 shadow-xs"
              >
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    Disconnected Reality
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Manual Latency</span>
                </div>
                <div className="space-y-2.5 text-xs text-gray-600">
                  <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between hover:bg-gray-100/70 transition-colors">
                    <span>Scattered Spreadsheets & Notes</span>
                    <span className="text-red-500 font-semibold">Siloed</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between hover:bg-gray-100/70 transition-colors">
                    <span>Manual WhatsApp & Email Triage</span>
                    <span className="text-red-500 font-semibold">Delayed</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-between hover:bg-gray-100/70 transition-colors">
                    <span>Repetitive Administrative Data Entry</span>
                    <span className="text-red-500 font-semibold">Human Error</span>
                  </div>
                </div>
              </motion.div>

              {/* Middle Engine Indicator */}
              <div className="flex flex-col items-center justify-center shrink-0 px-2 py-1">
                <div className="hidden md:flex flex-col items-center gap-1.5">
                  <motion.div 
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md relative"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black border border-white"></span>
                    </span>
                  </motion.div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">
                    GAUREX
                  </span>
                </div>
                <div className="flex md:hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 my-1">
                  <ArrowDown className="w-4 h-4 text-black animate-bounce" />
                  <span>Engineered Transformation</span>
                  <ArrowDown className="w-4 h-4 text-black animate-bounce" />
                </div>
              </div>

              {/* Column 2: Connected GAUREX System */}
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="w-full md:w-5/12 bg-black text-white rounded-xl border border-black p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3 border-b border-gray-800 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-gray-900 px-2 py-0.5 rounded border border-gray-700 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                    One Unified System
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Automated 24/7</span>
                </div>
                <div className="space-y-2.5 text-xs text-gray-300">
                  <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between hover:border-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-white" />
                      <span>Single Authoritative Source of Truth</span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between hover:border-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-white" />
                      <span>Autonomous AI Lead & Task Routing</span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-between hover:border-gray-700 transition-colors">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                      <span>Real-Time Executive Visibility</span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <span className="font-semibold text-black uppercase tracking-wider text-[11px]">
                Engineering Focus:
              </span>
              <div className="flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-1.5 hover:text-black transition-colors"><Layers className="w-3.5 h-3.5 text-black" /> Custom Architecture</span>
                <span className="flex items-center gap-1.5 hover:text-black transition-colors"><Workflow className="w-3.5 h-3.5 text-black" /> Zero-Touch Automations</span>
                <span className="flex items-center gap-1.5 hover:text-black transition-colors"><Cpu className="w-3.5 h-3.5 text-black" /> Practical AI Integration</span>
                <span className="flex items-center gap-1.5 hover:text-black transition-colors"><Database className="w-3.5 h-3.5 text-black" /> Complete Code Ownership</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
