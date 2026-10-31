import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | GAUREX",
  description: "GAUREX Commercial Terms of Service detailing intellectual property ownership, deliverables, and engineering engagements.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="mb-12 pb-8 border-b border-gray-200">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
              Legal & Compliance
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
              Terms of Service
            </h1>
            <p className="text-xs text-gray-500">
              Last updated: October 2026 &bull; GAUREX Commercial Systems
            </p>
          </div>

          <div className="space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-black mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing <code>https://gaurex.vercel.app</code> or engaging GAUREX for technology consulting, software architecture, or engineering services, you agree to be bound by these Terms of Service and any project-specific Statements of Work (SOW) executed between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">2. Scope of Engineering Engagements</h2>
              <p>
                GAUREX provides custom software development, AI solutions, business process automation, ERP systems, and analytics consoles. Specific project deliverables, milestone schedules, acceptance criteria, and fee structures are governed by individual client contracts and Statements of Work.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">3. Intellectual Property & Code Ownership</h2>
              <p>
                Unless explicitly agreed otherwise in writing, upon receipt of full milestone payments, the client receives 100% ownership of custom software code, bespoke database schemas, and proprietary assets developed specifically for their engagement. GAUREX retains rights to general reusable utility libraries and pre-existing scaffolding developed prior to the engagement.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">4. Client Responsibilities & Data Integrity</h2>
              <p>
                The client agrees to provide timely feedback, necessary API credentials, operational documentation, and designated stakeholder access required for project completion. The client warrants that all data and technical assets provided to GAUREX do not infringe any third-party intellectual property or privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">5. Warranties & Limitation of Liability</h2>
              <p>
                GAUREX warrants that all custom software will be engineered using industry-standard security and quality practices. Custom software is tested against mutually agreed acceptance criteria prior to production hand-off. To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, or consequential damages arising from system use.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">6. Governing Law & Dispute Resolution</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any commercial disputes shall be resolved through good-faith commercial negotiation followed by binding arbitration in Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">7. Contact Information</h2>
              <p>
                For legal notices, contract inquiries, or operational questions, please contact:
              </p>
              <p className="font-mono text-black font-semibold mt-1">
                gaurex.ai@gmail.com &bull; Attention: Legal & Contracts Desk
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

