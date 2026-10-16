import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { BLOGS_DATA, COMPANY_DETAILS } from "@/data/siteData";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOGS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-8 text-left space-y-8">
          
          {/* Back Link */}
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:text-lime-300 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Category & Metadata */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 font-bold uppercase tracking-wider text-[10px] border border-lime-400/30">
                {post.category}
              </span>
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <HeadingReveal as="h1" className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] text-white">
              {post.title}
            </HeadingReveal>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-forest-950 border border-white/10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed pt-4 border-t border-white/10">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-forest-950 border border-lime-400/30 space-y-4">
            <h4 className="text-base sm:text-lg font-black text-lime-400 uppercase tracking-tight">
              Key Takeaways for Property Owners
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <span>Rooftop solar generates clean electricity for 25+ years with zero fuel costs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <span>PM Surya Ghar direct DBT subsidies provide up to ₹78,000 for residential homes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <span>Net Metering banking offsets summer AC power spikes with winter surplus exports.</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-3xl bg-lime-400 text-forest-950 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider block text-forest-900/80 mb-1">
                SRH Green Energy EPC
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Get a Free 3D Roof Shadow Analysis
              </h3>
            </div>
            <Link
              href="/contact"
              className="bg-forest-950 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full hover:bg-forest-900 transition flex items-center gap-2 whitespace-nowrap shadow-xl"
            >
              <span>Book Survey Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
