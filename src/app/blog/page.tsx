import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation Guides & Insights | GAUREX",
  description: "Explore engineering guides, workflow automation frameworks, and AI integration blueprints from GAUREX.",
  keywords: [
    "How to automate business processes",
    "Business automation company",
    "Business process automation services",
    "AI business automation services",
    "Automated business workflows"
  ],
  alternates: {
    canonical: "https://gaurex.vercel.app/blog",
  },
  openGraph: {
    title: "Business Automation Guides & Insights | GAUREX",
    description: "Explore engineering guides, workflow automation frameworks, and AI integration blueprints from GAUREX.",
    url: "https://gaurex.vercel.app/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 pb-10 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-black mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              Engineering Insights & Frameworks
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-tight mb-6">
              Practical Business Automation Knowledge.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Factual, engineering-first guides to automating manual workflows, integrating autonomous AI agents, and eliminating operational friction in growing companies.
            </p>
          </div>

          {/* Featured / Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-[#FAFAFA] border border-gray-200 rounded-2xl p-7 flex flex-col justify-between hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-3 border-b border-gray-200/60">
                    <span className="font-bold uppercase tracking-wider text-[10px] text-black bg-gray-200/80 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-gray-400" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-black mb-3 leading-snug group-hover:text-black">
                    <Link href={`/blog/${art.slug}`} className="hover:underline">
                      {art.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    {art.date}
                  </span>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1 hover:text-gray-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-black text-white text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Ready to execute?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Automate Your Core Business Workflows With GAUREX
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Discuss your operational bottlenecks directly with Founder & Principal Systems Architect Gauresh Khairnar. Receive an actionable feasibility assessment within 24 business hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-100 transition-colors"
              >
                Submit Project Inquiry
              </Link>
              <Link
                href="/services/business-automation"
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                Explore Automation Services
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
