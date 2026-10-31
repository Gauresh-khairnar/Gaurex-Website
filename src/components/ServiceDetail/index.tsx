"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export interface ServiceDetailProps {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  outcome: string;
  problemHeading: string;
  problemText: string;
  architectureHeading: string;
  architectureSteps: { title: string; desc: string }[];
  deliverables: string[];
  techStack: string[];
}

export default function ServiceDetail({
  badge,
  title,
  subtitle,
  outcome,
  problemHeading,
  problemText,
  architectureHeading,
  architectureSteps,
  deliverables,
  techStack,
}: ServiceDetailProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="min-h-screen bg-white text-black pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#solutions" className="hover:text-black transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black">{title}</span>
          </div>

          {/* Hero Section */}
          <div className="mb-16 pb-12 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-black mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              {badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mb-8">
              {subtitle}
            </p>

            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-gray-200 inline-block mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black block mb-0.5">
                Target Business Outcome:
              </span>
              <span className="text-sm font-semibold text-black">
                {outcome}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Discuss This Solution <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-6 py-3.5 bg-gray-100 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-colors"
              >
                Schedule Technical Discovery
              </button>
            </div>
          </div>

          {/* Problem vs Engineered Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded inline-block mb-4">
                The Operational Bottleneck
              </span>
              <h2 className="text-xl font-bold text-black mb-3">
                {problemHeading}
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {problemText}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-gray-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-gray-200 px-2 py-0.5 rounded inline-block mb-4">
                Architecture Standard
              </span>
              <h2 className="text-xl font-bold text-black mb-3">
                {architectureHeading}
              </h2>
              <div className="space-y-4 text-xs text-gray-600">
                {architectureSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-mono font-bold text-black shrink-0">0{i + 1}</span>
                    <div>
                      <strong className="text-black block mb-0.5">{step.title}</strong>
                      <span>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Deliverables & Technology Stack */}
          <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-black mb-6">
              Scope of Engineering Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Core Technologies Deployed:
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded bg-gray-100 text-xs font-mono font-medium text-black">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 md:p-12 rounded-2xl bg-black text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to eliminate this bottleneck?
            </h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Contact our engineering team with your operational requirements. We evaluate your workflow constraints and return an actionable technical proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors"
              >
                Submit Project Inquiry
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                Book Discovery Call
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
