"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, ArrowUpRight } from "lucide-react";

const problems = [
  {
    num: "01",
    title: "Manual Operations",
    bottleneck: "Teams spending hours on repetitive spreadsheets, manual data entry, and manual calculations that produce human errors.",
    solution: "Autonomous Workflow Engines",
    solutionDesc: "We build automated background pipelines that run continuously, validating data and executing business tasks with zero manual touches.",
    href: "/services/business-automation",
  },
  {
    num: "02",
    title: "Disconnected Business Systems",
    bottleneck: "Sales in one tool, inventory in another, billing on spreadsheets, and support on personal messaging apps with zero central sync.",
    solution: "Unified Data & ERP Platforms",
    solutionDesc: "We architect a single authoritative source of truth connecting your customer lifecycle, operational units, and financial reporting.",
    href: "/services/erp-systems",
  },
  {
    num: "03",
    title: "Poor Lead Management",
    bottleneck: "High-value inquiries arriving via Instagram, email, and website forms getting lost, delayed, or forgotten without an audit trail.",
    solution: "Intelligent Lead & CRM Architecture",
    solutionDesc: "Instant automated lead capture, intelligent qualification triage, and automated follow-up sequences that convert prospects faster.",
    href: "/services/ai-solutions",
  },
  {
    num: "04",
    title: "Repetitive Administrative Work",
    bottleneck: "Skilled employees bogged down formatting PDF reports, dispatching redundant notifications, and coordinating routine updates.",
    solution: "AI Agents & Document Automation",
    solutionDesc: "Purpose-trained autonomous AI agents that read documents, extract structured data, answer common queries, and handle routine admin 24/7.",
    href: "/services/ai-solutions",
  },
  {
    num: "05",
    title: "Lack of Business Visibility",
    bottleneck: "Business owners waiting until the end of the month for reports to understand pipeline velocity, cash flow, and team throughput.",
    solution: "Real-Time Executive Dashboards",
    solutionDesc: "Tailored live telemetry aggregating KPIs across departments into instant, interactive visual dashboards for decisive executive action.",
    href: "/services/business-analytics",
  },
  {
    num: "06",
    title: "Inefficient Workflows",
    bottleneck: "Generic, off-the-shelf software forcing your team to change how they work to fit inflexible third-party templates.",
    solution: "Tailored Custom Software Engineering",
    solutionDesc: "Full-stack web applications and internal tools designed exactly around your proprietary operational procedures and edge cases.",
    href: "/services/custom-software",
  },
];

export default function BusinessProblems() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#F7F7F7] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Root Operational Causes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Technology Should Remove Complexity. Not Create More.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Most technology failures occur because companies buy disconnected tools that treat symptoms rather than solving the operational root cause. Here are the core bottlenecks we resolve:
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-2xl border border-gray-200/90 p-7 flex flex-col justify-between hover:border-black transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {item.num}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-600">
                    <AlertTriangle className="w-3 h-3 text-gray-400" />
                    Bottleneck
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {item.bottleneck}
                </p>

                {/* Solution Arrow Divider */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black block mb-1">
                    GAUREX Engineered Fix:
                  </span>
                  <div className="font-semibold text-sm text-black mb-1.5 flex items-center justify-between">
                    <span>{item.solution}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100">
                <Link
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-wider text-black hover:text-gray-600 inline-flex items-center gap-1.5 transition-colors"
                >
                  View Solution Blueprint <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-black mb-1">
              Unsure which bottleneck is costing your business the most?
            </h4>
            <p className="text-xs text-gray-500">
              We conduct a comprehensive 30-minute operational audit to identify your exact operational leakage points.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Request Operational Audit <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

