"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const goals = [
  "Get more customers",
  "Automate my business",
  "Build a digital system",
  "Improve my website",
  "Manage leads",
  "Build an AI solution",
  "Something else",
];

export default function IntelligentContact() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-16 shadow-sm">
          <AnimatePresence mode="wait">
            {!selectedGoal ? (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-10">
                  What are you trying to improve?
                </h2>
                
                <div className="flex flex-wrap gap-4">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-all text-sm md:text-base font-medium"
                    >
                      ○ {goal}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Goal: {selectedGoal}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-10">
                  Let's design your solution.
                </h2>
                
                <a
                  href={`https://wa.me/919579098477?text=${encodeURIComponent(`Hi GAUREX, I am looking to ${selectedGoal}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  Start a Conversation <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setSelectedGoal(null)}
                  className="mt-8 text-sm text-gray-400 hover:text-black transition-colors"
                >
                  Change selection
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
