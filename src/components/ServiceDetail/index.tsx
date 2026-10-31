"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, Check, ArrowUpRight } from "lucide-react";

export interface ServiceUseCase {
  title: string;
  industry: string;
  scenario: string;
  outcome: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

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
  businessBenefits: { title: string; desc: string }[];
  useCases: ServiceUseCase[];
  implementationStages: { stage: string; timeframe: string; deliverable: string }[];
  faqs: ServiceFAQ[];
  deliverables: string[];
  techStack: string[];
  relatedServices: { name: string; href: string; reason: string }[];
}

export default function ServiceDetail({
  slug,
  badge,
  title,
  subtitle,
  outcome,
  problemHeading,
  problemText,
  architectureHeading,
  architectureSteps,
  businessBenefits,
  useCases,
  implementationStages,
  faqs,
  deliverables,
  techStack,
  relatedServices,
}: ServiceDetailProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://gaurex.vercel.app/services/${slug}#service`,
        "name": title,
        "serviceType": badge,
        "description": subtitle,
        "provider": {
          "@type": "Organization",
          "name": "GAUREX",
          "url": "https://gaurex.vercel.app"
        },
        "areaServed": ["India", "United States", "United Kingdom", "United Arab Emirates"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${title} Capabilities`,
          "itemListElement": deliverables.map((d) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": d
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://gaurex.vercel.app/services/${slug}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gaurex.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://gaurex.vercel.app/#solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": `https://gaurex.vercel.app/services/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-black pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#solutions" className="hover:text-black transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-black font-medium">{title}</span>
          </nav>

          {/* Hero Header */}
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
                className="px-6 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-xs"
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

          {/* Section 1: Customer Problem vs Engineered Architecture */}
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
                How The GAUREX Solution Works
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

          {/* Section 2: Concrete Business Benefits */}
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Commercial Impact
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Measurable Business Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {businessBenefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                  <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mb-4">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-black mb-2">{b.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Relevant Real-World Use Cases */}
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Practical Implementation
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Representative Business Use Cases
            </h2>
            <div className="space-y-4">
              {useCases.map((uc, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-black">{uc.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {uc.industry}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    <strong>Operational Scenario:</strong> {uc.scenario}
                  </p>
                  <div className="text-xs font-semibold text-black bg-[#FAFAFA] p-3 rounded-xl border border-gray-100">
                    <strong>Engineered Result:</strong> {uc.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Implementation Process & Stages */}
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Delivery Roadmap
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Structured Implementation Stages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {implementationStages.map((st, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200">
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                    Stage 0{i + 1} &bull; {st.timeframe}
                  </span>
                  <h3 className="text-base font-bold text-black mb-2">{st.stage}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Engineering Deliverables & Tech Stack */}
          <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-black mb-6">
              Complete Scope of Engineering Deliverables
            </h2>
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

          {/* Section 6: Service-Specific FAQs (AEO) */}
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              {title} &mdash; Frequently Answered Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="rounded-2xl border border-gray-200 bg-[#FAFAFA] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-sm font-bold text-black flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gray-400 shrink-0" />
                        {f.q}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-90 text-black" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 border-t border-gray-200/60 text-xs text-gray-700 leading-relaxed bg-white pt-4">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 7: Internal Cross-Linking Architecture */}
          <div className="mb-16 p-8 rounded-2xl bg-[#FAFAFA] border border-gray-200">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Complementary Architectures
            </span>
            <h2 className="text-xl font-bold text-black mb-4">
              Integrated Systems That Pair With {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((rs, i) => (
                <Link
                  key={i}
                  href={rs.href}
                  className="p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-all group block"
                >
                  <div className="flex items-center justify-between font-bold text-sm text-black mb-1">
                    <span>{rs.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{rs.reason}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 8: Strong Conversion CTA Box */}
          <div className="p-8 md:p-12 rounded-2xl bg-black text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to engineer your {title}?
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Schedule a 15-minute technical discovery session directly with Founder Gauresh Khairnar. We review your workflow feasibility and provide an honest architectural blueprint.
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
                Book Discovery Video Call
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
