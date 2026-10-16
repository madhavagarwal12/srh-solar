"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { SolarCalculator } from "@/components/SolarCalculator";
import { QuoteModal } from "@/components/QuoteModal";
import {
  Sun,
  ShieldCheck,
  IndianRupee,
  Calendar,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

export default function CalculatorPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedKw, setSelectedKw] = useState<number | undefined>(undefined);

  const handleOpenQuoteWithCapacity = (kw: number) => {
    setSelectedKw(kw);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="pt-28 sm:pt-36">
        
        {/* HEADER SECTION */}
        <section className="px-4 sm:px-12 lg:px-20 pb-12 max-w-7xl mx-auto text-left relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Financial Modeling &amp; Sizing Engine
            </span>
          </div>

          <HeadingReveal as="h1" className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]">
            SOLAR ROI &amp; SUBSIDY CALCULATOR.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed">
            Calculate your exact recommended solar capacity, shadow-free roof area, PM Surya Ghar central subsidy, payback period, and 25-year financial savings based on real Rajasthan DISCOM tariff metrics.
          </p>
        </section>

        {/* INTERACTIVE CALCULATOR ENGINE */}
        <section className="px-4 sm:px-12 lg:px-20 pb-20 max-w-7xl mx-auto">
          <SolarCalculator onOpenQuoteModal={handleOpenQuoteWithCapacity} standalone={true} />
        </section>

        {/* SECTION 2: HOW THE CALCULATIONS WORK (Transparency & Methodology) */}
        <section className="bg-cream-100 text-earth-text py-20 sm:py-24 px-4 sm:px-12 lg:px-20 border-t border-earth-border">
          <div className="max-w-7xl mx-auto space-y-12 text-left">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-forest-800"></span>
                <span className="text-xs font-extrabold tracking-[0.25em] text-forest-800 uppercase">
                  Engineering Methodology
                </span>
              </div>
              <HeadingReveal as="h2" className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                How Your Savings Are Calculated
              </HeadingReveal>
              <p className="text-earth-muted text-sm sm:text-base max-w-2xl">
                We believe in 100% mathematical transparency. Here are the real formulas used by SRH Solar engineers:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Capacity Formula */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth-border/60 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-lime-400 flex items-center justify-center font-mono font-bold text-sm">
                  kW
                </div>
                <h4 className="text-lg font-bold text-forest-950">Recommended Sizing</h4>
                <div className="p-3 bg-cream-50 rounded-xl font-mono text-xs text-forest-800 border border-earth-border/40">
                  Capacity (kW) = Monthly Units ÷ 125
                </div>
                <p className="text-earth-muted text-xs leading-relaxed">
                  In Rajasthan, 1 kW of solar capacity generates roughly 4.2 to 4.5 units of electricity per day (accounting for 80% Performance Ratio system losses). 1 kW produces approx 125 units per month.
                </p>
              </div>

              {/* Card 2: Subsidy Table */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth-border/60 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-lime-400 flex items-center justify-center font-mono font-bold text-sm">
                  ₹
                </div>
                <h4 className="text-lg font-bold text-forest-950">PM Surya Ghar Subsidy</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-earth-border/40">
                    <span>1 kW System:</span>
                    <span className="font-bold text-lime-600">₹ 30,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-earth-border/40">
                    <span>2 kW System:</span>
                    <span className="font-bold text-lime-600">₹ 60,000</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold text-forest-950">
                    <span>3 kW to 10 kW:</span>
                    <span className="text-lime-600">₹ 78,000 (Max)</span>
                  </div>
                </div>
                <p className="text-earth-muted text-xs leading-relaxed">
                  Direct Benefit Transfer (DBT) deposited directly into your bank account post net-meter commissioning by the Ministry of New &amp; Renewable Energy (MNRE).
                </p>
              </div>

              {/* Card 3: 25-Year Compound Savings */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth-border/60 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-lime-400 flex items-center justify-center font-mono font-bold text-sm">
                  25Y
                </div>
                <h4 className="text-lg font-bold text-forest-950">Tariff Inflation Defense</h4>
                <div className="p-3 bg-cream-50 rounded-xl font-mono text-xs text-forest-800 border border-earth-border/40">
                  Savings = Σ (Annual Bill × 1.04ⁿ)
                </div>
                <p className="text-earth-muted text-xs leading-relaxed">
                  Electricity utility tariffs historically increase by 4% to 6% per annum. Solar locks in your energy generation cost at ₹0 for 25 years, shielding you against inflation.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CALCULATION FAQS */}
        <section className="bg-forest-950 text-white py-20 px-4 sm:px-12 lg:px-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Frequently Asked Calculation Questions
              </span>
              <HeadingReveal as="h2" className="text-2xl sm:text-4xl font-black uppercase">
                Got Questions About Sizing &amp; Costs?
              </HeadingReveal>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-6 rounded-2xl bg-forest-900 border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">What if my electricity bill varies between summer and winter?</h4>
                <p className="text-white/70 leading-relaxed">
                  In northern India, summer air conditioning drives up consumption. We calculate your recommended system based on your annual average monthly consumption so that surplus units exported during mild weather offset summer peaks via Net Metering banking.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-forest-900 border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">Can I upgrade my system capacity later?</h4>
                <p className="text-white/70 leading-relaxed">
                  Yes! We design our structural frames and inverters with modular expansion in mind. If your sanctioned load increases or you purchase an EV, you can easily add additional modules.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-forest-900 border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">Does SRH Solar provide financing or EMI options?</h4>
                <p className="text-white/70 leading-relaxed">
                  Yes, under the PM Surya Ghar national scheme, public and private banks offer collateral-free solar loans at subsidized interest rates (~7% p.a.). Often, your monthly EMI is lower than the electricity bill savings, making the installation cash-flow positive from Day 1!
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultCapacity={selectedKw}
      />
    </div>
  );
}
