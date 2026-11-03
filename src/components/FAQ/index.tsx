"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, FAQItem } from "@/data/faqs";

export type { FAQItem };
export { faqs };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Direct Answers & Technical Guidance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Frequently Asked Questions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Direct, factual answers to the common technical and operational questions business leaders ask before engaging GAUREX.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-black shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-white" 
                    : "border-gray-200 bg-[#FAFAFA] hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-black tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "rotate-180 bg-black text-white border-black" 
                      : "bg-white border-gray-300 text-gray-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-6 pt-0 border-t border-gray-100 text-xs md:text-sm text-gray-700 leading-relaxed space-y-3.5 bg-white">
                        <p className="font-semibold text-black pt-4">
                          {faq.shortAnswer}
                        </p>
                        <p className="text-gray-600">
                          {faq.explanation}
                        </p>
                        <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 italic">
                          {faq.example}
                        </div>
                        <div className="pt-2">
                          <Link
                            href={faq.linkHref}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors group"
                          >
                            <span>{faq.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
