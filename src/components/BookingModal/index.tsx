"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Loader2, AlertCircle, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitDiscoveryCallBooking } from "@/app/actions/booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [bookingResult, setBookingResult] = useState<{
    referenceId: string;
    meetLink: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const availableSlots = [
    "Tomorrow, 10:00 AM IST (04:30 AM UTC)",
    "Tomorrow, 02:30 PM IST (09:00 AM UTC)",
    "Tomorrow, 05:00 PM IST (11:30 AM UTC)",
    "Day after tomorrow, 11:30 AM IST (06:00 AM UTC)",
    "Day after tomorrow, 04:00 PM IST (10:30 AM UTC)",
  ];

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedSlot) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await submitDiscoveryCallBooking({
        name,
        email,
        company,
        slot: selectedSlot,
      });

      if (res.success && res.referenceId) {
        setBookingResult({
          referenceId: res.referenceId,
          meetLink: res.meetLink || "https://meet.google.com/xwv-gaur-exm",
          message: res.message,
        });
      } else {
        setErrorMessage(res.message || "Failed to confirm booking. Please try again.");
      }
    } catch {
      setErrorMessage("Network error connecting to booking engine. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setBookingResult(null);
    setSelectedSlot(null);
    setName("");
    setEmail("");
    setCompany("");
    setErrorMessage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto z-10"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

        {!bookingResult ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
              <Calendar className="w-4 h-4 text-black" />
              15-Minute Technical Discovery Call
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-black mb-2">
              Schedule Video Call With GAUREX
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Prefer a direct face-to-face conversation? Schedule a 15-minute video call directly with Founder Gauresh Khairnar to review feasibility and architecture.
            </p>

            {errorMessage && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Business Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">A calendar invite with Google Meet link will be sent to this email.</span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Health or Early-stage startup"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Select Preferred Meeting Window *
                </label>
                <div className="space-y-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs font-medium flex items-center justify-between transition-all ${
                        selectedSlot === slot
                          ? "border-black bg-black text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      <span>{slot}</span>
                      <Clock className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || !name || !email || !selectedSlot}
                  className="w-full py-3 px-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-gray-800 disabled:opacity-40 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Confirming Call & Sending Invites...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm 15-Min Discovery Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-1">
              Ref: {bookingResult.referenceId}
            </span>

            <h3 className="text-2xl font-bold tracking-tight text-black mb-2">
              Discovery Call Confirmed!
            </h3>

            <p className="text-xs text-gray-600 mb-6 max-w-sm mx-auto leading-relaxed">
              We have booked your session. Full details and a calendar invitation have been sent to <strong>{email}</strong> and dispatched to <strong>gaurex.ai@gmail.com</strong>.
            </p>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-left text-xs text-gray-700 space-y-2 mb-6">
              <div><strong>Client:</strong> {name} ({company || "Private"})</div>
              <div><strong>Scheduled Window:</strong> <span className="text-green-700 font-semibold">{selectedSlot}</span></div>
              <div><strong>Host:</strong> Gauresh Khairnar (Founder, GAUREX)</div>
              <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5"><Video className="w-4 h-4 text-black" /> Google Meet Room:</span>
                <a
                  href={bookingResult.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold underline text-[11px]"
                >
                  Open Video Room
                </a>
              </div>
            </div>

            <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-left text-[11px] text-[#166534] mb-6">
              &bull; <strong>Confirmation Dispatched:</strong> A copy has been emailed to you with preparation notes and Google Meet access instructions.
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-gray-800 transition-colors"
            >
              Done
            </button>
          </div>
        )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
