"use client";

import { PhoneCall, MapPin, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Contact Om Sai Aqua",
      description: `Call us directly at ${SITE_CONFIG.phonePrimary} or submit the quick inquiry form with your contact details.`,
    },
    {
      step: "02",
      icon: MapPin,
      title: "Share Location & Cans Needed",
      description:
        "Tell us your society name in Vishrantwadi or Dhanori and whether you require daily 20L jars, office supply, or bulk event cans.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Confirm & Receive Delivery",
      description:
        "We confirm your delivery schedule and drop off sanitized, sealed 20-litre jars directly at your doorstep or facility.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="badge-pill bg-[#E0F4FA] text-[#087EAA] mb-4">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182329] tracking-tight leading-[1.15] text-balance">
            How to Set Up Your Water Jar Delivery.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6E77] mt-4">
            No complex app sign-ups or subscription locks. Simple, personal, and dependable local service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-[#F4F8F9] border border-[#E2EDF0] flex flex-col justify-between relative group hover:bg-white hover:border-[#087EAA]/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold text-[#087EAA]/30 group-hover:text-[#087EAA] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2EDF0] flex items-center justify-center text-[#182329] group-hover:bg-[#087EAA] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#182329] mb-3 group-hover:text-[#087EAA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5E6E77] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2EDF0]/60">
                  <span className="text-xs font-semibold text-[#087EAA]">
                    Step {item.step} of 03
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
