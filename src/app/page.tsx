"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal, AnimatedWord } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { VideoModal } from "@/components/VideoModal";
import { SolarCalculator } from "@/components/SolarCalculator";
import { FAQS_DATA, COMPANY_DETAILS } from "@/data/siteData";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Trees,
  Waves,
  Users,
  ShieldCheck,
  Megaphone,
  Handshake,
  Globe2,
  ChevronDown,
  ChevronUp,
  Sun,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCapacity, setQuoteCapacity] = useState<number | undefined>(undefined);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleOpenQuote = (capacity?: number) => {
    setQuoteCapacity(capacity);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Floating Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO                                                           */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] bg-forest-900 pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-between">
          
          {/* Ambient Glows */}
          <div className="absolute top-12 right-1/4 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-forest-700/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center relative z-10 my-auto">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
              
              {/* Architectural Overline Section Heading */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-lime-400"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
                  A Cleaner, Greener Tomorrow
                </span>
              </div>

              {/* Main Headline with Autopilot Studio Style Word Reveal */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
                <span className="block font-editorial-italic font-normal text-white/95">
                  <AnimatedWord text="for" index={0} /> <AnimatedWord text="a" index={1} />
                </span>
                <span className="block font-black text-white uppercase tracking-tight">
                  <AnimatedWord text="HEALTHIER" index={2} />
                </span>
                <span className="block font-black text-white uppercase tracking-tight flex items-center gap-2 sm:gap-3 flex-wrap">
                  <AnimatedWord text="PLANET" index={3} />
                  <span className="inline-block overflow-hidden align-bottom mb-[-0.16em] pb-[0.16em]">
                    <span className="inline-block text-lime-400">
                      <svg className="w-10 h-10 sm:w-16 sm:h-16 inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4C8 17.5 10 13 14 11c3-1.5 6-1 8-1-1 7-5 12-10 12-1 0-2-.2-3-.5"/>
                      </svg>
                    </span>
                  </span>
                </span>
              </h1>

              {/* Subhead Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-xl font-normal leading-relaxed">
                We work globally to protect the environment, conserve natural resources, and engineer clean solar rooftop energy for generations to come.
              </p>

              {/* Mobile-Friendly Button Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => handleOpenQuote()}
                  className="group flex items-center justify-center gap-3 bg-lime-400 text-forest-950 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-lime-400/25 hover:bg-lime-300 hover:scale-[1.02] transition duration-300"
                >
                  <span>Get Involved</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
                </button>

                <button
                  onClick={() => setActiveVideoId("deLudtlNZAE")}
                  className="flex items-center justify-center gap-3 bg-white/5 sm:bg-transparent border border-white/10 sm:border-transparent text-white hover:text-lime-400 font-bold text-sm sm:text-base py-3.5 px-4 rounded-full transition group"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-forest-950 group-hover:scale-110 transition duration-300">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Watch Video (100 kW Plant)</span>
                </button>
              </div>

            </div>

            {/* Right Column: Visual with Sapling, Stamp & Handwritten Note */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
              
              {/* Handwritten Note Top Right */}
              <div className="absolute -top-10 sm:-top-12 right-2 sm:right-4 z-20 font-doodle text-xl sm:text-3xl text-lime-300 -rotate-6 select-none pointer-events-none flex flex-col items-center">
                <span>Small Actions,</span>
                <span>Big Change :)</span>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-lime-400 mt-0.5" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M 12,10 Q 28,28 18,44 M 18,44 L 28,36 M 18,44 L 10,38" strokeLinecap="round" />
                </svg>
              </div>

              {/* Hero Image Container */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="/assets/images/banner-1.jpg"
                  alt="SRH Green Energy Rooftop Solar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
                
                {/* Real Installation Overlay Card */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-forest-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-lime-400 block">Commercial Solar EPC</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">100 kW Plant Commissioned</span>
                  </div>
                  <span className="text-[11px] text-white/60">Mansarovar, Jaipur</span>
                </div>
              </div>

              {/* Rotating Circular Stamp Badge */}
              <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 z-20 w-28 h-28 sm:w-36 sm:h-36 select-none pointer-events-none">
                <svg className="w-full h-full rotating-badge" viewBox="0 0 160 160">
                  <defs>
                    <path id="heroBadgePath" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                  </defs>
                  <circle cx="80" cy="80" r="70" fill="#07150E" stroke="#A7F46A" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text font-family="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="700" fill="#A7F46A" letterSpacing="2.5">
                    <textPath href="#heroBadgePath">
                      • GREEN EARTH ALLIANCE • WORLDWIDE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-lime-400" />
                </div>
              </div>

            </div>

          </div>

          {/* Hero Bottom Stats Bar */}
          <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-8 sm:pt-10 mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative z-10 text-left">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">1M<span className="text-lime-400">+</span></span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-1">Trees Planted / Offset</span>
            </div>
            <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8">
              <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">50<span className="text-lime-400">+</span></span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-1">Global &amp; Regional Projects</span>
            </div>
            <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8">
              <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">200K<span className="text-lime-400">+</span></span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-1">People Benefited</span>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: A CLEANER TOMORROW STARTS TODAY (Cream Sand Canvas)            */}
        {/* ========================================================================= */}
        <section className="bg-cream-100 text-earth-text py-20 sm:py-28 px-4 sm:px-12 lg:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Overline */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest-800"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-forest-800 uppercase">
                  Who We Are
                </span>
              </div>

              {/* Autopilot Studio Heading Reveal */}
              <HeadingReveal as="h2" className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04] uppercase">
                A CLEANER TOMORROW STARTS TODAY.
              </HeadingReveal>

              <p className="text-earth-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                From rooftop solar adoption to industrial clean energy transition, we take real action to protect what matters most — our planet. SRH Green Energy engineers reliable solar power solutions globally, taking care of installation, subsidies, and maintenance.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-forest-900 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full hover:bg-forest-800 transition duration-300 group shadow-md"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
              <div className="absolute -bottom-8 right-4 sm:right-6 font-doodle text-xl sm:text-2xl text-forest-800 select-none pointer-events-none rotate-3">
                <span>Our Planet,</span>
                <span>Our Home :)</span>
              </div>

              <div className="relative w-full max-w-xs sm:max-w-md aspect-square rounded-full p-4 border border-earth-border/70 bg-white/40 backdrop-blur-sm shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                  <img
                    src="/assets/images/solar-panel.jpg"
                    alt="Solar Planet"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
                </div>
                
                <div className="absolute -top-3 left-4 sm:left-8 bg-white shadow-lg border border-earth-border px-4 py-2 rounded-full flex items-center gap-2">
                  <Sun className="w-4 h-4 text-lime-600" />
                  <span className="text-xs font-bold text-forest-950">100% Clean Green Energy</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHAT WE DO / PROGRAM 01 (Dark Forest Background)               */}
        {/* ========================================================================= */}
        <section className="bg-forest-900 text-white py-20 sm:py-24 px-4 sm:px-12 lg:px-20 relative border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-lime-400"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
                  What We Do • Program 01
                </span>
              </div>

              <div className="text-6xl sm:text-8xl font-black text-white/20 select-none tracking-tighter">
                01
              </div>

              <HeadingReveal as="h3" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Proud advocates for clean energy transition.
              </HeadingReveal>

              <p className="text-white/70 text-xs sm:text-base leading-relaxed">
                Engineering, Procurement &amp; Construction (EPC) and Operation &amp; Maintenance (O&amp;M) delivering reliable solar energy solutions across rural, commercial, and domestic sectors.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-lime-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-lime-400" /> On-Grid</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-lime-400" /> Off-Grid</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-lime-400" /> Solar Pumps</span>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute -top-9 right-4 font-doodle text-lg sm:text-2xl text-lime-300 select-none pointer-events-none -rotate-3">
                <span>Forests, Oceans,</span>
                <span>Wildlife, People :)</span>
              </div>

              <div
                className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border border-white/15 group cursor-pointer"
                onClick={() => setActiveVideoId("4vL29YTGkvQ")}
              >
                <img
                  src="/assets/images/IMG_20190909_125044.jpg"
                  alt="Commercial Solar Installation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-forest-950/40 group-hover:bg-forest-950/20 transition duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-lime-400 text-forest-950 flex items-center justify-center shadow-lg shadow-lime-400/40 group-hover:scale-110 transition duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 text-xs bg-forest-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white/90">
                  100 kW Plant Structure Site • Watch Video
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: REAL ACTIONS / 4 IMPACT CARDS (Cream Sand Background)          */}
        {/* ========================================================================= */}
        <section id="impact" className="bg-cream-100 text-earth-text py-20 sm:py-28 px-4 sm:px-12 lg:px-20 relative">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-earth-border/60 pb-6 sm:pb-8 text-left">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[2px] bg-forest-800"></span>
                  <span className="text-xs font-extrabold tracking-[0.25em] text-forest-800 uppercase">
                    Our Impact
                  </span>
                </div>
                <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                  REAL ACTIONS,
                </HeadingReveal>
              </div>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-forest-800 hover:text-lime-600 transition group self-start sm:self-auto"
              >
                <span>See All Impact</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-border/40 flex flex-col justify-between group hover:-translate-y-1 text-center">
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cream-100 flex items-center justify-center text-forest-800 group-hover:bg-lime-400 group-hover:text-forest-950 transition duration-300">
                    <Trees className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-forest-900 tracking-tight block">1M+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-700 block mt-0.5">Trees Planted</span>
                  </div>
                  <p className="text-earth-muted text-xs leading-relaxed">
                    Restoring forests worldwide through clean rooftop solar carbon offsets.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-border/40 flex flex-col justify-between group hover:-translate-y-1 text-center">
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cream-100 flex items-center justify-center text-forest-800 group-hover:bg-lime-400 group-hover:text-forest-950 transition duration-300">
                    <Waves className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-forest-900 tracking-tight block">300+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-700 block mt-0.5">Tons of Plastic Removed</span>
                  </div>
                  <p className="text-earth-muted text-xs leading-relaxed">
                    Cleaner oceans for marine life through community cleanup and circular energy.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-border/40 flex flex-col justify-between group hover:-translate-y-1 text-center">
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cream-100 flex items-center justify-center text-forest-800 group-hover:bg-lime-400 group-hover:text-forest-950 transition duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-forest-900 tracking-tight block">50+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-700 block mt-0.5">Communities Supported</span>
                  </div>
                  <p className="text-earth-muted text-xs leading-relaxed">
                    Stronger, greener communities equipped with independent solar power.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-border/40 flex flex-col justify-between group hover:-translate-y-1 text-center">
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cream-100 flex items-center justify-center text-forest-800 group-hover:bg-lime-400 group-hover:text-forest-950 transition duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-forest-900 tracking-tight block">100+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-700 block mt-0.5">Wildlife Habitats Protected</span>
                  </div>
                  <p className="text-earth-muted text-xs leading-relaxed">
                    Preserving biodiversity and pristine ecosystems for future generations.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: VIDEO / QUOTE BANNER (Immersive Nature Photo)                  */}
        {/* ========================================================================= */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-12 text-center text-white overflow-hidden flex items-center justify-center">
          <img
            src="/assets/images/solar-panel.jpg"
            alt="Nature and Mountains"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-950/80 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <HeadingReveal as="blockquote" className="font-editorial-italic text-2xl sm:text-5xl lg:text-6xl text-white/95 leading-tight max-w-3xl mx-auto px-2">
              “A healthy planet is a happier home for everyone.”
            </HeadingReveal>

            <p className="text-xs sm:text-sm font-medium text-white/70">
              — Jane Goodall
            </p>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => setActiveVideoId("deLudtlNZAE")}
                className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 hover:bg-lime-400 hover:text-forest-950 transition duration-300 shadow-2xl"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TOGETHER FOR A GREENER TOMORROW + POLAROID COLLAGE             */}
        {/* ========================================================================= */}
        <section className="bg-cream-100 text-earth-text py-20 sm:py-28 px-4 sm:px-12 lg:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest-800"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-forest-800 uppercase">
                  Be Part of the Solution
                </span>
              </div>

              <HeadingReveal as="h2" className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.04]">
                TOGETHER FOR A GREENER TOMORROW.
              </HeadingReveal>

              <div className="font-doodle text-xl sm:text-2xl text-forest-800 -rotate-3">
                <span>Good People, Greener Planet :)</span>
              </div>

              <p className="text-earth-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-normal">
                Join a global movement to protect our environment. Volunteer, donate, or simply spread the word.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenQuote()}
                  className="inline-flex items-center gap-3 bg-forest-900 text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full hover:bg-forest-800 transition duration-300 group shadow-lg"
                >
                  <span>Join Us Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
                </button>
              </div>
            </div>

            {/* Layered Polaroids Collage */}
            <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[540px] flex items-center justify-center">
              
              <div className="absolute top-2 left-2 sm:left-12 w-44 sm:w-60 bg-white p-3 sm:p-3.5 pb-5 sm:pb-6 rounded-lg shadow-2xl -rotate-6 border border-earth-border/40 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 masking-tape rotate-2 rounded-sm" />
                <div className="aspect-square rounded overflow-hidden mb-2 sm:mb-3 bg-gray-100">
                  <img
                    src="/assets/images/IMG_20191016_171817.jpg"
                    alt="Rooftop Structure"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-doodle text-center text-forest-900 text-xs sm:text-base leading-none">
                  Hands Planting • Fertile Soil
                </div>
              </div>

              <div className="absolute top-6 right-2 sm:right-10 w-44 sm:w-64 bg-white p-3 sm:p-3.5 pb-5 sm:pb-6 rounded-lg shadow-2xl rotate-6 border border-earth-border/40 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-4 sm:h-5 masking-tape -rotate-1 rounded-sm" />
                <div className="aspect-square rounded overflow-hidden mb-2 sm:mb-3 bg-gray-100">
                  <img
                    src="/assets/images/IMG_20190909_125044.jpg"
                    alt="Pristine Lake Landscape"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-doodle text-center text-forest-900 text-xs sm:text-base leading-none">
                  Pristine Waters &amp; Mountains
                </div>
              </div>

              <div className="absolute bottom-2 left-6 sm:left-20 w-40 sm:w-56 bg-white p-2.5 sm:p-3 pb-4 sm:pb-5 rounded-lg shadow-2xl rotate-3 border border-earth-border/40 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3.5 sm:h-4 masking-tape -rotate-3 rounded-sm" />
                <div className="aspect-[4/3] rounded overflow-hidden mb-2 bg-gray-100">
                  <img
                    src="/assets/images/WhatsApp-Image-2021-02-24-at-9.14.24-AM-1-edited.jpeg"
                    alt="Solar Leaf Array"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-doodle text-center text-forest-900 text-xs sm:text-sm leading-none">
                  Green Leaves • Clean Energy
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: GET THE WORD OUT (3 Feature Columns)                           */}
        {/* ========================================================================= */}
        <section className="bg-cream-100 text-earth-text py-20 sm:py-24 px-4 sm:px-12 lg:px-20 border-t border-earth-border/50">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 text-left">
            <div>
              <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                GET the WORD OUT.
              </HeadingReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-lime-400/40 flex items-center justify-center text-forest-900">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-forest-950">Get the word</h4>
                <p className="text-earth-muted text-xs sm:text-sm leading-relaxed">
                  We talk globally to the environment and an sustainable future, connect greener community.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-lime-400/40 flex items-center justify-center text-forest-900">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-forest-950">Community Support</h4>
                <p className="text-earth-muted text-xs sm:text-sm leading-relaxed">
                  Tons of plastic supported to ocean, communities stronger greener for more life.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-lime-400/40 flex items-center justify-center text-forest-900">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-forest-950">Get the word out</h4>
                <p className="text-earth-muted text-xs sm:text-sm leading-relaxed">
                  Wildlife habitats ensure our communities will impact ecosystems for greener tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: SOLAR SAVINGS CALCULATOR                                       */}
        {/* ========================================================================= */}
        <section id="calculator" className="bg-forest-950 text-white py-20 sm:py-24 px-4 sm:px-12 lg:px-20 relative border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="w-6 h-[2px] bg-lime-400"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">Solar ROI Calculator</span>
                <span className="w-6 h-[2px] bg-lime-400"></span>
              </div>
              <HeadingReveal as="h2" className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                Calculate Your Solar Savings
              </HeadingReveal>
              <p className="text-white/60 text-xs sm:text-sm">
                Drag the slider to your average monthly electricity bill to calculate your recommended solar capacity, roof area, and government subsidy.
              </p>
            </div>

            <SolarCalculator onOpenQuoteModal={handleOpenQuote} />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: FAQ ACCORDION                                                  */}
        {/* ========================================================================= */}
        <section id="faq" className="bg-forest-900 text-white py-20 sm:py-28 px-4 sm:px-12 lg:px-20 relative">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="w-6 h-[2px] bg-lime-400"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">Have Questions?</span>
                <span className="w-6 h-[2px] bg-lime-400"></span>
              </div>
              <HeadingReveal as="h2" className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                Frequently Asked Questions
              </HeadingReveal>
              <p className="text-white/60 text-xs sm:text-sm">
                Everything you need to know about switching to clean rooftop solar with SRH Solar.
              </p>
            </div>

            <div className="space-y-4 text-left">
              {FAQS_DATA.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-forest-950/70 border border-white/10 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between font-bold text-sm sm:text-lg text-white hover:text-lime-400 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-lime-400 text-xl font-mono ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCapacity={quoteCapacity}
      />
      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />

    </div>
  );
}
