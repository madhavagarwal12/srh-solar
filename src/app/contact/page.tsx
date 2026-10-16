"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeadingReveal } from "@/components/HeadingReveal";
import { COMPANY_DETAILS } from "@/data/siteData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
  Building2,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Jaipur",
    systemType: "On-Grid Residential (Net-Metered)",
    monthlyBill: "₹ 3,000 - ₹ 6,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello SRH Solar! I am interested in a solar site survey for my property in ${formData.city}. Monthly bill approx: ${formData.monthlyBill}.`
    );
    window.open(`https://wa.me/919602609608?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-forest-900 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24">
        
        {/* HEADER SECTION */}
        <section className="px-4 sm:px-12 lg:px-20 pb-12 max-w-7xl mx-auto text-left relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-lime-400"></span>
            <span className="text-xs font-extrabold tracking-[0.25em] text-lime-400 uppercase">
              Get In Touch With Certified Engineers
            </span>
          </div>

          <HeadingReveal as="h1" className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]">
            LET&apos;S TALK SOLAR FOR YOUR ROOF.
          </HeadingReveal>

          <p className="text-white/70 text-base sm:text-lg max-w-3xl mt-6 leading-relaxed">
            Have questions about system sizing, PM Surya Ghar subsidies, or agricultural water pumps? Reach out to our Jaipur engineering office or book a free on-site survey.
          </p>
        </section>

        {/* MAIN CONTACT GRID */}
        <section className="px-4 sm:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 text-left">
            
            {/* Form Column (Left 7 cols) */}
            <div className="lg:col-span-7 bg-forest-950/80 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
              
              {!submitted ? (
                <>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                      Request Free Site Survey &amp; 3D Proposal
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">
                      Fill out your property details below and our team will get in touch within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Meena"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">WhatsApp Mobile</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9602609608"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="e.g. yourname@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">City / District in Rajasthan</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mansarovar, Jaipur"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">Desired Solar Solution</label>
                        <select
                          value={formData.systemType}
                          onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                        >
                          <option>On-Grid Residential (Net-Metered)</option>
                          <option>Off-Grid Farmhouse / Battery Setup</option>
                          <option>Hybrid Solar System</option>
                          <option>Solar Water Pump (Agriculture)</option>
                          <option>Commercial / Industrial EPC (10kW - 1MW+)</option>
                          <option>Solar Street Lighting</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white/80 block mb-1">Average Monthly Bill</label>
                        <select
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                          className="w-full bg-forest-900 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                        >
                          <option>₹ 1,500 - ₹ 3,000</option>
                          <option>₹ 3,000 - ₹ 6,000</option>
                          <option>₹ 6,000 - ₹ 12,000</option>
                          <option>₹ 12,000 - ₹ 25,000</option>
                          <option>₹ 25,000+ (Commercial/Industrial)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/80 block mb-1">Additional Notes / Roof Details (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. RCC flat roof with roughly 500 sq ft shadow-free area..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-forest-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-lime-400 text-forest-950 font-extrabold py-3.5 rounded-full hover:bg-lime-300 transition duration-300 text-sm shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2"
                    >
                      <span>Submit Survey Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">
                    Survey Request Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                    Thank you <strong>{formData.name}</strong>. Our technical engineering team in Mansarovar, Jaipur will contact you at <strong>{formData.phone}</strong> to confirm your address and schedule your site inspection.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleWhatsApp}
                      className="px-6 py-3 rounded-full bg-lime-400 text-forest-950 font-bold text-xs hover:bg-lime-300 transition flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat with Engineer on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Contact Details & Direct Connect (Right 5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct WhatsApp Callout */}
              <div className="p-6 sm:p-8 rounded-3xl bg-lime-400 text-forest-950 space-y-4 shadow-xl">
                <span className="text-xs font-black uppercase tracking-wider block text-forest-900/80">
                  Instant Support
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  Need an Immediate Quotation?
                </h4>
                <p className="text-xs sm:text-sm text-forest-900 leading-relaxed font-medium">
                  Chat directly with our senior solar engineer on WhatsApp for instant sizing recommendations and subsidy eligibility.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-forest-950 text-white font-extrabold py-3 rounded-full hover:bg-forest-900 transition flex items-center justify-center gap-2 text-xs"
                >
                  <MessageSquare className="w-4 h-4 text-lime-400" />
                  <span>Open WhatsApp Direct Chat</span>
                </button>
              </div>

              {/* Office Details Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-forest-950/80 border border-white/10 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-lime-400 block">
                  Registered Headquarters
                </span>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block font-semibold">{COMPANY_DETAILS.legalName}</strong>
                      <span className="text-white/60">{COMPANY_DETAILS.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block font-semibold">Direct Phone Inquiries</strong>
                      <span className="text-white/60 font-mono">
                        {COMPANY_DETAILS.phoneNumbers.join(" / ")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block font-semibold">Official Email</strong>
                      <span className="text-white/60 font-mono">{COMPANY_DETAILS.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block font-semibold">Operating Hours</strong>
                      <span className="text-white/60">Mon – Sat: 9:00 AM – 7:00 PM (IST)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
