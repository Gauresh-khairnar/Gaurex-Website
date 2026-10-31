"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
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
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Direct Answers & Technical Guidance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Frequently Asked Questions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Direct, factual answers to the common technical and operational questions business leaders ask before engaging GAUREX.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-[#FAFAFA] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-black tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-black text-white border-black" : "text-gray-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-7 pb-6 pt-0 border-t border-gray-200/60 text-xs md:text-sm text-gray-700 leading-relaxed space-y-3.5 bg-white">
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
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                      >
                        <span>{faq.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
