"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#182329] text-white border-t border-[#2D3E47] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2D3E47]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Official Logo on Clean White Rounded Plaque */}
            <Link href="#hero" className="inline-block p-2 rounded-2xl bg-white shadow-md mb-5 group">
              <div className="relative h-12 w-44">
                <Image
                  src={SITE_CONFIG.logo}
                  alt="Om Sai Aqua Logo"
                  fill
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-200"
                  sizes="180px"
                />
              </div>
            </Link>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed mb-6">
              Dedicated 20-litre drinking water jar supply and doorstep delivery service.
              Delivering clean, balanced RO + UV hydration to homes, offices, and events across
              Vishrantwadi, Dhanori Road, and neighboring Pune communities.
            </p>

            <div className="text-xs text-white/60">
              Proprietor: <strong className="text-white font-semibold">{SITE_CONFIG.owner}</strong>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#087EAA] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 text-white/50"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#087EAA] mb-4">
              Direct Contact &amp; Dispatch
            </h4>
            <ul className="space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F07824] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                    className="text-white font-bold hover:text-[#087EAA] transition-colors block text-base"
                  >
                    {SITE_CONFIG.phonePrimary} (Primary)
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phoneSecondaryRaw}`}
                    className="text-white/80 hover:text-[#087EAA] transition-colors block mt-0.5"
                  >
                    {SITE_CONFIG.phoneSecondary} (Alternate / WhatsApp)
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#087EAA] shrink-0 mt-0.5" />
                <span className="text-white/80 leading-snug">
                  {SITE_CONFIG.address.full}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#087EAA] shrink-0" />
                <span className="text-white/80">{SITE_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Agency Attribution Section */}
        <div className="py-6 border-b border-[#2D3E47]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>Developed by</span>
            <a
              href="https://goldspade.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-[#087EAA] transition-colors underline underline-offset-4 decoration-[#087EAA]/40 hover:decoration-[#087EAA]"
            >
              Goldspade
            </a>
            <span className="text-white/40">·</span>
            <span>In association with</span>
            <a
              href="https://abtechservices.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-[#087EAA] transition-colors underline underline-offset-4 decoration-[#087EAA]/40 hover:decoration-[#087EAA]"
            >
              ABtech
            </a>
          </div>
          <div className="text-white/50 text-[11px]">
            Pune Drinking Water Supply Platform
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            &copy; {currentYear} Om Sai Aqua. All rights reserved. Registered drinking-water supplier in Vishrantwadi, Pune.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <span>Pune, Maharashtra 411015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
