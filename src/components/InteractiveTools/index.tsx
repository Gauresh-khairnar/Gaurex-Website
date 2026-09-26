"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveTools() {
  const [activeTab, setActiveTab] = useState<"roi" | "cost">("roi");

  // ROI State
  const [leads, setLeads] = useState(100);
  const [hours, setHours] = useState(20);
  const [value, setValue] = useState(500);

  // Estimator State
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const techOptions = [
    { id: "web", label: "Smart Website", price: 3000 },
    { id: "crm", label: "Custom CRM", price: 5000 },
    { id: "automation", label: "Workflow Automation", price: 4000 },
    { id: "ai", label: "AI Integration", price: 6000 },
    { id: "erp", label: "ERP Dashboard", price: 8000 },
  ];

  const toggleTech = (id: string) => {
    setSelectedTech(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const calculateCost = () => {
    const total = selectedTech.reduce((acc, id) => {
      const item = techOptions.find(t => t.id === id);
      return acc + (item ? item.price : 0);
    }, 0);
    if (total === 0) return "$0";
    return `$${(total * 0.8).toLocaleString()} - $${(total * 1.2).toLocaleString()}`;
  };

  const timeSaved = hours * 4 * 0.8; // 80% of manual hours saved per month
  const revenuePotential = leads * 0.15 * value; // Assuming 15% conversion lift

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Calculate the impact.
          </h2>
          <div className="inline-flex bg-gray-200 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("roi")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "roi" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              ROI Calculator
            </button>
            <button
              onClick={() => setActiveTab("cost")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "cost" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              Solution Estimator
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          {activeTab === "roi" ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-4">
                    Monthly Leads <span>{leads}</span>
                  </label>
                  <input type="range" min="10" max="1000" step="10" value={leads} onChange={(e) => setLeads(Number(e.target.value))} className="w-full accent-black" />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-4">
                    Manual Admin Hours / Week <span>{hours}h</span>
                  </label>
                  <input type="range" min="5" max="100" step="5" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-black" />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-700 mb-4">
                    Average Customer Value <span>${value}</span>
                  </label>
                  <input type="range" min="50" max="5000" step="50" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full accent-black" />
                </div>
              </div>
              <div className="bg-black text-white p-8 rounded-3xl flex flex-col justify-center">
                <div className="mb-8">
                  <div className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider">Potential Time Saved</div>
                  <div className="text-4xl font-bold">{Math.round(timeSaved)} hrs <span className="text-xl text-gray-400 font-normal">/ month</span></div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider">Added Revenue Potential</div>
                  <div className="text-4xl font-bold text-green-400">+${revenuePotential.toLocaleString()} <span className="text-xl text-gray-400 font-normal">/ month</span></div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row gap-12">
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-6">Select Required Modules</h3>
                <div className="flex flex-wrap gap-4">
                  {techOptions.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => toggleTech(tech.id)}
                      className={`px-6 py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                        selectedTech.includes(tech.id)
                          ? "border-black bg-black text-white"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {tech.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col justify-center text-center">
                <div className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Estimated Investment</div>
                <div className="text-3xl font-bold text-black mb-8">{calculateCost()}</div>
                <a href="https://wa.me/919579098477?text=Hi%20GAUREX%2C%20I%20would%20like%20to%20request%20an%20exact%20proposal." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors block text-center">
                  Request Exact Proposal
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
