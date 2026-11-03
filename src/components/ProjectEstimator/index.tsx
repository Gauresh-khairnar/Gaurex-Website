"use client";

import { useState, useMemo } from "react";
import { 
  Calculator, 
  Smartphone, 
  Globe, 
  Cpu, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  Sparkles,
  MessageCircle
} from "lucide-react";
import { sound } from "@/lib/sound";

interface ProjectEstimatorProps {
  onOpenBooking: () => void;
}

type PlatformType = "full" | "ai" | "web" | "ios";
type ProjectScale = "mvp" | "scaleup" | "enterprise";

interface PlatformOption {
  id: PlatformType;
  title: string;
  icon: typeof Smartphone;
  tagline: string;
  basePriceINR: number;
  baseWeeks: number;
}

const PLATFORMS: PlatformOption[] = [
  {
    id: "full",
    title: "Complete Enterprise Architecture Package",
    icon: Layers,
    tagline: "Turnkey Suite: Native iOS App + Next.js 16 Web SaaS + Cloud Backend + Legal Vault",
    basePriceINR: 480000,
    baseWeeks: 8,
  },
  {
    id: "ai",
    title: "Autonomous AI & Multi-Agent Package",
    icon: Cpu,
    tagline: "Custom Neo AI Swarms, LLM Pipelines, WhatsApp Bot Automation & CRM Sync",
    basePriceINR: 280000,
    baseWeeks: 6,
  },
  {
    id: "web",
    title: "Next.js Full-Stack SaaS Package",
    icon: Globe,
    tagline: "React 19, Server Actions, Enterprise Customer Portal, Edge High-Availability",
    basePriceINR: 240000,
    baseWeeks: 5,
  },
  {
    id: "ios",
    title: "Native iOS Executive Dashboard Package",
    icon: Smartphone,
    tagline: "SwiftUI, Face ID Biometric Security, CoreMotion Gyroscope & Offline Vault",
    basePriceINR: 250000,
    baseWeeks: 5,
  },
];

const SCALES: { id: ProjectScale; label: string; multiplier: number; weeksAdd: number; savingsText: string }[] = [
  { id: "mvp", label: "MVP Velocity", multiplier: 1.0, weeksAdd: 0, savingsText: "₹12,00,000 / year" },
  { id: "scaleup", label: "High-Growth Scale-Up", multiplier: 1.45, weeksAdd: 3, savingsText: "₹28,50,000 / year" },
  { id: "enterprise", label: "Mission-Critical Enterprise", multiplier: 2.1, weeksAdd: 5, savingsText: "₹55,00,000 / year" },
];

const ADDONS = [
  { id: "biometric", name: "Face ID Biometric Seal & Vault", priceINR: 45000 },
  { id: "ocr", name: "Apple Vision OCR Document Scanner", priceINR: 55000 },
  { id: "whatsapp", name: "Instant WhatsApp Invoicing & Nudges", priceINR: 35000 },
  { id: "neo_ai", name: "Executive AI Co-Founder Voice Aura", priceINR: 65000 },
];

