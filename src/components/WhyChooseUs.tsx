"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

const features = [
  {
    title: "100% PURE",
    desc: "Unadulterated raw honey, just as nature intended.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 14v-6" />
        <path d="M20 18l-4-4" />
        <path d="M28 18l4-4" />
        <path d="M24 34v4" />
      </svg>
    ),
  },
  {
    title: "RAW & UNHEATED",
    desc: "Retains natural enzymes, pollen & nutrients.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8c-4 6-10 10-10 18a10 10 0 0020 0c0-8-6-12-10-18z" />
        <path d="M24 26v6" />
        <path d="M20 30l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "FROM TRUSTED HIVES",
    desc: "Ethically sourced from local, healthy bee farms.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6h12l-6 18z" />
        <path d="M12 24h24" />
        <path d="M15 24v14a5 5 0 005 5h8a5 5 0 005-5V24" />
      </svg>
    ),
  },
  {
    title: "CHEMICAL FREE",
    desc: "No additives, no preservatives, no artificial colors.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6h12v12l6 12a4 4 0 01-3.5 6h-17A4 4 0 0112 30l6-12V6z" />
        <path d="M18 6h12" />
        <circle cx="22" cy="32" r="2" fill="#FFB000" opacity="0.3"/>
        <circle cx="28" cy="28" r="1.5" fill="#FFB000" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "RICH IN NUTRIENTS",
    desc: "Packed with antioxidants, vitamins & minerals.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="14" />
        <path d="M18 18l12 12" strokeWidth="2" />
        <path d="M20 28c2 2 6 2 8 0" />
      </svg>
    ),
  },
  {
    title: "MADE WITH CARE",
    desc: "Every batch is crafted with love & responsibility.",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#FFB000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l16 10v20L24 44 8 34V14z" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 18v-6" />
        <path d="M24 30v6" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden" id="why">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <FadeUp className="text-center mb-8">
          <h2 className="font-heading text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black tracking-wide">
            WHY FAMILIES CHOOSE US
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {features.map((f) => (
            <StaggerChild key={f.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(255,176,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-center group cursor-pointer border border-honey/15 h-full hover:border-honey/40"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex items-center justify-center mb-4"
                >
                  {f.icon}
                </motion.div>
                <h3 className="font-bold text-[11px] md:text-xs text-black mb-2 tracking-[0.1em] leading-tight">
                  {f.title}
                </h3>
                <p className="text-[11px] text-black/70 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
