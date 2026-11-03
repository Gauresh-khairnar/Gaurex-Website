"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessProblems from "@/components/BusinessProblems";
import Solutions from "@/components/Solutions";
import ProjectEstimator from "@/components/ProjectEstimator";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import WhyGaurex from "@/components/WhyGaurex";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import NeoWebConcierge from "@/components/NeoWebConcierge";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Sticky Enterprise Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="min-h-screen bg-white text-black">
        {/* Section 2: Hero */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Section 3: Business Problems */}
        <div id="industries">
          <BusinessProblems />
        </div>

        {/* Section 4: Solutions */}
        <div id="solutions">
          <Solutions />
        </div>

        {/* Section 4.5: Executive Scope & ROI Estimator */}
        <ProjectEstimator onOpenBooking={() => setBookingOpen(true)} />

        {/* Section 5: How GAUREX Works */}
        <div id="how-it-works">
          <Process />
        </div>

        {/* Section 6: Case Studies */}
        <div id="case-studies">
          <CaseStudies />
        </div>

        {/* Section 7: Why GAUREX */}
        <div id="why-gaurex">
          <WhyGaurex />
        </div>

        {/* Section 8: FAQ & Answer Engine Optimization */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Section 9: Contact & Conversion */}
        <div id="contact">
          <ContactSection onOpenBooking={() => setBookingOpen(true)} />
        </div>
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Autonomous AI Executive Concierge (Strict English) */}
      <NeoWebConcierge onOpenBooking={() => setBookingOpen(true)} />
    </>
  );
}
