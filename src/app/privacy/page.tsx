import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | GAUREX",
  description: "GAUREX Commercial Privacy Policy detailing technical data handling, commercial confidentiality, and security standards.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500">
              Last updated: October 2026 &bull; GAUREX Commercial Systems
            </p>
          </div>

          <div className="space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-black mb-2">1. Overview & Commitment</h2>
              <p>
                GAUREX (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides custom technology engineering, software architecture, AI solutions, and business automation consulting. We treat all client business information, operational data, and technical specifications under strict commercial confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">2. Information We Collect</h2>
              <p className="mb-2">When you submit an inquiry or schedule a discovery call via our digital channels, we collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Contact Information: Full Name, Business Email Address, Company Name, and Phone Number (if provided).</li>
                <li>Project Specifications: Operational bottlenecks, required technical scope, budget tier, and estimated timeline.</li>
                <li>Technical Metadata: Standard HTTP headers, browser user-agent, and anonymized diagnostic data necessary to maintain service reliability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">3. How Information is Used</h2>
              <p>
                We use collected information strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Evaluate technical feasibility and prepare customized architecture proposals.</li>
                <li>Coordinate technical discovery calls with our engineering leadership.</li>
                <li>Deliver, maintain, and support custom software engagements under signed agreements.</li>
              </ul>
              <p className="mt-2">
                We never sell, rent, or monetize client inquiry data or commercial specifications to any third-party advertisers or data brokers.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">4. Commercial Confidentiality & Non-Disclosure</h2>
              <p>
                All proprietary client workflows, database structures, and trade secrets disclosed during discovery or active engineering sprints are protected under standard commercial non-disclosure agreements (NDAs).
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">5. Data Retention & Deletion</h2>
              <p>
                Prospect inquiries that do not result in an active engagement are securely archived or purged upon request. You may request permanent deletion of your inquiry data at any time by contacting our engineering desk at <strong>gaurex.ai@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-black mb-2">6. Inquiries & Contact</h2>
              <p>
                For questions regarding our privacy practices or security compliance, please email:
              </p>
              <p className="font-mono text-black font-semibold mt-1">
                gaurex.ai@gmail.com &bull; Attention: Legal & Security Desk
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

