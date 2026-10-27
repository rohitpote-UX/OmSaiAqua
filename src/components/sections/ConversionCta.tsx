"use client";

import Link from "next/link";
import { Phone, MessageSquare, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ConversionCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#087EAA] text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F07824]/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mb-6">
            <Droplets className="w-6 h-6 text-[#E0F4FA]" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance mb-6"
          >
            Need 20L Water Jars for Home or Office?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-10"
          >
            Let&apos;s arrange the right delivery schedule for your location in Vishrantwadi,
            Dhanori Road, or nearby Pune societies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F07824] hover:bg-[#D96515] text-white font-bold text-base shadow-xl transition-all duration-200 group active:scale-95"
            >
              <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>Call Om Sai Aqua: {SITE_CONFIG.phonePrimary}</span>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#E0F4FA] text-[#182329] font-bold text-base shadow-lg transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-[#087EAA]" />
              <span>Send an Inquiry</span>
            </Link>
          </motion.div>

          <div className="mt-8 text-xs sm:text-sm text-white/80 font-medium">
            Direct Delivery Lines: {SITE_CONFIG.phonePrimary} · {SITE_CONFIG.phoneSecondary}
          </div>
        </div>
      </div>
    </section>
  );
}
