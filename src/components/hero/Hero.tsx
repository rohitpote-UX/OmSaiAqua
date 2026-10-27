"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, MapPin, Droplets, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#F4F8F9] overflow-hidden"
    >
      {/* Background fresh water ripple and ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E0F4FA] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#F07824]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Confident Editorial Water Supplier Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Local Service Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2EDF0] shadow-xs text-xs font-bold tracking-wider uppercase text-[#087EAA] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#087EAA] animate-pulse" />
              <span>OM SAI AQUA · 20L WATER JAR DELIVERY · PUNE 411015</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#182329] tracking-tight leading-[1.08] text-balance mb-6">
              Pure Hydration.
              <br />
              <span className="text-[#087EAA]">20L Water Jars</span>{" "}
              <span className="text-[#F07824]">Delivered.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#5E6E77] max-w-xl leading-relaxed mb-8 font-normal">
              Prompt, dependable drinking-water supply for homes, corporate offices, and commercial establishments across{" "}
              <strong className="text-[#182329] font-bold">Vishrantwadi, Dhanori Road</strong>,{" "}
              and nearby Pune societies. Sanitized food-grade jars with punctual doorstep delivery.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F07824] hover:bg-[#D96515] text-white font-bold text-base shadow-lg shadow-[#F07824]/25 hover:shadow-xl hover:shadow-[#F07824]/35 transition-all duration-200 active:scale-[0.99] group"
              >
                <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-200" />
                <span>Call to Order: {SITE_CONFIG.phonePrimary}</span>
              </a>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#E0F4FA]/50 text-[#182329] font-semibold text-base border border-[#E2EDF0] shadow-xs hover:border-[#087EAA]/40 transition-all duration-200"
              >
                <span>View Water Services</span>
                <ArrowRight className="w-4 h-4 text-[#087EAA]" />
              </Link>
            </div>

            {/* Direct Reassurances Strip */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 pt-6 border-t border-[#E2EDF0] w-full max-w-xl text-xs sm:text-sm text-[#5E6E77]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087EAA] shrink-0" />
                <span>Sanitized 20L Jars</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F07824] shrink-0" />
                <span>Local Vishrantwadi</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Droplets className="w-4 h-4 text-[#087EAA] shrink-0" />
                <span>RO + UV Balanced</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature 20L Water Can Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Editorial Container with Subtle Border and Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(8,126,170,0.12)] border border-[#E2EDF0] bg-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-water-jar.jpg"
                  alt="Om Sai Aqua 20-litre crystal purified drinking water jar on minimalist pedestal"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Information Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#087EAA]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Doorstep Delivery Active</span>
                    </div>
                    <div className="text-sm font-extrabold text-[#182329] mt-0.5">
                      Om Sai Aqua · Deepak Khatave
                    </div>
                    <div className="text-xs text-[#5E6E77] mt-0.5">
                      Dhanori Rd &amp; Vishrantwadi, Pune
                    </div>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                    className="w-11 h-11 rounded-full bg-[#F07824] hover:bg-[#D96515] text-white flex items-center justify-center transition-colors shadow-md shrink-0"
                    aria-label={`Call ${SITE_CONFIG.phonePrimary}`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Decorative water wave accent */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-[#087EAA]/15 -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
