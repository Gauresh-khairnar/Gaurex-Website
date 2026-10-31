import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Target, Shield, Cpu, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About GAUREX | Technology Built Around Problems",
  description: "Learn about GAUREX, our engineering philosophy, and how Founder Gauresh Khairnar helps businesses solve operational bottlenecks through custom technology.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Eyebrow & Headline */}
          <div className="mb-16 pb-12 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-black mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              About GAUREX
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight mb-6">
              We Don&apos;t Build What You Ask For.<br />We Build What Your Business Needs.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
              GAUREX was founded on a simple observation: most software fails not because of bad code, but because it solves the wrong problem.
            </p>
          </div>

          {/* Core Story */}
          <div className="space-y-8 text-sm md:text-base text-gray-700 leading-relaxed mb-16">
            <p>
              Growing companies often find themselves trapped between two undesirable choices: expensive off-the-shelf SaaS that forces teams into rigid templates, or generic development agencies that mindlessly write code without understanding the business reality behind it.
            </p>
            <p>
              GAUREX operates as an elite engineering and problem-solving partner. We sit down with founders, operators, and leadership teams to map out the actual operational friction points: where are hours lost? Where do leads slip through the cracks? Why are departments disconnected?
            </p>
            <p>
              Only after we have identified the root bottleneck do we architect a system. Whether that requires an autonomous AI agent workflow, a custom ERP management console, or an automated data pipeline, every line of software we engineer serves a measurable commercial outcome.
            </p>
          </div>

          {/* Guiding Principles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8">
              Our Core Operating Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                <Target className="w-5 h-5 text-black mb-3" />
                <h3 className="text-base font-bold text-black mb-2">Problem-First Diagnostics</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We diagnose before we prescribe. If a simple process change or existing tool solves your issue faster, we tell you immediately instead of selling custom code.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                <Cpu className="w-5 h-5 text-black mb-3" />
                <h3 className="text-base font-bold text-black mb-2">Practical AI Utility</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We build AI systems that do real work: parsing complex documents, automating 24/7 client triage, and routing critical business data with strict schema validation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                <Shield className="w-5 h-5 text-black mb-3" />
                <h3 className="text-base font-bold text-black mb-2">100% Code & IP Ownership</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  You own your software entirely. No proprietary lock-in, no per-seat subscription charges, and full access to source repositories and database migrations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                <Code2 className="w-5 h-5 text-black mb-3" />
                <h3 className="text-base font-bold text-black mb-2">Direct Founder Accountability</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Founder Gauresh Khairnar personally architects and reviews every software engagement alongside senior engineers to guarantee craftsmanship.
                </p>
              </div>

            </div>
          </div>

          {/* Founder Section */}
          <div className="p-8 md:p-12 rounded-3xl bg-black text-white mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
              Leadership & Vision
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Gauresh Khairnar &bull; Founder & Principal Architect
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-6 font-light">
              &ldquo;Technology is only valuable when it simplifies operations and creates measurable growth. At GAUREX, our commitment is to engineer high-performance systems that businesses can depend on every single day.&rdquo;
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <span>Engineering & Systems Architecture</span>
              <span>&bull;</span>
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="p-8 rounded-2xl bg-[#F7F7F7] border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-black mb-2">
              Have an operational problem you need solved?
            </h3>
            <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
              Schedule a 15-minute technical discovery call with our engineering team to review your workflow bottlenecks.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors"
            >
              Discuss Your Problem <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

