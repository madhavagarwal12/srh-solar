"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenQuote?: () => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Calculator", href: "/calculator" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-3 sm:px-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
        
        {/* Brand Logo Capsule */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2.5 bg-forest-950/90 backdrop-blur-md border border-white/15 px-3.5 sm:px-4 py-2 rounded-full shadow-xl group hover:border-lime-400/50 transition"
        >
          <img
            src="/assets/images/srhlogo.png"
            alt="SRH Solar"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-lime-400 transition leading-none">
              SRH <span className="text-lime-400 font-extrabold">SOLAR</span>
            </span>
            <span className="text-[9px] text-white/50 tracking-wider uppercase leading-none mt-0.5">
              Green Energy
            </span>
          </div>
        </Link>

        {/* Center Pill Menu (Desktop) */}
        <nav className="hidden md:flex pointer-events-auto items-center gap-1 bg-forest-950/90 backdrop-blur-lg border border-white/15 px-3 py-1.5 rounded-full shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? "bg-white/15 text-lime-400 font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Hamburger Toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => {
              if (onOpenQuote) onOpenQuote();
              else window.location.href = "/contact";
            }}
            className="group flex items-center gap-2 bg-white text-forest-950 font-extrabold text-xs pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 py-1.5 rounded-full shadow-xl hover:bg-lime-400 transition duration-300"
          >
            <span className="hidden xs:inline sm:inline">Get Free Quote</span>
            <span className="xs:hidden sm:hidden">Quote</span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-forest-950 text-white flex items-center justify-center text-xs group-hover:bg-forest-900 group-hover:rotate-45 transition duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-forest-950/90 border border-white/20 text-white flex items-center justify-center hover:text-lime-400 transition"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-20 left-3 right-3 z-40 bg-forest-950/95 backdrop-blur-xl border border-white/15 rounded-3xl p-5 shadow-2xl space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? "bg-lime-400/15 text-lime-400 font-bold"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenQuote) onOpenQuote();
                else window.location.href = "/contact";
              }}
              className="w-full bg-lime-400 text-forest-950 font-extrabold py-3 rounded-full text-center text-sm shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2"
            >
              <span>Book Free Roof Survey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
