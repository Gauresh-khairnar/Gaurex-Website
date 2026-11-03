"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";
import BookingModal from "@/components/BookingModal";
import { sound } from "@/lib/sound";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [showBeaconDetails, setShowBeaconDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    sound.playClick();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setBookingModalOpen(true);
    }
  };

  const navLinks = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Estimator", href: "/#estimator" },
    { label: "Industries", href: "/#industries" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Articles", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-2.5"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex items-center gap-4">
            <Logo size={32} />
            
            {/* Live Founder Availability Beacon (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => {
                  sound.playClick();
                  setShowBeaconDetails(!showBeaconDetails);
                }}
                onMouseEnter={() => setShowBeaconDetails(true)}
                className="group flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-stone-900 to-black text-white rounded-full border border-amber-500/30 text-[11px] font-medium tracking-wide shadow-sm hover:border-amber-400 transition-all"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-gray-300">Gauresh Khairnar:</span>
                <span className="text-amber-300 font-semibold group-hover:text-amber-200">Available Q4</span>
              </button>

              {/* Beacon Dropdown Popover */}
              {showBeaconDetails && (
                <div
                  onMouseLeave={() => setShowBeaconDetails(false)}
                  className="absolute left-0 top-full mt-2 w-72 bg-stone-950 text-white rounded-2xl p-4 shadow-2xl border border-amber-500/30 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px] font-black text-amber-300">
                        GK
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Gauresh Khairnar</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest">Founder & Owner, GAUREX</div>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.5 rounded-full font-bold">
                      ACTIVE
                    </span>
                  </div>

                  <div className="py-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Advisory Capacity:</span>
                      <span className="font-semibold text-white">2 Retainers Left</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Response Window:</span>
                      <span className="font-semibold text-amber-300">&lt; 2 Hours</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Direct WhatsApp:</span>
                      <span className="font-semibold text-emerald-400">Available</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowBeaconDetails(false);
                      handleBookingClick();
                    }}
                    className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                    Book Direct 1-on-1 Session
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => sound.playClick()}
                className="text-xs font-semibold tracking-wider uppercase text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleBookingClick}
              className="px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-stone-800 transition-all hover:scale-[1.02] flex items-center gap-1.5 shadow-sm"
            >
              Book Discovery Call
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(true);
            }}
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
