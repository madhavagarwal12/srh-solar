"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_DETAILS, SERVICES_DATA } from "@/data/siteData";

export interface FooterProps {
  onOpenQuote?: () => void;
}

export function Footer({ onOpenQuote }: FooterProps = {}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest-950 text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-12 lg:px-20 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 sm:pb-16 border-b border-white/10">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/images/srhlogo.png"
              alt="SRH Solar"
              className="h-7 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                SRH <span className="text-lime-400 font-extrabold">SOLAR</span>
              </span>
              <span className="text-[9px] text-white/50 tracking-wider uppercase leading-none mt-0.5">
                {COMPANY_DETAILS.legalName}
              </span>
            </div>
          </div>
          
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
            People. Planet. Progress. We engineer clean, dependable solar systems to preserve our world and eliminate electricity bills.
          </p>

          <div className="text-xs text-white/80 space-y-2 pt-1 font-mono">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
              <span>{COMPANY_DETAILS.phoneNumbers.join(" / ")}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </p>
          </div>

          {/* Socials with SVG Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={COMPANY_DETAILS.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-forest-950 flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>
            <a
              href={COMPANY_DETAILS.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-forest-950 flex items-center justify-center transition"
              aria-label="Twitter X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={COMPANY_DETAILS.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-forest-950 flex items-center justify-center transition"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href={COMPANY_DETAILS.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-forest-950 flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-white block">Navigation</span>
          <ul className="text-xs text-white/60 space-y-2">
            <li><Link href="/" className="hover:text-lime-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-lime-400 transition">Solar Services</Link></li>
            <li><Link href="/calculator" className="hover:text-lime-400 transition">Solar Calculator</Link></li>
            <li><Link href="/blog" className="hover:text-lime-400 transition">Blog &amp; Insights</Link></li>
            <li><Link href="/contact" className="hover:text-lime-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="lg:col-span-3 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-white block">Our Solutions</span>
          <ul className="text-xs text-white/60 space-y-2">
            {SERVICES_DATA.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="hover:text-lime-400 transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter Box */}
        <div className="lg:col-span-3 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-white block">Stay Connected</span>
          <p className="text-white/60 text-xs">Subscribe for government subsidy alerts and solar insights.</p>
          
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs px-4 py-3 rounded-full focus:outline-none focus:border-lime-400 pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 w-8 h-8 rounded-full bg-lime-400 text-forest-950 flex items-center justify-center text-xs font-bold hover:bg-lime-300 transition"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="p-3 bg-lime-400/20 border border-lime-400/30 rounded-2xl text-lime-400 text-xs font-semibold">
              ✓ Subscribed! You will receive our monthly solar updates.
            </div>
          )}

          {/* Signature Handwritten Script */}
          <div className="pt-6 font-doodle text-2xl text-lime-300 select-none">
            Sustain. Conserve. Protect.
          </div>
        </div>

      </div>

      {/* Copyright Bar & Legal Links */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
        <span>© {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.</span>
        <div className="flex items-center gap-4 text-xs">
          <Link href="/privacy-policy" className="hover:text-lime-400 transition">
            Privacy Policy
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/terms" className="hover:text-lime-400 transition">
            Terms &amp; Conditions
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/calculator" className="hover:text-lime-400 transition">
            ROI Calculator
          </Link>
        </div>
      </div>
    </footer>
  );
}
