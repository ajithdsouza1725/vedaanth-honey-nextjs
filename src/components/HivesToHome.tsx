"use client";

import { motion } from "framer-motion";
import { FadeUp, SlideLeft, StaggerContainer, StaggerChild } from "./animations";

const steps = [
  {
    num: "01",
    title: "Harvest",
    desc: "We gently collect honey from our own hives in the Chitradurga hills, without harming the bees.",
  },
  {
    num: "02",
    title: "Filter (Minimally)",
    desc: "Lightly strained to remove wax — never micro-filtered, so the pollen and goodness stay in.",
  },
  {
    num: "03",
    title: "Test",
    desc: "Every batch is checked for purity, so what you get is 100% real honey.",
  },
  {
    num: "04",
    title: "Deliver Fresh",
    desc: "Bottled raw and shipped straight to your door across Karnataka.",
  },
];

export default function HivesToHome() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden" id="hives">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-8 lg:gap-10">
          {/* Left — Heading */}
          <SlideLeft className="w-full md:w-[320px] shrink-0">
            <div className="bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none p-5 md:p-0">
              <h2 className="font-heading text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-black leading-tight text-center md:text-left">
                FROM OUR
                <br />
                <span className="text-honey">HIVES</span> TO
                <br />
                YOUR HOME
              </h2>
              <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-xs text-center md:text-left mx-auto md:mx-0">
                We follow sustainable beekeeping practices to ensure the highest
                quality honey while protecting our bees and nature.
              </p>
              <div className="text-center md:text-left">
                <a
                  href="#story"
                  className="inline-block mt-4 px-7 py-3 bg-white border-2 border-black text-black font-bold text-xs rounded-full hover:bg-honey hover:border-honey transition-colors tracking-[0.12em]"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </SlideLeft>

          {/* Right — Process steps */}
          <FadeUp delay={0.1} className="flex-1 w-full pt-0 md:pt-6">
            <div className="bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none p-4 md:p-0">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {steps.map((s) => (
                  <StaggerChild key={s.num}>
                    <div className="text-center group">
                      <motion.div
                        whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(255,176,0,0.3)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-honey/20 flex items-center justify-center mx-auto mb-3 shadow-sm"
                      >
                        <span className="text-honey font-heading font-extrabold text-lg sm:text-xl">{s.num}</span>
                      </motion.div>
                      <h3 className="font-bold text-[11px] md:text-xs text-black tracking-wide mb-1">{s.title}</h3>
                      <p className="text-[10px] md:text-xs text-black/60 leading-relaxed max-w-[140px] mx-auto">
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
