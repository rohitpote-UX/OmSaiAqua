"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2.5 shadow-[0_4px_20px_rgba(8,126,170,0.08)] border-b border-[#E2EDF0]"
            : "bg-white/80 backdrop-blur-sm py-3.5 border-b border-[#E2EDF0]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Om Sai Aqua Logo */}
            <Link
              href="#hero"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087EAA] rounded-xl p-1 group"
            >
              <div className="relative h-11 w-36 sm:h-12 sm:w-44">
                <Image
                  src={SITE_CONFIG.logo}
                  alt="Om Sai Aqua - Drinking Water Jar Supplier"
                  fill
                  priority
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
                  sizes="(max-width: 640px) 150px, 180px"
                />
              </div>
              <div className="hidden xl:flex flex-col border-l border-[#E2EDF0] pl-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087EAA] leading-none">
                  Water Jar Supply
                </span>
                <span className="text-[10px] text-[#5E6E77] mt-0.5">
                  Vishrantwadi · Dhanori Rd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-semibold text-[#182329]/80 hover:text-[#087EAA] hover:bg-[#E0F4FA]/50 rounded-full transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Call for Delivery Primary Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#F07824] hover:bg-[#D96515] text-white text-sm font-bold shadow-md shadow-[#F07824]/20 hover:shadow-lg transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Order 20L Water</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="w-10 h-10 rounded-full bg-[#F07824] text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                aria-label={`Call ${SITE_CONFIG.phonePrimary}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-[#E0F4FA] flex items-center justify-center text-[#087EAA] hover:bg-[#D4EDF5] focus:outline-none focus:ring-2 focus:ring-[#087EAA]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E2EDF0] shadow-2xl lg:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5E6E77] pb-2 border-b border-[#E2EDF0]">
                <MapPin className="w-3.5 h-3.5 text-[#087EAA]" />
                <span>Serving Vishrantwadi, Dhanori & Nearby Areas</span>
              </div>

              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-2 text-base font-semibold text-[#182329] hover:text-[#087EAA] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#087EAA]/40" />
                </Link>
              ))}

              <div className="pt-4 border-t border-[#E2EDF0] flex flex-col gap-2.5">
                <a
                  href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F07824] text-white font-bold text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phonePrimary}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phoneSecondaryRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#087EAA] text-white font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Alt Support: {SITE_CONFIG.phoneSecondary}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
