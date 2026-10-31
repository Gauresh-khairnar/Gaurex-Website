import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Home, Compass, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black flex items-center justify-center pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Error 404 &bull; Page Not Found
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6">
            Endpoint Missing. Architecture Intact.
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
            The page or resource you are looking for has been relocated or does not exist. Navigate directly to one of our core systems below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            <Link
              href="/#solutions"
              className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-200 hover:border-black transition-all group"
            >
              <Compass className="w-5 h-5 text-black mb-3" />
              <strong className="block text-sm font-bold text-black mb-1">Explore Solutions</strong>
              <span className="text-xs text-gray-500">AI Agents, ERPs & Custom Software</span>
            </Link>

            <Link
              href="/#case-studies"
              className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-200 hover:border-black transition-all group"
            >
              <Home className="w-5 h-5 text-black mb-3" />
              <strong className="block text-sm font-bold text-black mb-1">Case Studies</strong>
              <span className="text-xs text-gray-500">Verified Systems Architecture</span>
            </Link>

            <Link
              href="/#contact"
              className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-200 hover:border-black transition-all group"
            >
              <MessageSquare className="w-5 h-5 text-black mb-3" />
              <strong className="block text-sm font-bold text-black mb-1">Get in Touch</strong>
              <span className="text-xs text-gray-500">Schedule a Technical Discovery</span>
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-800 transition-colors"
          >
            Return to Homepage <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </main>

      <Footer />
    </>
  );
}

