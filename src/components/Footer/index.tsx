import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "How We Work", href: "/#how-it-works" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Articles & Insights", href: "/blog" },
    { label: "About GAUREX", href: "/about" },
    { label: "Contact Engineering", href: "/#contact" },
  ];

  const services = [
    { label: "AI Solutions & Agents", href: "/services/ai-solutions" },
    { label: "Business Automation", href: "/services/business-automation" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "ERP Systems", href: "/services/erp-systems" },
    { label: "Web Applications", href: "/services/web-applications" },
    { label: "Dashboards & Analytics", href: "/services/business-analytics" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-200">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2">
            <Logo size={36} className="mb-4" />
            <p className="text-xs font-semibold uppercase tracking-wider text-black mb-2">
              &ldquo;Your Problem. Our Technology. One Solution.&rdquo;
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mb-6">
              GAUREX is a technology and business problem-solving firm. We engineer intelligent software, AI agents, enterprise ERPs, and automated workflows that eliminate operational bottlenecks and scale ambitious businesses.
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <div><strong>Founder & Principal:</strong> Gauresh Khairnar</div>
              <div><strong>Headquarters:</strong> Maharashtra, India &bull; Serving Global Clients</div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-black block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-black block mb-4">
              Services & Architecture
            </span>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Channels */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-black block mb-4">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs text-gray-600 mb-6">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Engineering Email</span>
                <a
                  href="mailto:gaurex.ai@gmail.com"
                  className="font-medium text-black hover:underline"
                >
                  gaurex.ai@gmail.com
                </a>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Direct Messaging</span>
                <a
                  href="https://wa.me/919579098477?text=Hi%20GAUREX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black hover:underline"
                >
                  +91 95790 98477
                </a>
              </div>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-widest text-black block mb-2">
              Connect
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/gauresh-khairnar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black flex items-center gap-1 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} GAUREX. All rights reserved. Professional technology & software engineering.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
