"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

export default function FeaturedArticles() {
  const featured = articles.slice(0, 3);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gray-100 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-black mb-4">
              <BookOpen className="w-3.5 h-3.5 text-black" />
              <span>Engineering Guides & Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              Blueprints for Modern Business Automation
            </h2>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              In-depth architectural frameworks, automation methodologies, and real-world system designs from GAUREX engineering.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-gray-600 transition-colors group shrink-0"
          >
            <span>Explore All 5 Technical Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between bg-white border border-gray-200 rounded-xl p-7 hover:border-black/40 hover:shadow-lg transition-all"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-4 text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">
                  <span className="font-semibold text-black bg-gray-100 px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-black mb-3 group-hover:text-black leading-snug">
                  <Link href={`/blog/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer / Direct Read Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-black group-hover:text-black">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black group-hover:underline"
                >
                  <span>Read Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                  GAUREX
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