export default function ProjectEstimator({ onOpenBooking }: ProjectEstimatorProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>("full");
  const [selectedScale, setSelectedScale] = useState<ProjectScale>("mvp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["biometric", "whatsapp"]);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [isBridgingLead, setIsBridgingLead] = useState(false);
  const [leadBridgedSuccess, setLeadBridgedSuccess] = useState(false);

  // Currency Conversion Rate approx 1 USD = 85.5 INR
  const USD_RATE = 85.5;

  const currentPlatform = PLATFORMS.find((p) => p.id === selectedPlatform)!;
  const currentScale = SCALES.find((s) => s.id === selectedScale)!;

  const calculatedValues = useMemo(() => {
    let totalINR = currentPlatform.basePriceINR * currentScale.multiplier;
    selectedAddons.forEach((addonId) => {
      const match = ADDONS.find((a) => a.id === addonId);
      if (match) totalINR += match.priceINR;
    });

    const totalWeeks = currentPlatform.baseWeeks + currentScale.weeksAdd;

    return {
      totalINR: Math.round(totalINR / 1000) * 1000,
      totalUSD: Math.round(totalINR / USD_RATE / 50) * 50,
      totalWeeks,
      savings: currentScale.savingsText,
    };
  }, [selectedPlatform, selectedScale, selectedAddons, currentPlatform, currentScale]);

  const toggleAddon = (id: string) => {
    sound.playClick();
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleScopeLock = async () => {
    sound.playChime();
    setIsBridgingLead(true);

    try {
      // Dispatches configured scope to GAUREX iOS Lead Bridge API
      await fetch("/api/lead-bridge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Strategic Estimator Prospect",
          companyName: "Enterprise Scope Prospect",
          email: "estimator@gaurex.ai",
          requiredSolution: `${currentPlatform.title} (${currentScale.label})`,
          estimatedValue: calculatedValues.totalINR,
          budget: `₹${(calculatedValues.totalINR / 100000).toFixed(1)} Lakhs`,
          timeline: `${calculatedValues.totalWeeks} Weeks`,
          source: "gaurex_website_estimator",
          problem: `Configured add-ons: ${selectedAddons.join(", ")}`,
        }),
      });
      setLeadBridgedSuccess(true);
    } catch {
      // Non-blocking
    } finally {
      setIsBridgingLead(false);
      onOpenBooking();
    }
  };

  const openWhatsAppInquiry = () => {
    sound.playClick();
    const text = encodeURIComponent(
      `Hello Gauresh! I configured an executive package on GAUREX Estimator:\n\n• Package: ${currentPlatform.title}\n• Scale: ${currentScale.label}\n• Estimated Timeline: ${calculatedValues.totalWeeks} Weeks\n• Investment: ₹${calculatedValues.totalINR.toLocaleString("en-IN")}\n\nI'd like to schedule a strategic consultation.`
    );
    window.open(`https://wa.me/919579098477?text=${text}`, "_blank");
  };

  return (
    <section id="estimator" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Background radial gradient sweeps */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Executive Architecture & Package Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5">
            Calculate Your Solution Scope & <span className="text-amber-400">ROI Potential</span>
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Configure your enterprise package requirements to generate transparent engineering timelines, annual operational savings, and milestone-based investment estimates.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Package Selection */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">1</span>
                Select Turnkey Solution Package
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PLATFORMS.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = selectedPlatform === platform.id;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedPlatform(platform.id);
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all relative ${
                        isSelected
                          ? "bg-stone-900 border-amber-400 shadow-[0_0_20px_rgba(234,170,0,0.18)]"
                          : "bg-stone-900/50 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl ${isSelected ? "bg-amber-400 text-stone-950" : "bg-white/10 text-white"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {isSelected && <CheckCircle className="w-4 h-4 text-amber-400" />}
                      </div>
                      <div className="text-sm font-bold text-white mb-1">{platform.title}</div>
                      <div className="text-[11px] text-stone-400 leading-snug">{platform.tagline}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scale */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">2</span>
                Choose Project Scale & Architecture Maturity
              </div>
              <div className="grid grid-cols-3 gap-3">
                {SCALES.map((scale) => {
                  const isSelected = selectedScale === scale.id;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => {
                        sound.playNotch();
                        setSelectedScale(scale.id);
                      }}
                      className={`p-3.5 text-center rounded-2xl border transition-all ${
                        isSelected
                          ? "bg-amber-400/10 border-amber-400 text-white shadow-sm"
                          : "bg-stone-900/50 border-white/10 text-stone-400 hover:text-white"
                      }`}
                    >
                      <div className={`text-xs font-bold ${isSelected ? "text-amber-300" : ""}`}>{scale.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Executive Add-on Modules */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">3</span>
                Enterprise Add-on Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        isChecked
                          ? "bg-stone-900 border-amber-400/80 text-white"
                          : "bg-stone-900/40 border-white/5 text-stone-400 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? "bg-amber-400 border-amber-400" : "border-stone-600"}`}>
                          {isChecked && <CheckCircle className="w-3.5 h-3.5 text-stone-950" />}
                        </div>
                        <span className="text-xs font-medium text-white">{addon.name}</span>
                      </div>
                      <span className="text-[11px] text-amber-300 font-bold">
                        +₹{(addon.priceINR / 1000).toFixed(0)}k
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-stone-900/90 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Card Header & Currency Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Executive Estimate</span>
                </div>
                {/* Currency Toggle */}
                <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-full border border-white/10 text-[10px] font-bold">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrency("INR");
                    }}
                    className={`px-2.5 py-1 rounded-full transition-all ${currency === "INR" ? "bg-amber-400 text-stone-950" : "text-stone-400"}`}
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrency("USD");
                    }}
                    className={`px-2.5 py-1 rounded-full transition-all ${currency === "USD" ? "bg-amber-400 text-stone-950" : "text-stone-400"}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Big Estimate Display */}
              <div>
                <div className="text-[11px] text-stone-400 uppercase tracking-widest font-semibold mb-1">
                  Estimated Investment
                </div>
                <div className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  {currency === "INR"
                    ? `₹${calculatedValues.totalINR.toLocaleString("en-IN")}`
                    : `$${calculatedValues.totalUSD.toLocaleString("en-US")}`}
                </div>
                <div className="text-[11px] text-stone-400 mt-1">
                  Milestone-based terms: 40% advance • 40% beta • 20% release
                </div>
              </div>

              {/* Key Deliverable Metrics */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10">
                <div className="bg-stone-950/80 p-3.5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-stone-400 text-[11px] mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Delivery Timeline
                  </div>
                  <div className="text-lg font-bold text-white">
                    {calculatedValues.totalWeeks} Weeks
                  </div>
                  <div className="text-[10px] text-emerald-400 font-medium">Sprint velocity guaranteed</div>
                </div>

                <div className="bg-stone-950/80 p-3.5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-stone-400 text-[11px] mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Annual Ops Savings
                  </div>
                  <div className="text-lg font-bold text-white">
                    {calculatedValues.savings}
                  </div>
                  <div className="text-[10px] text-stone-400">Via automated workflows</div>
                </div>
              </div>

              {/* Active Blueprint Summary */}
              <div className="text-xs space-y-1.5 text-stone-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Led by Gauresh Khairnar (OWNER, GAUREX)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Intellectual Property & Source Code Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero-delay integration with GAUREX iOS Dashboard</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleScopeLock}
                  disabled={isBridgingLead}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20"
                >
                  {isBridgingLead ? "Syncing Blueprint..." : "Lock In Scope & Book Strategy Call"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={openWhatsAppInquiry}
                  className="w-full py-3 bg-stone-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-2xl hover:bg-emerald-950/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Instant WhatsApp Consultation
                </button>
              </div>

              {leadBridgedSuccess && (
                <div className="text-center text-[11px] text-emerald-400 font-semibold bg-emerald-950/50 py-1.5 rounded-lg border border-emerald-800">
                  ✓ Blueprint mirrored to GAUREX Executive Dashboard
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
