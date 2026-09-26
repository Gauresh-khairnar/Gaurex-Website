"use client";

import Link from "next/link";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-black block mb-2">
              GAUREX
            </Link>
            <p className="text-gray-500 font-medium mb-2">
              Technology built around problems, not products.
            </p>
            <a href="mailto:gaurex.ai@gmail.com" className="text-black font-medium hover:underline">
              gaurex.ai@gmail.com
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-black transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-center text-sm text-gray-400 border-t border-gray-100 pt-8">
          © {new Date().getFullYear()} GAUREX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
