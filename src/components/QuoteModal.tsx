"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/siteData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCapacity?: number;
}

export function QuoteModal({ isOpen, onClose, defaultCapacity }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Jaipur",
    propertyType: "Residential Rooftop",
    monthlyBill: "₹ 4,000 - ₹ 6,000",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SRH Solar Team! I would like to book a free rooftop survey for my property in ${formData.city}. My monthly bill is approx ${formData.monthlyBill}.`
    );
    window.open(`https://wa.me/919602609608?text=${text}`, "_blank");
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-forest-950/85 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-forest-900 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-white"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-[2px] bg-lime-400"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                      SRH Solar EPC • Free Site Visit
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    Book Free Roof Survey
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">
                    Certified engineers will assess roof shading, calculate your DISCOM subsidy, and provide a 3D simulation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-white/80 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-forest-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-white/80 block mb-1">WhatsApp Mobile</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9602609608"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-forest-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/80 block mb-1">City / District</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mansarovar, Jaipur"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-forest-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 placeholder-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-white/80 block mb-1">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-forest-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                      >
                        <option>Residential Rooftop (Home/Villa)</option>
                        <option>Commercial / Industrial (10kW - 100kW+)</option>
                        <option>Agricultural (Solar Water Pump)</option>
                        <option>Off-Grid Farmhouse Setup</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/80 block mb-1">Monthly Bill</label>
                      <select
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full bg-forest-950 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400"
                      >
                        <option>₹ 1,500 - ₹ 3,000</option>
                        <option>₹ 3,000 - ₹ 6,000</option>
                        <option>₹ 6,000 - ₹ 12,000</option>
                        <option>₹ 12,000 - ₹ 25,000</option>
                        <option>₹ 25,000+ (Commercial)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-400 text-forest-950 font-extrabold py-3.5 rounded-full hover:bg-lime-300 transition duration-300 text-sm mt-3 shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2"
                  >
                    <span>Request Free Site Visit &amp; Subsidy Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>Or connect instantly via WhatsApp:</span>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="text-lime-400 font-semibold hover:underline flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Us Directly</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white">Thank You, {formData.name}!</h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto">
                  Your roof survey request for <strong>{formData.city}</strong> has been logged. An SRH Solar engineer will call you at <strong>{formData.phone}</strong> within 24 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-lime-400 text-forest-950 text-xs font-bold hover:bg-lime-300 transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={resetAndClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
