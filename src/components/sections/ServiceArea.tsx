"use client";

import Link from "next/link";
import { MapPin, Navigation, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ServiceArea() {
  const localities = [
    { name: "Vishrantwadi Circle & Market", status: "Active Daily Routes" },
    { name: "Dhanori Road & Anand Park", status: "Primary Base Route" },
    { name: "Mohanwadi & Pratik Nagar Vicinity", status: "Scheduled Morning Runs" },
    { name: "Tingre Nagar (Adjacent Sectors)", status: "Active Delivery" },
    { name: "Kalas Road (Nearby Societies)", status: "Active Delivery" },
    { name: "Alandi Road (Bordering Pockets)", status: "Confirm by Phone" },
  ];

  return (
    <section id="service-area" className="py-24 lg:py-32 bg-[#F4F8F9] border-t border-[#E2EDF0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Geographic Focus Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="badge-pill bg-white text-[#087EAA] border border-[#E2EDF0] mb-4">
              Local Delivery Radius
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] tracking-tight leading-[1.15] text-balance mb-6">
              Serving Vishrantwadi, Dhanori &amp;{" "}
              <span className="text-[#087EAA]">Nearby Pune 411015.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5E6E77] leading-relaxed mb-8">
              To guarantee consistent on-time delivery without delays, Om Sai Aqua deliberately maintains
              focused routes around Vishrantwadi and Dhanori Road. We do not over-extend across all of Pune,
              which ensures that your water arrives reliably when scheduled.
            </p>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2EDF0] shadow-xs w-full mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F4FA] flex items-center justify-center text-[#087EAA] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E77]">
                    Operational Facility Address
                  </div>
                  <div className="text-base font-bold text-[#182329] mt-0.5">
                    {SITE_CONFIG.address.full}
                  </div>
                  <div className="text-xs text-[#5E6E77] mt-1">
                    PIN Code: 411015 · Pune, Maharashtra
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#087EAA] hover:bg-[#065F80] text-white font-bold text-sm shadow-md transition-all duration-200"
              >
                <span>Check Delivery Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E2EDF0] text-[#182329] font-bold text-sm hover:border-[#087EAA]/40 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#F07824]" />
                <span>Call {SITE_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Locality Network Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2EDF0] shadow-lg relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#EBF2F4] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E0F4FA] text-[#087EAA] flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-[#087EAA]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#182329]">Active Route Coverage</h3>
                    <p className="text-xs text-[#5E6E77]">Pune 411015 Delivery Radius</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32]">
                  Daily Active
                </span>
              </div>

              {/* Localities List */}
              <div className="space-y-3.5">
                {localities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4F8F9] hover:bg-[#E0F4FA]/60 transition-colors border border-transparent hover:border-[#087EAA]/20"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#087EAA] shrink-0" />
                      <span className="text-sm font-semibold text-[#182329]">{item.name}</span>
                    </div>
                    <span className="text-xs font-medium text-[#5E6E77]">{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <p className="text-xs text-[#5E6E77] mt-6 text-center italic">
                Live outside these immediate localities? Contact us to verify route feasibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
