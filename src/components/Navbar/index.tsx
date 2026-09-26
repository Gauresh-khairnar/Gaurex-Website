"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "01 Diagnose", href: "#diagnose" },
  { label: "02 Understand", href: "#understand" },
  { label: "03 Design", href: "#design" },
  { label: "04 Estimate", href: "#estimate" },
  { label: "05 Start", href: "#start" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-2"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-black">
            GAUREX
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/919579098477?text=Hi%20GAUREX%2C%20I%20am%20ready%20to%20build%20my%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors"
            >
              Start Build
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-black"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center"
      >
        <button
          className="absolute top-6 right-6 p-2 text-black"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col items-center gap-8 text-xl font-bold uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919579098477?text=Hi%20GAUREX%2C%20I%20am%20ready%20to%20build%20my%20system."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-4 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Start Build
          </a>
        </nav>
      </motion.div>
    </>
  );
}
