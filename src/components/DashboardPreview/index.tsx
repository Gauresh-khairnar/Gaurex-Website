"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap, LayoutDashboard, MessageSquare, FolderGit2, CreditCard } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            The GAUREX Command Center
          </h2>
          <p className="text-lg text-gray-500">We build systems you can actually control.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 p-6 flex flex-col gap-2">
            <div className="text-lg font-bold tracking-tighter mb-8 px-4">Client Portal</div>
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: FolderGit2, label: "Projects", active: false },
              { icon: MessageSquare, label: "Messages", active: false },
              { icon: CreditCard, label: "Invoices", active: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  item.active ? "bg-black text-white shadow-md" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 p-8 md:p-12 bg-white">
            <div className="flex justify-between items-end mb-12">
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Overview</div>
                <h3 className="text-2xl font-bold text-black">System Performance</h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm font-medium bg-green-50 text-green-600 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                All systems operational
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: "New Leads (30d)", value: "342", trend: "+24%", icon: Users, color: "text-blue-500" },
                { label: "Tasks Automated", value: "1,402", trend: "+12%", icon: Zap, color: "text-amber-500" },
                { label: "Est. Time Saved", value: "124 hrs", trend: "+8%", icon: TrendingUp, color: "text-green-500" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">{stat.trend}</span>
                  </div>
                  <div className="text-3xl font-black text-black mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Automation Logs</h4>
              <div className="space-y-3">
                {[
                  "Lead captured from Instagram DM & synced to CRM.",
                  "Automated welcome sequence emailed to 42 new prospects.",
                  "Invoice #4029 automatically generated and sent.",
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" />
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
