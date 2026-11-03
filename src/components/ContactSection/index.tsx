"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, MessageSquare, Mail, Calendar, Loader2, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { submitContactInquiry, ContactFormData } from "@/app/actions/contact";

interface ContactSectionProps {
  onOpenBooking?: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    companyName: "",
    industry: "Technology",
    problem: "",
    requiredSolution: "AI Solutions & Agents",
    budget: "$10,000 - $25,000",
    timeline: "Within 30 Days",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [successResult, setSuccessResult] = useState<{ referenceId?: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setFieldErrors({});

    try {
      const res = await submitContactInquiry(formData);
      if (res.success) {
        setSuccessResult({
          referenceId: res.referenceId,
          message: res.message
        });
      } else {
        setErrorMsg(res.message);
        if (res.errors) {
          setFieldErrors(res.errors);
        }
      }
    } catch {
      setErrorMsg("A network error occurred while submitting your inquiry. Please try again or reach out directly at gaurex.ai@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccessResult(null);
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      industry: "Technology",
      problem: "",
      requiredSolution: "AI Solutions & Agents",
      budget: "$10,000 - $25,000",
      timeline: "Within 30 Days",
      honeypot: "",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
            <span>Direct Commercial Engagement</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-6">
            Describe Your Problem. Let&apos;s Engineer the Solution.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Every software engagement begins with a clear operational understanding. Complete the formal technical enquiry below, or select an alternative direct communication channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main B2B Form (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-8 md:p-12 hover:border-gray-300 transition-colors"
          >
            
            {successResult ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 block mb-2">
                  Reference: {successResult.referenceId}
                </span>
                <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
                  {successResult.message} Founder Gauresh Khairnar and our engineering leadership will review your operational requirements and deliver a preliminary technical architecture review within 24 business hours.
                </p>
                <div className="p-4 bg-white border border-gray-200 rounded-xl text-left max-w-md mx-auto text-xs text-gray-600 space-y-2 mb-8">
                  <div><strong>Notice dispatched to:</strong> gaurex.ai@gmail.com</div>
                  <div><strong>Review status:</strong> Queued for engineering assessment</div>
                  <div><strong>Confidentiality:</strong> Covered under standard commercial NDA</div>
                </div>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot Anti-Spam Field (Hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this field</label>
                  <input
                    id="hp_field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Business Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                        fieldErrors.fullName ? "border-red-500" : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                        fieldErrors.email ? "border-red-500" : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Company Name & Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Logistics Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                        fieldErrors.companyName ? "border-red-500" : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {fieldErrors.companyName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option value="Technology">Technology & SaaS</option>
                      <option value="Logistics">Logistics, Freight & Supply Chain</option>
                      <option value="Healthcare">Healthcare & Clinical Practice</option>
                      <option value="Manufacturing">Manufacturing & Industrial</option>
                      <option value="Real Estate">Real Estate & Construction</option>
                      <option value="Education">Education & Training Institutions</option>
                      <option value="Financial">Financial & Professional Services</option>
                      <option value="Retail">Retail & E-Commerce</option>
                      <option value="Other">Other Enterprise Sector</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: What Problem Are You Trying to Solve */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    What Problem Are You Trying to Solve? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current bottleneck: where are hours lost, which tools are disconnected, or what manual workflow needs automation?"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                      fieldErrors.problem ? "border-red-500" : "border-gray-300 focus:border-black"
                    }`}
                  />
                  {fieldErrors.problem && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.problem}</p>
                  )}
                </div>

                {/* Row 4: Required Solution, Approximate Budget, Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Required Solution
                    </label>
                    <select
                      value={formData.requiredSolution}
                      onChange={(e) => setFormData({ ...formData, requiredSolution: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-300 bg-white text-xs font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option value="AI Solutions & Agents">AI Solutions & Agents</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="ERP Systems">ERP & Management Systems</option>
                      <option value="Web Applications">Web Applications & Portals</option>
                      <option value="Dashboards & Analytics">Dashboards & Analytics</option>
                      <option value="Multiple / Unsure">Multiple / Needs Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-300 bg-white text-xs font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option value="Under $5,000">Under $5,000 (Sprint Pilot)</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000 (Single System)</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000 (Comprehensive)</option>
                      <option value="$35,000+">$35,000+ (Enterprise Platform)</option>
                      <option value="To Be Determined">To Be Determined</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-300 bg-white text-xs font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    >
                      <option value="Immediately">Immediately (High Urgency)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="Exploring Options">Exploring Architecture Options</option>
                    </select>
                  </div>
                </div>

                {/* Privacy Notice & Submit Button */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>All submissions protected under strict commercial confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting to Engineering...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </motion.div>

          {/* Alternative Contact & Channels (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            
            {/* Direct Discovery Call Box */}
            <div className="p-8 rounded-3xl bg-black text-white flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                  Immediate Scheduling
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  15-Minute Technical Discovery Call
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Prefer a direct face-to-face conversation? Schedule a 15-minute video call directly with Founder Gauresh Khairnar to review feasibility and architecture.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Schedule Video Call <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Email Box */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-black">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Direct Engineering Inbox
                  </span>
                  <a
                    href="mailto:gaurex.ai@gmail.com"
                    className="text-xs font-bold text-black hover:underline"
                  >
                    gaurex.ai@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-2">
                Send formal RFPs, architectural specifications, or NDA agreements directly to our inbox.
              </p>
            </div>

            {/* WhatsApp Optional Channel */}
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-black">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    Direct Messaging Channel
                  </span>
                  <a
                    href="https://wa.me/919579098477?text=Hi%20GAUREX%2C%20I%20would%20like%20to%20discuss%20a%20business%20technology%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-black hover:underline"
                  >
                    +91 95790 98477 (WhatsApp)
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 mt-2">
                Optional channel for immediate queries and mobile messaging. We never mandate WhatsApp for enterprise procurement.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

