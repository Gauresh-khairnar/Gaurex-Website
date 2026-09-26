"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroVideo({ onComplete }: { onComplete: () => void }) {
  const [showVideo, setShowVideo] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if played in session
    const hasPlayed = sessionStorage.getItem("gaurex_intro_played");
    if (hasPlayed && process.env.NODE_ENV !== "development") {
      setShowVideo(false);
      onComplete();
      return;
    } else {
      setShowVideo(true);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [onComplete]);

  const handleVideoEnd = () => {
    sessionStorage.setItem("gaurex_intro_played", "true");
    setShowVideo(false);
    setTimeout(onComplete, 1000); // Wait for fade out
  };

  const skipIntro = () => {
    handleVideoEnd();
  };

  // Wait until mounted to prevent hydration flash
  if (showVideo === null) return null;
  if (!showVideo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          src={isMobile ? "/videos/mobile.mp4" : "/videos/desktop.mp4"}
        />
        
        <button
          onClick={skipIntro}
          className="absolute bottom-6 right-6 px-4 py-2 text-sm text-white/70 bg-black/20 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/40 hover:text-white transition-all z-10"
        >
          Skip Intro
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
