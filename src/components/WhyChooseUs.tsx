"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

const features = [
  {
    title: "HARVESTED BY US",
    desc: "Every jar comes from our own hives in Chitradurga — never sourced from middlemen.",
    icon: "🍯",
  },
  {
    title: "RAW & NEVER HEATED",
    desc: "All natural enzymes, pollen, and antioxidants stay alive and intact.",
    icon: "🔥",
  },
  {
    title: "LAB-TESTED PURITY",
    desc: "Independently tested for purity and zero adulteration.",
    icon: "🧪",
  },
  {
    title: "SINGLE-ORIGIN",
    desc: "One farm, one region, small seasonal batches. Full traceability.",
    icon: "🌾",
  },
  {
    title: "FRESH TO YOUR DOOR",
    desc: "From our hills to your home in days — not months on a shelf.",
    icon: "🚚",
  },
  {
    title: "NOTHING ADDED",
    desc: "No sugar, no preservatives, no processing. Pure as the bees made it.",
    icon: "💛",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden" id="why">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <FadeUp className="text-center mb-8">
          <h2 className="font-heading text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-extrabold text-black tracking-wide">
            WHY KARNATAKA FAMILIES CHOOSE VEDAANTH NECTAR
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {features.map((f) => (
            <StaggerChild key={f.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(255,176,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-5 text-center group cursor-pointer border border-honey/15 h-full hover:border-honey/40"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{f.icon}</div>
                <h3 className="font-bold text-[9px] sm:text-[11px] md:text-xs text-black mb-1 sm:mb-2 tracking-[0.08em] leading-tight">
                  {f.title}
                </h3>
                <p className="text-[9px] sm:text-[11px] text-black/70 leading-snug sm:leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Trust logos row */}
        <FadeUp delay={0.2} className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
          {["FSSAI Licensed", "Lab-Tested", "100% Natural", "Made in Karnataka"].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 bg-honey/10 rounded-full text-[10px] sm:text-xs font-semibold text-black/70 tracking-wide">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB000"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
              {badge}
            </span>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
