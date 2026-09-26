"use client";

import { motion, Variants } from "framer-motion";

export default function LivingEngine() {
  const lineVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 40, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const nodeVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-32 bg-white flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* YOUR BUSINESS */}
          <motion.div variants={nodeVariants} className="text-sm font-bold tracking-widest text-gray-400 mb-2">
            YOUR BUSINESS
          </motion.div>
          
          <motion.div variants={lineVariants} className="w-px bg-gray-300" />
          
          {/* PROBLEM */}
          <motion.div variants={nodeVariants} className="border border-gray-200 bg-gray-50 px-8 py-4 rounded-xl text-black font-semibold tracking-wide my-2 shadow-sm">
            PROBLEM
          </motion.div>

          <motion.div variants={lineVariants} className="w-px bg-gray-300" />

          {/* BRANCHING */}
          <motion.div variants={nodeVariants} className="relative w-full max-w-md h-10 my-2">
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" />
            <div className="absolute top-0 left-0 w-px h-10 bg-gray-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gray-300" />
            <div className="absolute top-0 right-0 w-px h-10 bg-gray-300" />
          </motion.div>

          {/* TECHNOLOGIES */}
          <motion.div variants={nodeVariants} className="flex justify-between w-full max-w-md my-2 px-4">
            <div className="text-sm font-bold tracking-widest text-black">AI</div>
            <div className="text-sm font-bold tracking-widest text-black">AUTOMATION</div>
            <div className="text-sm font-bold tracking-widest text-black">WEB</div>
          </motion.div>

          {/* BRANCHING BOTTOM */}
          <motion.div variants={nodeVariants} className="relative w-full max-w-md h-10 my-2">
            <div className="absolute bottom-0 left-0 w-px h-10 bg-gray-300" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gray-300" />
            <div className="absolute bottom-0 right-0 w-px h-10 bg-gray-300" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300" />
          </motion.div>

          <motion.div variants={lineVariants} className="w-px bg-gray-300" />

          {/* GAUREX SYSTEM */}
          <motion.div variants={nodeVariants} className="bg-black text-white px-8 py-4 rounded-xl font-semibold tracking-wide my-2 shadow-lg shadow-black/10">
            GAUREX SYSTEM
          </motion.div>

          <motion.div variants={lineVariants} className="w-px bg-gray-300" />

          {/* GROWTH */}
          <motion.div variants={nodeVariants} className="text-sm font-bold tracking-widest text-green-600 mt-2">
            GROWTH
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
