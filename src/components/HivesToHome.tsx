"use client";

import { motion } from "framer-motion";
import { FadeUp, SlideLeft, StaggerContainer, StaggerChild } from "./animations";

const steps = [
  {
    desc: "Ethically sourced from healthy bee colonies",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l10 6v12l-10 6-10-6V12z" />
        <path d="M20 12l10 6" />
        <path d="M20 12L10 18" />
        <path d="M20 12v12" />
        <circle cx="20" cy="8" r="2" fill="#FFB000" />
        <path d="M16 4c2-2 6-2 8 0" />
      </svg>
    ),
  },
  {
    desc: "Hand harvested with care & hygiene",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c0-4 4-8 8-10 4 2 8 6 8 10v6c0 4-4 8-8 8s-8-4-8-8v-6z" />
        <path d="M16 26c2-2 6-2 8 0" />
        <path d="M20 12V6" />
        <path d="M18 20v4" />
        <path d="M22 20v4" />
      </svg>
    ),
  },
  {
    desc: "Raw, unfiltered & unprocessed",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4c-4 6-10 10-10 18a10 10 0 0020 0c0-8-6-12-10-18z" />
        <path d="M16 26c2 2 6 2 8 0" />
        <circle cx="20" cy="30" r="1.5" fill="#FFB000" />
      </svg>
    ),
  },
  {
    desc: "Delivered fresh to your doorstep",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="24" height="16" rx="4" />
        <path d="M26 20h8l4 6v4h-12" />
        <circle cx="10" cy="32" r="3" />
        <circle cx="32" cy="32" r="3" />
      </svg>
    ),
  },
];

export default function HivesToHome() {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden" id="hives">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-4 lg:gap-5">
          {/* Left — Heading & CTA */}
          <SlideLeft className="w-full md:w-[280px] shrink-0">
            <div className="bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none p-5 md:p-0">
              <h2 className="font-heading text-[26px] md:text-[34px] lg:text-[40px] font-bold text-black leading-tight text-center md:text-left">
                FROM OUR
                <br />
                <span className="text-honey">HIVES</span>{" "}
                TO
                <br />
                YOUR HOME
              </h2>
              <p className="mt-1 text-sm text-black/70 leading-relaxed max-w-xs text-center md:text-left mx-auto md:mx-0">
                We follow sustainable beekeeping practices to ensure the highest
                quality honey while protecting our bees and nature.
              </p>
              <div className="text-center md:text-left">
              <a
                href="#story"
                className="inline-block mt-3 px-7 py-3 bg-white border-2 border-black text-black font-bold text-xs rounded-full hover:bg-honey hover:border-honey transition-colors tracking-[0.12em]"
              >
                KNOW MORE
              </a>
              </div>
            </div>
          </SlideLeft>

          {/* Right — Process steps */}
          <FadeUp delay={0.1} className="flex-1 w-full pt-0 md:pt-10">
            <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none p-4 md:p-0">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
              {steps.map((s, i) => (
                <StaggerChild key={i}>
                  <div className="text-center group">
                    <motion.div
                      whileHover={{ scale: 1.15, boxShadow: "0 8px 30px rgba(255,176,0,0.3)", borderColor: "#FFB000" }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="w-20 h-20 rounded-full bg-white border-2 border-honey/20 flex items-center justify-center mx-auto mb-2 shadow-sm"
                    >
                      {s.icon}
                    </motion.div>
                    <p className="text-[11px] md:text-xs text-black/80 leading-relaxed max-w-[120px] mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerContainer>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
