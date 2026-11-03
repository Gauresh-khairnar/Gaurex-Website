"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  ArrowRight, 
  Calendar, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { sound } from "@/lib/sound";

interface NeoWebConciergeProps {
  onOpenBooking: () => void;
}

interface ChatMessage {
  id: string;
  sender: "neo" | "user";
  text: string;
  time: string;
  action?: {
    type: "booking" | "whatsapp" | "estimator";
    label: string;
  };
}

const INITIAL_PROMPTS = [
  "What is GAUREX's engineering stack?",
  "What are the typical project timelines & pricing?",
  "How does GAUREX build native iOS apps?",
  "Can I schedule a strategy call with Gauresh Khairnar?",
];

const KNOWLEDGE_BASE: Record<string, { answer: string; action?: { type: "booking" | "whatsapp" | "estimator"; label: string } }> = {
  stack: {
    answer: "GAUREX specializes in high-velocity, bank-grade engineering: Native iOS (SwiftUI, CoreData, Face ID, Apple Vision OCR), Full-Stack Web (Next.js 16, React 19, Tailwind CSS v4, TypeScript), and Custom AI Swarms (Autonomous multi-agent pipelines, custom LLMs, PyTorch).",
    action: { type: "estimator", label: "Calculate Solution Scope" },
  },
  pricing: {
    answer: "GAUREX works on milestone-based predictability: 40% advance on architecture initiation, 40% upon beta release review, and 20% on final production deployment with 100% intellectual property transfer.",
    action: { type: "estimator", label: "Open Budget Estimator" },
  },
  ios: {
    answer: "GAUREX designs bespoke iOS dashboards forged with Obsidian Glass and Warm Gold aesthetics. Features include Gyroscope-driven light sweeps, Apple Vision OCR document scanning, biometric Face ID legal seals, and zero-latency local vault storage.",
    action: { type: "booking", label: "Schedule iOS Demo Call" },
  },
  gauresh: {
    answer: "Gauresh Khairnar is the Founder and Executive Owner of GAUREX, directing end-to-end software architecture, AI agent systems, and enterprise product deployments. He personally conducts strategic consultations for qualified projects.",
    action: { type: "booking", label: "Book 1-on-1 with Gauresh" },
  },
  default: {
    answer: "GAUREX delivers mission-critical software architecture, enterprise AI automation, and native iOS applications with obsessive craft. We guarantee direct founder involvement by Gauresh Khairnar and 100% IP transfer upon launch.",
    action: { type: "booking", label: "Book Discovery Session" },
  },
};

export default function NeoWebConcierge({ onOpenBooking }: NeoWebConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "neo",
      text: "Greetings. I am Neo, AI Co-Founder at GAUREX. I can assist you with our engineering stack, project estimates, or schedule an executive consultation with Gauresh Khairnar. How can I help today?",
      time: "Just now",
      action: { type: "booking", label: "Book Discovery Session" },
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const toggleOpen = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    sound.playClick();

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    // Simulate Neo's reasoning and answer in crisp English
    setTimeout(() => {
      sound.playChime();
      const lower = text.toLowerCase();
      let responseKey = "default";

      if (lower.includes("stack") || lower.includes("tech") || lower.includes("next") || lower.includes("react")) {
        responseKey = "stack";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("budget") || lower.includes("timeline")) {
        responseKey = "pricing";
      } else if (lower.includes("ios") || lower.includes("swift") || lower.includes("mobile") || lower.includes("apple")) {
        responseKey = "ios";
      } else if (lower.includes("gauresh") || lower.includes("founder") || lower.includes("call") || lower.includes("meeting") || lower.includes("book")) {
        responseKey = "gauresh";
      }

      const match = KNOWLEDGE_BASE[responseKey];

      const neoMsg: ChatMessage = {
        id: `neo-${Date.now()}`,
        sender: "neo",
        text: match.answer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: match.action,
      };

      setMessages((prev) => [...prev, neoMsg]);
    }, 450);
  };

  const handleActionClick = (action: NonNullable<ChatMessage["action"]>) => {
    sound.playClick();
    if (action.type === "booking") {
      setIsOpen(false);
      onOpenBooking();
    } else if (action.type === "estimator") {
      setIsOpen(false);
      const elem = document.getElementById("estimator");
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    } else if (action.type === "whatsapp") {
      window.open("https://wa.me/919579098477?text=Hello%20Gauresh%2C%20I%20would%20like%20to%20discuss%20a%20strategic%20package%20with%20GAUREX.", "_blank");
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Neo Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleOpen}
          aria-label="Open Neo AI Concierge"
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-stone-950 via-stone-900 to-black text-white rounded-full border border-amber-500/40 shadow-[0_4px_25px_rgba(234,170,0,0.25)] hover:border-amber-400 hover:scale-105 transition-all duration-200"
        >
          {/* Subtle pulsating status beacon */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>

          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold tracking-wider uppercase text-stone-200 group-hover:text-amber-300">
            Neo AI
          </span>
        </button>
      </div>

      {/* Slide-in Executive Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[400px] h-[540px] max-h-[80vh] z-50 bg-stone-950/95 backdrop-blur-2xl border border-amber-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-black text-xs shadow-inner">
                GK
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white">Neo</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded font-semibold border border-amber-500/30">
                    AI Co-Founder
                  </span>
                </div>
                <div className="text-[10px] text-stone-400">Autonomous Concierge • English</div>
              </div>
            </div>

            <button
              onClick={toggleOpen}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "neo" && (
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[10px] text-amber-300 shrink-0 mt-0.5">
                    N
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-amber-400 text-stone-950 font-medium rounded-tr-sm"
                      : "bg-stone-900 text-stone-200 border border-white/10 rounded-tl-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-[9px] mt-1.5 text-right ${
                      msg.sender === "user" ? "text-stone-800" : "text-stone-500"
                    }`}
                  >
                    {msg.time}
                  </div>

                  {/* Optional Interactive Action Pill */}
                  {msg.action && (
                    <button
                      onClick={() => handleActionClick(msg.action!)}
                      className="mt-2.5 w-full py-1.5 px-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>{msg.action.label}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 border-t border-white/5 bg-stone-900/60 overflow-x-auto flex gap-1.5 no-scrollbar">
            {INITIAL_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-stone-950 border border-white/10 text-[10px] text-stone-300 hover:border-amber-400/60 hover:text-white transition-all shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-stone-950 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Neo about GAUREX architecture..."
              className="flex-1 bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 bg-amber-400 text-stone-950 rounded-xl hover:bg-amber-300 disabled:opacity-30 disabled:hover:bg-amber-400 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
