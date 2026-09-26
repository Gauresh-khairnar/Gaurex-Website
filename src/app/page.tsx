"use client";

import { useState, useCallback } from "react";
import IntroVideo from "@/components/IntroVideo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemScanner from "@/components/ProblemScanner";
import InteractiveTools from "@/components/InteractiveTools";
import BeforeAfter from "@/components/BeforeAfter";
import ProblemStories from "@/components/ProblemStories";
import LivingEngine from "@/components/LivingEngine";
import DarkSystem from "@/components/DarkSystem";
import ArchitectureBuilder from "@/components/ArchitectureBuilder";
import TechStack from "@/components/TechStack";
import Solutions from "@/components/Solutions";
import DashboardPreview from "@/components/DashboardPreview";
import CaseStudies from "@/components/CaseStudies";
import TypographyReveal from "@/components/TypographyReveal";
import IntelligentContact from "@/components/IntelligentContact";
import Footer from "@/components/Footer";
import FloatingAI from "@/components/FloatingAI";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  
  const handleIntroComplete = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <>
      {/* Intro Video Overlay */}
      <IntroVideo onComplete={handleIntroComplete} />

      {/* Main Content */}
      <main
        className={`transition-opacity duration-1000 ${
          introFinished ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Navbar />
        
        <Hero />
        
        <div id="diagnose">
          <ProblemScanner />
        </div>
        
        <div id="understand">
          <BeforeAfter />
          <ProblemStories />
          <LivingEngine />
        </div>
        
        <div id="design">
          <ArchitectureBuilder />
          <DarkSystem />
          <TechStack />
        </div>
        
        <div id="estimate">
          <InteractiveTools />
          <Solutions />
        </div>
        
        <DashboardPreview />
        <CaseStudies />
        <TypographyReveal />
        
        <div id="start">
          <IntelligentContact />
        </div>
        
        <Footer />

        <FloatingAI />
      </main>
    </>
  );
}
