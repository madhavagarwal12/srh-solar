"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { QuoteModal } from "@/components/QuoteModal";
import { COMPANY_DETAILS } from "@/data/siteData";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Database,
  UserCheck,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
              Legal &amp; Privacy
            </span>
          </div>

          <HeadingReveal as="h1" className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08]">
            PRIVACY POLICY &amp; DATA GOVERNANCE.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-5 leading-relaxed">
            Effective Date: October 2026 | Last Updated: October 16, 2026. <br />
            SRH Green Energy Pvt. Ltd. (&ldquo;SRH Solar&rdquo;) is committed to protecting the privacy, confidentiality, and integrity of all customer records, rooftop telemetry, and utility billing information entrusted to us.
          </p>
        </section>

        {/* CONTENT SECTION */}
        <section className="px-4 sm:px-12 lg:px-20 pb-24 max-w-5xl mx-auto">
          <div className="space-y-12 text-white/80 leading-relaxed font-sans text-sm sm:text-base">
            
            {/* 1. Introduction */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  1. Scope &amp; Commitment
                </h2>
              </div>
              <p>
                This Privacy Policy applies to all visitors, clients, and partners who access our website (<Link href="/" className="text-lime-400 hover:underline">srhsolar.com</Link>), use our online solar calculators, schedule physical or drone roof assessments, or enter into Engineering, Procurement, and Construction (EPC) agreements with SRH Green Energy Pvt. Ltd.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Database className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  2. Information We Collect
                </h2>
              </div>
              <p className="mb-4">
                In order to calculate accurate solar PV engineering layouts, submit government subsidy paperwork, and coordinate net-metering approvals with state DISCOMs, we collect:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-white/70">
                <li>
                  <strong className="text-white">Personal Contact Details:</strong> Full name, telephone/WhatsApp number, billing address, and email address.
                </li>
                <li>
                  <strong className="text-white">Rooftop &amp; Property Specifications:</strong> Physical premises address, shadow coordinates, roof area (sq. ft.), structural type (RCC flat, tin shed, ground mount), and photos.
                </li>
                <li>
                  <strong className="text-white">Electrical Utility Records:</strong> Consumer Account Number (K-Number/CA Number), sanction load (kW), past 6–12 months electricity bills, tariff category, and distribution company (JVVNL, AVVNL, JdVVNL, or other state utilities).
                </li>
                <li>
                  <strong className="text-white">Subsidy &amp; Identification Documents:</strong> Aadhaar number, PAN card copy, canceled bank cheque (for DBT direct subsidy transfer under PM Surya Ghar Muft Bijli Yojana).
                </li>
                <li>
                  <strong className="text-white">Technical Generation Data:</strong> For systems equipped with Wi-Fi / 4G solar inverters, remote inverter telemetry (daily kWh output, voltage, power factor) is captured for warranty maintenance.
                </li>
              </ul>
            </div>

            {/* 3. Purpose of Processing */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Eye className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  3. Purpose of Processing Your Data
                </h2>
              </div>
              <p className="mb-3">We collect and process your data strictly for legitimate operational purposes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">PV System Sizing</span>
                  <span className="text-xs text-white/60">Simulating generation output, shadow loss, and structural load matching your exact energy needs.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">DISCOM Net-Metering</span>
                  <span className="text-xs text-white/60">Filing sanction load extension, bi-directional meter testing, and sync approvals with local DISCOM divisions.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">PM Surya Ghar Subsidy</span>
                  <span className="text-xs text-white/60">Uploading commissioning reports and work completion certificates to the National Solar Portal for direct subsidy release.</span>
                </div>
                <div className="bg-forest-900/60 p-4 rounded-xl border border-white/5">
                  <span className="text-lime-400 font-bold block mb-1">Warranty &amp; O&amp;M Support</span>
                  <span className="text-xs text-white/60">Monitoring inverter alerts, annual maintenance schedules, and dispatching solar technicians.</span>
                </div>
              </div>
            </div>

            {/* 4. Disclosure to Third Parties */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <FileText className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  4. Disclosure to Authorized Entities
                </h2>
              </div>
              <p className="mb-3">
                SRH Solar <strong className="text-white">never sells, rents, or monetizes</strong> consumer data. Disclosures are made only to authorized entities required to fulfill your installation:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-white/70">
                <li><strong className="text-white">State Electricity Distribution Companies (DISCOMs):</strong> For net-metering inspection, line verification, and meter replacement.</li>
                <li><strong className="text-white">Ministry of New and Renewable Energy (MNRE):</strong> Via the National Portal for Rooftop Solar to credit central capital subsidies.</li>
                <li><strong className="text-white">Equipment Manufacturers:</strong> Inverter (Growatt, Solis, Sungrow) and Tier-1 solar panel manufacturers for activating product warranties (10–25 years).</li>
                <li><strong className="text-white">Certified Installation Crews:</strong> SRH engineers and technicians assigned to execute site mounting and electrical cabling.</li>
              </ul>
            </div>

            {/* 5. Data Security & Storage */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <Lock className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  5. Security Standards
                </h2>
              </div>
              <p>
                All documents submitted through our online portals or WhatsApp consultation channels are stored in secured, encrypted environments with multi-factor authentication. Inverter cloud monitoring credentials remain protected under standard OEM TLS 1.3 encryption protocols.
              </p>
            </div>

            {/* 6. User Rights */}
            <div className="bg-forest-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-lime-400 mb-4">
                <UserCheck className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  6. Your Privacy Rights
                </h2>
              </div>
              <p className="mb-3">
                As a consumer, you have the right to:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-white/70">
                <li>Request a copy of your rooftop engineering drawings and electrical single-line diagrams (SLD).</li>
                <li>Request rectification of any outdated billing or contact details on file.</li>
                <li>Opt out of promotional calls, SMS announcements, or marketing newsletters at any time.</li>
                <li>Request account deletion following the expiration of system commissioning and warranty filing obligations.</li>
              </ul>
            </div>

            {/* 7. Contact Us */}
            <div className="bg-lime-400/10 border border-lime-400/30 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Questions or Grievance Redressal?
              </h2>
              <p className="text-white/70 mb-6">
                If you have inquiries regarding this Privacy Policy or wish to review your stored records, please reach out directly to our Grievance Officer:
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
                Ready for Solar Energy?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                Calculate your solar savings or book an on-site survey.
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/calculator"
                className="px-6 py-3 rounded-full bg-lime-400 text-forest-900 font-bold hover:bg-lime-300 transition-all text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <span>Solar Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
