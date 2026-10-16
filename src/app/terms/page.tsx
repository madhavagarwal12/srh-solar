"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { COMPANY_DETAILS } from "@/data/siteData";
import {
  FileCheck,
  Shield,
  Zap,
  CheckCircle,
  HelpCircle,
  Scale,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />

      <main className="pt-28 sm:pt-36">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-12 lg:px-20 pb-12 max-w-7xl mx-auto text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Legal &amp; Agreement
            </span>
          </div>

          <HeadingReveal as="h1" className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08]">
            TERMS OF SERVICE &amp; EPC CONDITIONS.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-5 leading-relaxed">
            Effective Date: October 2026 | Last Updated: October 16, 2026. <br />
            These Terms &amp; Conditions govern the use of srhsolar.com and set forth the standard engineering, procurement, and commissioning guidelines for solar PV installations undertaken by SRH Green Energy Pvt. Ltd.
          </p>
        </section>

        {/* MAIN TERMS CONTENT */}
        <section className="px-4 sm:px-12 lg:px-20 pb-24 max-w-5xl mx-auto">
          <div className="space-y-12 text-white/80 leading-relaxed font-sans text-sm sm:text-base">
            
            {/* 1. General Agreement */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <FileCheck className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  1. Agreement to Terms
                </h2>
              </div>
              <p>
                By requesting a site inspection, utilizing the SRH Solar online sizing calculator, or signing an engineering proposal with SRH Green Energy Pvt. Ltd. (&ldquo;SRH Solar&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you (&ldquo;Client&rdquo;, &ldquo;Customer&rdquo;) agree to adhere to these Terms of Service. If you do not agree with any provision herein, you should discontinue use of our site and consultation services.
              </p>
            </div>

            {/* 2. Solar Estimates & Feasibility */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Zap className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  2. Quotations, Solar Sizing &amp; Feasibility
                </h2>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-white/70">
                <li>
                  <strong className="text-white">Preliminary Online Estimates:</strong> Sizing formulas, generation values (e.g. 4.2–5.2 units/kW/day), and payback forecasts calculated via our online tools are based on standard meteorological irradiation data and state tariff rules.
                </li>
                <li>
                  <strong className="text-white">Technical Roof Audit:</strong> Final engineering quotations, Bill of Materials (BOM), inverter rating, and layout drawings are finalized following an on-site structural audit, shadow assessment, and verification of consumer sanction load.
                </li>
                <li>
                  <strong className="text-white">Quotation Validity:</strong> Formal commercial proposals remain valid for 15 calendar days from issuance, subject to market fluctuations in aluminum, copper, and crystalline solar cell commodity pricing.
                </li>
              </ul>
            </div>

            {/* 3. Scope of EPC Work */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Shield className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  3. Scope of EPC Deliverables
                </h2>
              </div>
              <p className="mb-4">
                Unless explicitly stated otherwise in the project work order, SRH Solar turnkey EPC services include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">Equipment Procurement</span>
                  <span className="text-xs text-white/60">ALMM-approved Tier-1 Mono PERC/TOPCon solar panels, MNRE-certified inverters, and hot-dip galvanized mounting structures.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">Electrical BOS</span>
                  <span className="text-xs text-white/60">UV-resistant solar DC cables, IP65 ACDB/DCDB boxes with Type-II SPDs, copper-bonded chemical earthing electrodes, and lightning protection.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">Net-Metering Liaison</span>
                  <span className="text-xs text-white/60">Preparation and submission of interconnection feasibility filings, DISCOM paperwork, and bi-directional meter testing synchronization.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">Testing &amp; Commissioning</span>
                  <span className="text-xs text-white/60">Pre-commissioning insulation resistance testing, string open-circuit voltage verification, and customer mobile app setup.</span>
                </div>
              </div>
            </div>

            {/* 4. PM Surya Ghar Subsidies */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Award className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  4. Government Subsidies &amp; Direct Benefit Transfer (DBT)
                </h2>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-white/70">
                <li>
                  <strong className="text-white">Central Subsidy Disbursal:</strong> Subsidies under the PM Surya Ghar: Muft Bijli Yojana (e.g. ₹33,000 for 1kW, ₹66,000 for 2kW, ₹85,800 for 3kW+) are issued via Direct Benefit Transfer (DBT) directly from the MNRE / central government into the consumer&apos;s verified bank account.
                </li>
                <li>
                  <strong className="text-white">SRH Solar Role:</strong> SRH Solar acts as an empaneled EPC vendor responsible for installing ALMM-compliant DCR modules, submitting geo-tagged photographs, commissioning documentation, and obtaining DISCOM inspection clearance.
                </li>
                <li>
                  <strong className="text-white">Timelines:</strong> While SRH Solar completes installation within 10–14 days, government DBT disbursement timelines are governed by state DISCOM verification queues and national portal processing schedules.
                </li>
              </ul>
            </div>

            {/* 5. Warranties & Guarantees */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <CheckCircle className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  5. Equipment Warranties &amp; Performance Guarantees
                </h2>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-white/70">
                <li>
                  <strong className="text-white">Solar PV Modules:</strong> Backed by a 10 to 12-year limited manufacturer product warranty and a 25 to 30-year linear power performance warranty (guaranteeing ≥80% output at Year 25).
                </li>
                <li>
                  <strong className="text-white">Solar Inverters:</strong> Backed by a 5 to 10-year manufacturer replacement/repair warranty depending on OEM tier (Growatt, Solis, Sungrow, Deye).
                </li>
                <li>
                  <strong className="text-white">Mounting Structure:</strong> Hot-dip galvanized structures designed to withstand wind speeds up to 150 km/h with 10–15 years structural anti-corrosion assurance.
                </li>
                <li>
                  <strong className="text-white">Workmanship Guarantee:</strong> SRH Solar provides a 5-year comprehensive installation and workmanship guarantee covering electrical cabling and joint integrity.
                </li>
              </ul>
            </div>

            {/* 6. Client Responsibilities */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <HelpCircle className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  6. Client Responsibilities
                </h2>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-white/70">
                <li>Provide uninterrupted access to the rooftop and main distribution electrical panel during installation hours.</li>
                <li>Ensure existing building electrical earthing pits and wiring comply with local electrical inspectorate safety norms.</li>
                <li>Ensure electricity bills are paid to date with no outstanding penalty dues on the consumer account.</li>
                <li>Refrain from tampering with inverter firmware, AC/DC safety breakers, or module interconnects.</li>
              </ul>
            </div>

            {/* 7. Governing Law */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Scale className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  7. Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <p>
                These terms, contracts, and any disputes arising out of solar EPC services provided by SRH Solar shall be governed by and construed in accordance with the laws of India. Any legal proceedings or dispute resolutions shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.
              </p>
            </div>

            {/* Support and contact info */}
            <div className="bg-lime-400/10 border border-lime-400/30 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Have Questions About Our Contracts?
              </h2>
              <p className="text-white/70 mb-6">
                Our engineering and legal compliance team is happy to walk you through any clause, warranty guarantee, or subsidy documentation requirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-lime-400" />
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:text-lime-400">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-lime-400" />
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white hover:text-lime-400">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA BANNER */}
        <section className="px-4 sm:px-12 lg:px-20 pb-20 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-forest-800 to-forest-800/60 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400 block mb-2">
                Partner with SRH Solar
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                Ready to cut your electricity bill by up to 90%?
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-6 py-3 rounded-full bg-lime-400 text-forest-900 font-bold hover:bg-lime-300 transition-all text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
