"use client";

import Image from "next/image";
import { ShieldCheck, Filter, Droplet, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PuritySection() {
  const processSteps = [
    {
      icon: Filter,
      title: "Multi-Stage Reverse Osmosis",
      description:
        "High-density filtration membranes effectively reduce total dissolved impurities, silt, and heavy minerals from raw water.",
    },
    {
      icon: Droplet,
      title: "UV Microbial Barrier",
      description:
        "Intense Ultraviolet treatment acts as a clean physical barrier, targeting microorganisms without harsh chemical residues.",
    },
    {
      icon: Sparkles,
      title: "Alkaline & Mineral Balance",
      description:
        "Post-filtration remineralization helps balance pH levels, imparting a naturally crisp, light, and refreshing drinking taste.",
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Jar Sanitization",
      description:
        "Every 20-litre container undergoes high-pressure hygienic rinsing and is fitted with a secure, single-use tamper-evident seal.",
    },
  ];

  return (
    <section id="purity" className="py-24 lg:py-32 bg-[#182329] text-white relative overflow-hidden">
      {/* Ambient water highlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#087EAA]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F07824]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Process Explanation */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="badge-pill bg-[#202D34] text-[#E0F4FA] border border-[#2D3E47] mb-4">
              <Droplet className="w-3.5 h-3.5 text-[#087EAA]" />
              <span>Purification &amp; Quality Handling</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance mb-6">
              Everyday Hydration <br />
              <span className="text-[#087EAA]">Deserves Attention.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 font-normal">
              Drinking water is consumed multiple times every day by your family, guests, or team members.
              At Om Sai Aqua, we maintain disciplined purification and container-handling routines to ensure
              every drop delivered to your address is clean, fresh, and consistent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-[#202D34] border border-[#2D3E47] flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#087EAA]/25 flex items-center justify-center text-[#E0F4FA] mb-3">
                      <IconComponent className="w-5 h-5 text-[#087EAA]" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Purification Plant Facility Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-[#2D3E47] shadow-[0_20px_50px_rgba(8,126,170,0.25)] aspect-[4/3] sm:aspect-[16/11]"
            >
              <Image
                src="/images/purification-plant.jpg"
                alt="Om Sai Aqua industrial stainless steel RO and UV drinking water purification equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182329]/90 via-[#182329]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#202D34]/90 backdrop-blur-md border border-[#2D3E47]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087EAA] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#087EAA]" />
                  <span>Disciplined Quality Control</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80">
                  Continuous monitoring of pressure, flow rates, and membrane integrity throughout the purification sequence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
