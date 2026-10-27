"use client";

import { Phone, MapPin, UserCheck, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: MapPin,
      title: "Hyper-Local Coverage",
      description:
        "Based directly in Anand Park, Vishrantwadi. Delivery routes are planned within minutes of your locality, ensuring fast fulfillment without transit delays.",
    },
    {
      icon: UserCheck,
      title: "Direct Supplier Access",
      description:
        "No automated call centers or third-party delivery confusion. You speak directly with Deepak Khatave and our dedicated team for custom schedules.",
    },
    {
      icon: Shield,
      title: "Sealed 20L Food-Grade Cans",
      description:
        "Every water can is thoroughly inspected, sanitized, and sealed. We replace damaged or worn jars proactively to uphold strict hygiene standards.",
    },
    {
      icon: Clock,
      title: "Consistent Daily Deliveries",
      description:
        "Whether you need one jar every other morning for your home or ten jars daily for your office pantry, our scheduled runs keep you stocked.",
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Strong Headline & Core Promise */}
          <div className="lg:col-span-5 sticky top-28">
            <span className="badge-pill bg-[#E0F4FA] text-[#087EAA] mb-4">
              Local Reliability
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] tracking-tight leading-[1.15] text-balance mb-6">
              Dependable Service.
              <br />
              <span className="text-[#087EAA]">Direct Communication.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5E6E77] leading-relaxed mb-8">
              We focus on one geographic area and do it right. By serving Vishrantwadi, Dhanori Road,
              and nearby Pune societies directly, we eliminate middleman markups and erratic delivery windows.
            </p>

            <div className="p-6 rounded-2xl bg-[#F4F8F9] border border-[#E2EDF0] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#087EAA] text-white flex items-center justify-center font-bold text-sm">
                  DK
                </div>
                <div>
                  <div className="text-sm font-bold text-[#182329]">{SITE_CONFIG.owner}</div>
                  <div className="text-xs text-[#5E6E77]">Proprietor · Om Sai Aqua</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#182329]/80 italic">
                &ldquo;Our focus has always been simple: clean water, punctual delivery, and treating every neighborhood customer with personal attention.&rdquo;
              </p>
              <a
                href={`tel:${SITE_CONFIG.phonePrimaryRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#087EAA] hover:text-[#065F80] hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-[#F07824]" />
                <span>Call Deepak Khatave: {SITE_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Strategic Differentiators with editorial styling */}
          <div className="lg:col-span-7 space-y-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#F4F8F9] border border-[#E2EDF0] hover:border-[#087EAA]/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2EDF0] flex items-center justify-center text-[#087EAA] shrink-0 group-hover:bg-[#087EAA] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#182329] mb-2 group-hover:text-[#087EAA] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5E6E77] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
