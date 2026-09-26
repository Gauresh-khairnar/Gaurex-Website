"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Cpu, CheckCircle2 } from "lucide-react";

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatState, setChatState] = useState<"idle" | "analyzing" | "result">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setChatState("analyzing");
    
    // Simulate AI processing
    setTimeout(() => {
      setChatState("result");
    }, 2000);
  };

  const reset = () => {
    setChatState("idle");
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[90] bg-black text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Cpu className="w-6 h-6" />
        <span className="hidden md:inline font-medium pr-2">GAUREX Intelligence</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[100] w-[calc(100vw-3rem)] md:w-[400px] bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6" />
                <div>
                  <h3 className="font-bold">GAUREX Intelligence</h3>
                  <p className="text-xs text-gray-400">AI Problem Analyzer</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 min-h-[300px] flex flex-col justify-end bg-gray-50/50">
              {chatState === "idle" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                  <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl rounded-tl-sm text-sm">
                    Hello. Describe a business bottleneck or problem you are facing, and I will architect a system to solve it.
                  </div>
                </motion.div>
              )}

              {chatState === "analyzing" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 flex flex-col gap-4">
                  <div className="self-end bg-black text-white p-4 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                    "{input}"
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Cpu className="w-4 h-4" />
                    </motion.div>
                    Analyzing workflows & mapping solutions...
                  </div>
                </motion.div>
              )}

              {chatState === "result" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 flex flex-col gap-4">
                  <div className="self-end bg-black text-white p-4 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                    "{input}"
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                    <div className="mb-3">
                      <span className="text-xs font-bold text-red-500 uppercase">Problem Identified</span>
                      <p className="font-medium text-gray-800 mt-1">Fragmented data & manual follow-ups</p>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-bold text-blue-600 uppercase">Recommended System</span>
                      <p className="font-medium text-gray-800 mt-1">CRM + Automated Follow-up + Analytics</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs font-bold text-gray-500 uppercase">Required Modules</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">Smart Web</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">API Integrations</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">AI Agents</span>
                      </div>
                    </div>
                    <a href="https://wa.me/919579098477?text=Hi%20GAUREX%2C%20I%20would%20like%20to%20request%20a%20build%20based%20on%20my%20AI%20diagnostic." target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      Request This Build <CheckCircle2 className="w-4 h-4" />
                    </a>
                    <button onClick={reset} className="w-full mt-2 py-2 text-gray-400 hover:text-black transition-colors text-xs text-center">
                      Analyze another problem
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {chatState === "idle" && (
              <div className="p-4 border-t border-gray-100 bg-white">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. We lose track of leads..."
                    className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
