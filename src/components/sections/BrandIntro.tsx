"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandIntro() {
  const points = [
    "Dedicated 20-litre water-can distribution across Vishrantwadi and Dhanori Road.",
    "Carefully managed multi-stage RO and UV purification for clean, crisp hydration.",
    "Direct owner accessibility with prompt local dispatch by Deepak Khatave and team.",
    "Flexible supply arrangements for residential flats, commercial shops, and event banquets.",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#E2EDF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Authentic Imagery Left Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(8,126,170,0.08)] border border-[#E2EDF0] aspect-[4/3] sm:aspect-[16/11]"
            >
              <Image
                src="/images/pure-hydration.jpg"
                alt="Pure refreshing drinking water poured smoothly into a crystal clear glass"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E0F4FA]">
                  Hygiene &amp; Refreshment
                </span>
                <p className="text-sm font-medium text-white/90 mt-1">
                  Balanced mineral hydration suited for daily cooking and drinking.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content Right Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="badge-pill bg-[#E0F4FA] text-[#087EAA] mb-4">
              Local Drinking Water Specialist
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] leading-[1.15] text-balance mb-6">
              Water for Everyday Life.
              <br />
              <span className="text-[#087EAA]">Service You Can Rely On.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5E6E77] leading-relaxed mb-6 font-normal">
              Clean, reliable drinking water shouldn&apos;t require daily uncertainty. Om Sai Aqua operates
              with a simple, focused commitment: delivering hygienically handled, balanced 20-litre drinking water cans
              directly to homes, commercial establishments, and event venues across Vishrantwadi and surrounding Pune localities.
            </p>

            <div className="space-y-3.5 mb-8 w-full">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#087EAA] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#182329]/90 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087EAA] hover:text-[#065F80] transition-colors group"
              >
                <span>View our available delivery services</span>
                <ArrowRight className="w-4 h-4 text-[#F07824] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
