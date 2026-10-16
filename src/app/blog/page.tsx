"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { BLOGS_DATA } from "@/data/siteData";
import { Clock, Calendar, ArrowRight, Tag, BookOpen } from "lucide-react";

export default function BlogListingPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Financial Savings", "Technical Guide", "System Comparison", "Agriculture & Pumps"];

  const filteredBlogs = selectedCategory === "All"
    ? BLOGS_DATA
    : BLOGS_DATA.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="pt-28 sm:pt-36">
        
        {/* HEADER */}
        <section className="px-4 sm:px-12 lg:px-20 pb-14 max-w-7xl mx-auto text-left relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Solar Guides &amp; Insights
            </span>
          </div>

          <HeadingReveal as="h1" className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]">
            KNOWLEDGE FOR A GREENER TOMORROW.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed">
            Expert insights, government subsidy updates, technical guides, and financial analysis on rooftop solar adoption in India.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-lime-400 text-forest-950 shadow-md shadow-lime-400/20"
                    : "bg-white/10 text-white/70 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="px-4 sm:px-12 lg:px-20 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredBlogs.map((post) => (
              <article
                key={post.slug}
                className="bg-forest-950/80 border border-white/10 rounded-3xl overflow-hidden hover:border-lime-400/40 transition duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-forest-900 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-lime-400 border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-lime-300 transition tracking-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-lime-400 hover:text-lime-300 transition"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
