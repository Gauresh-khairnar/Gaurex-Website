"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "Healthcare Clinic",
    problem: "Missed appointments and chaotic phone bookings leading to lost revenue.",
    approach: "Mapped the patient journey to identify the exact friction points in the booking process.",
    system: "Automated Booking Platform with SMS reminders and staff dashboard.",
    result: "40% reduction in no-shows and reclaimed 15 hours of admin time per week.",
    tech: ["Web", "Automations", "CRM"]
  },
  {
    client: "B2B Service Provider",
    problem: "Sales team losing track of high-value leads in scattered spreadsheets.",
    approach: "Audited existing sales pipelines and designed a unified data architecture.",
    system: "Custom CRM system integrated directly with their marketing channels.",
    result: "3x increase in lead conversion rate within the first 60 days.",
    tech: ["CRM", "Data", "AI"]
  },
  {
    client: "Local Retailer",
    problem: "Invisible online presence failing to drive foot traffic.",
    approach: "Analyzed local search behavior and rebuilt the digital foundation.",
    system: "Conversion-optimized Smart Website with local SEO architecture.",
    result: "150% increase in digital inquiries and measurable store visits.",
    tech: ["Web", "Analytics"]
  },
];

export default function CaseStudies() {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Real Project Showcase
          </h2>
          {isDev && (
            <p className="inline-block mt-4 text-xs font-bold px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              DEV MODE: Placeholder Case Studies
            </p>
          )}
        </motion.div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-12 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col lg:flex-row gap-12 group"
            >
              <div className="lg:w-1/3">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
                  Client
                </span>
                <h3 className="text-2xl font-bold text-black mb-6">{study.client}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {study.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">
                    Problem
                  </span>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">{study.problem}</p>
                </div>
                
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                    Approach
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.approach}</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-black uppercase tracking-wider mb-2 block">
                    System Built
                  </span>
                  <p className="text-black font-semibold text-sm leading-relaxed">{study.system}</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">
                    Result
                  </span>
                  <p className="text-black font-bold">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
