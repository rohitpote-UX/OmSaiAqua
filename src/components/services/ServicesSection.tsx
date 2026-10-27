"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, Check, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F4F8F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="badge-pill bg-white text-[#087EAA] border border-[#E2EDF0] mb-4">
            <Droplet className="w-3.5 h-3.5 text-[#087EAA]" />
            <span>Water Delivery &amp; Supply Services</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] tracking-tight leading-[1.15] text-balance">
            Tailored 20L Hydration for Every Setting.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6E77] mt-4 max-w-2xl leading-relaxed">
            From scheduled 20L cans at your apartment doorstep to organized bulk deliveries for large
            functions, Om Sai Aqua handles local Pune deliveries with care and punctuality.
          </p>
        </div>

        {/* Editorial Grid: Asymmetric 2x2 layout with distinct cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {SITE_CONFIG.services.map((service, index) => {
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} group rounded-3xl bg-white border border-[#E2EDF0] shadow-[0_4px_24px_rgba(8,126,170,0.05)] hover:shadow-[0_20px_45px_rgba(8,126,170,0.12)] hover:border-[#087EAA]/40 transition-all duration-300 flex flex-col overflow-hidden`}
              >
                {/* Visual Header Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#087EAA] shadow-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Quick Action icon button */}
                  <Link
                    href={`#contact`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#182329] group-hover:bg-[#F07824] group-hover:text-white transition-colors duration-200 shadow-xs"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#F07824] uppercase tracking-wider">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-[#182329] mt-1 mb-3 group-hover:text-[#087EAA] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5E6E77] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Specs Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#EBF2F4] mb-6">
                      {service.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#E0F4FA] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#087EAA]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#182329]/80 font-medium">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#EBF2F4]">
                    <a
                      href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#182329] hover:text-[#087EAA] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F07824]" />
                      <span>Order via Call ({SITE_CONFIG.phonePrimary})</span>
                    </a>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#087EAA] hover:text-[#F07824] transition-colors"
                    >
                      <span>Inquire Online</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
