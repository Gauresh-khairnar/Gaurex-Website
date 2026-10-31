"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import BookingModal from "@/components/BookingModal";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setBookingModalOpen(true);
    }
  };

  const navLinks = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo on Left */}
          <Logo size={32} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider uppercase text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleBookingClick}
              className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-all hover:scale-[1.02] flex items-center gap-1.5"
            >
              Book a Discovery Call
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 -mr-2 text-black hover:text-gray-600 focus:outline-none"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-in fade-in duration-200 md:hidden">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <Logo size={28} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-black hover:text-gray-600"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold tracking-tight text-gray-900 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleBookingClick();
              }}
              className="w-full py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:gaurex.ai@gmail.com"
              className="block text-center text-xs font-medium text-gray-500 hover:text-black py-2"
            >
              gaurex.ai@gmail.com
            </a>
          </div>
        </div>
      )}

      {/* Embedded Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
