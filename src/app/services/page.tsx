"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { SERVICES_DATA } from "@/data/siteData";
import {
  Sun,
  BatteryCharging,
  Zap,
  Droplets,
  Lightbulb,
  Building2,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck,
} from "lucide-react";

export default function ServicesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("on-grid");

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="pt-28 sm:pt-36">
        
        {/* HERO SECTION */}
        <section className="px-4 sm:px-12 lg:px-20 pb-16 max-w-7xl mx-auto text-left relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Engineered for Lifetime Yield
            </span>
          </div>

          <HeadingReveal as="h1" className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]">
            OUR SOLAR SERVICES &amp; SOLUTIONS.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed">
            From 3 kW residential rooftops to MW-scale commercial solar plants and agricultural pumping, SRH Solar delivers turnkey engineering, tier-1 modules, and 25-year performance monitoring.
          </p>

          {/* Service Selector Tabs */}
          <div className="flex items-center gap-2 mt-10 overflow-x-auto pb-2 scrollbar-none">
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap bg-white/10 hover:bg-lime-400 hover:text-forest-950 transition border border-white/10"
              >
                {service.title}
              </a>
            ))}
          </div>
        </section>

        {/* DETAILED SERVICES SECTIONS */}
        <div className="space-y-16 pb-24">
          {SERVICES_DATA.map((service, index) => {
            const isLightBg = index % 2 === 1;

            return (
              <section
                key={service.id}
                id={service.id}
                className={`py-16 sm:py-24 px-4 sm:px-12 lg:px-20 scroll-mt-24 ${
                  isLightBg ? "bg-cream-100 text-earth-text" : "bg-forest-950 text-white"
                }`}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-[2px] ${isLightBg ? "bg-forest-800" : "bg-lime-400"}`}></span>
                      <span className={`text-xs font-extrabold tracking-[0.25em] uppercase ${isLightBg ? "text-forest-800" : "text-lime-400"}`}>
                        {service.badge}
                      </span>
                    </div>

                    <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                      {service.title}
                    </HeadingReveal>

                    <h4 className={`text-sm sm:text-base font-bold ${isLightBg ? "text-forest-900" : "text-lime-300"}`}>
                      {service.headline}
                    </h4>

                    <div className={`space-y-3 text-xs sm:text-sm leading-relaxed ${isLightBg ? "text-earth-muted" : "text-white/70"}`}>
                      {service.fullDesc.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2 pt-2">
                      <span className={`text-xs font-bold uppercase tracking-wider block ${isLightBg ? "text-forest-900" : "text-white"}`}>
                        Key Advantages
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {service.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isLightBg ? "text-forest-800" : "text-lime-400"}`} />
                            <span className={isLightBg ? "text-earth-text font-medium" : "text-white/90"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs Pill Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                      {service.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-2xl ${
                            isLightBg ? "bg-white border border-earth-border" : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <span className={`text-[10px] uppercase font-bold block ${isLightBg ? "text-earth-muted" : "text-white/50"}`}>
                            {spec.label}
                          </span>
                          <span className={`text-xs font-extrabold mt-0.5 block ${isLightBg ? "text-forest-950" : "text-lime-300"}`}>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setQuoteOpen(true)}
                        className={`inline-flex items-center gap-2.5 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition duration-300 ${
                          isLightBg
                            ? "bg-forest-900 text-white hover:bg-forest-800"
                            : "bg-lime-400 text-forest-950 hover:bg-lime-300 shadow-lime-400/20"
                        }`}
                      >
                        <span>Book Site Survey for {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <Link
                        href="/calculator"
                        className={`text-xs sm:text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition ${
                          isLightBg ? "text-forest-800" : "text-white/80 hover:text-lime-400"
                        }`}
                      >
                        Calculate Potential Savings →
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Imagery & Schematic */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className={`rounded-3xl overflow-hidden shadow-2xl p-2 ${isLightBg ? "bg-white border border-earth-border" : "bg-forest-900 border border-white/10"}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto aspect-[4/3] object-cover rounded-2xl"
                      />
                    </div>

                    {service.schematic && (
                      <div className={`p-4 rounded-3xl shadow-lg ${isLightBg ? "bg-white border border-earth-border" : "bg-white/5 border border-white/10"}`}>
                        <span className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${isLightBg ? "text-forest-800" : "text-lime-400"}`}>
                          System Flow Schematic
                        </span>
                        <img
                          src={service.schematic}
                          alt={`${service.title} Schematic Diagram`}
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </section>
            );
          })}
        </div>

      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
