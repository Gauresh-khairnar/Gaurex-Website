"use client";

import { motion } from "framer-motion";

export default function TypographyReveal() {
  return (
    <section className="py-40 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-200 uppercase leading-none">
            We don't build<br />what you ask for.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-right mb-32"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase leading-none">
            We build<br />what your<br />business needs.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mt-40"
        >
          <h2 className="text-[15vw] font-black tracking-tighter text-black leading-none uppercase">
            GAUREX
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
