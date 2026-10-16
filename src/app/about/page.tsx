"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { COMPANY_DETAILS } from "@/data/siteData";
import {
  Sun,
  ShieldCheck,
  Award,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
} from "lucide-react";

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="pt-28 sm:pt-36">
        
        {/* HERO BANNER */}
        <section className="px-4 sm:px-12 lg:px-20 pb-16 max-w-7xl mx-auto text-left relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Our Journey &amp; Purpose
            </span>
          </div>

          <HeadingReveal as="h1" className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]">
            ENGINEERING A GREENER, INDEPENDENT FUTURE.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed">
            SRH Green Energy Pvt. Ltd. was founded with a clear vision: making clean solar electricity affordable, reliable, and accessible for homes, businesses, and farms across India.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <span className="text-3xl sm:text-5xl font-black text-lime-400 font-sans block">
                {COMPANY_DETAILS.stats.capacityInstalled}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1 block">
                Installed Capacity
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-black text-lime-400 font-sans block">
                {COMPANY_DETAILS.stats.projectsCompleted}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1 block">
                Commissioned Sites
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-black text-lime-400 font-sans block">
                {COMPANY_DETAILS.experienceYears.split(" ")[0]}
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1 block">
                Solar Industry Track Record
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-5xl font-black text-lime-400 font-sans block">
                100%
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1 block">
                In-House EPC Team
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPANY BACKGROUND & STORY (Light Cream Canvas) */}
        <section className="bg-cream-100 text-earth-text py-20 sm:py-28 px-4 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest-800"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-forest-800 uppercase">
                  Our Background
                </span>
              </div>

              <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                INDIA&apos;S PREMIER EPC &amp; O&amp;M SOLAR SPECIALIST.
              </HeadingReveal>

              <div className="space-y-4 text-earth-muted text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Headquartered in <strong>Mansarovar, Jaipur, Rajasthan</strong>, SRH Green Energy Pvt. Ltd. (SRH Solar) has emerged as a respected Engineering, Procurement, and Construction (EPC) leader. We understand that harvesting the abundant solar radiance of Rajasthan offers unprecedented financial freedom and environmental security.
                </p>
                <p>
                  Unlike brokers who subcontract installations, SRH Solar maintains a dedicated in-house team of civil engineers, electrical technicians, and project managers. Every project receives rigorous 3D shadow analysis, high-grade structural engineering, and automated DISCOM liaisoning for seamless net metering and PM Surya Ghar subsidies.
                </p>
                <p>
                  Whether commissioning a 3 kW residential rooftop for an independent home or an industrial 100 kW+ ground-mounted array for a manufacturing unit, we guarantee high yield, zero safety compromises, and 25 years of dependable generation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-forest-900">
                <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-earth-border shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-lime-600" /> Tier-1 Mono PERC &amp; TOPCon Modules
                </span>
                <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-earth-border shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-lime-600" /> 25-Year Linear Power Warranty
                </span>
              </div>
            </div>

            {/* Visual Photo Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-earth-border/60 aspect-[4/3] bg-white p-2">
                <img
                  src="/assets/images/IMG_20191016_171817.jpg"
                  alt="Rooftop Structure Engineering"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-earth-border/60 aspect-[16/9] bg-white p-2">
                <img
                  src="/assets/images/IMG_20190909_125044.jpg"
                  alt="100kW Commercial Solar Project"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: CORE PILLARS & VALUES */}
        <section className="bg-forest-950 text-white py-20 sm:py-28 px-4 sm:px-12 lg:px-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-left space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-lime-400"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
                  Why Work With SRH Solar
                </span>
              </div>
              <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Our 4 Pillars of Excellence
              </HeadingReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 border border-white/10 space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
                  <Sun className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Precision Engineering</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Custom structural design engineered to withstand 150 km/h wind gusts with hot-dip galvanized mounting structures and optimal sun tilt.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 border border-white/10 space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Hassle-Free Liaisoning</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  We manage all DISCOM inspections, net-metering synchronization, electrical inspector approvals, and direct DBT subsidy claiming.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 border border-white/10 space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">25-Year Warranties</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Only Tier-1 Bloomberg NEF-listed solar modules with 25-year performance warranties and smart string inverters with online monitoring.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 border border-white/10 space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Lifetime O&amp;M Service</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Rapid-response local service in Jaipur and across Rajasthan with preventive quarterly health checkups and panel cleaning guidance.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA STRIP */}
        <section className="bg-lime-400 text-forest-950 py-16 px-4 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-forest-900/80 block mb-1">
                Let&apos;s Collaborate With Nature
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                Ready to cut your electricity bill to zero?
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteOpen(true)}
                className="bg-forest-950 text-white font-extrabold px-8 py-4 rounded-full hover:bg-forest-900 transition shadow-xl text-sm flex items-center gap-2"
              >
                <span>Book Free Roof Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
