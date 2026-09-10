"use client";

import { motion } from "framer-motion";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const trustItems = [
  "100% Raw & Unheated",
  "Lab-Tested for Purity",
  "FSSAI Licensed",
  "Free Delivery in Karnataka",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* ── Mobile layout ── */}
      <div className="md:hidden relative min-h-screen">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/mobile/homebackgroundmobile.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-[1]" />

        <div className="px-6 pt-[72px] pb-4 relative z-10">
          <motion.div variants={heroStagger} initial="hidden" animate="visible">
            <motion.div variants={heroChild}>
              <h1 className="font-heading text-[28px] leading-[1.1] tracking-tight">
                <span className="text-black block">Pure Raw Honey in</span>
                <span className="text-black block">Karnataka —</span>
                <span className="text-honey block">Harvested in the</span>
                <span className="text-honey block">Chitradurga Hills</span>
              </h1>
            </motion.div>

            <motion.p variants={heroChild} className="mt-3 text-black/60 text-[13px] leading-relaxed font-medium max-w-[300px]">
              Straight from our own hives to your table. 100% raw, never heated, nothing added — just real honey the way nature made it.
            </motion.p>

            <motion.div variants={heroChild} className="mt-4 flex gap-2.5">
              <motion.a
                href="#shop"
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-honey text-black font-bold text-[11px] rounded-full btn-shine tracking-[0.08em] shadow-lg shadow-honey/25"
              >
                ORDER FRESH HONEY
              </motion.a>
              <motion.a
                href="#hives"
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-honey text-black font-bold text-[11px] rounded-full tracking-[0.08em]"
              >
                SEE HOW WE HARVEST →
              </motion.a>
            </motion.div>

            {/* Trust micro-row */}
            <motion.div variants={heroChild} className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {trustItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-1 text-[9px] font-semibold text-black/70">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="3"><path d="M9 12l2 2 4-4"/></svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-[1]" />
      </div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden md:block relative z-0"
        style={{
          backgroundImage: "url('/images/homebackgrounddesktop.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-32">
          <div className="max-w-2xl">
            <motion.div variants={heroStagger} initial="hidden" animate="visible">
              <motion.div
                variants={heroChild}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-honey/10 backdrop-blur-sm rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
                <span className="text-[11px] font-semibold text-black tracking-widest uppercase">
                  Single-Origin &bull; Chitradurga Hills
                </span>
              </motion.div>

              <motion.h1 variants={heroChild} className="font-heading text-[52px] lg:text-[64px] xl:text-[76px] leading-[0.95] tracking-tight">
                <span className="text-black block">Pure Raw Honey</span>
                <span className="text-black block">in Karnataka —</span>
                <span className="text-honey block">Harvested in the</span>
                <span className="text-honey block">Chitradurga Hills</span>
              </motion.h1>

              <motion.p variants={heroChild} className="mt-5 text-black/70 text-base max-w-lg leading-relaxed font-medium">
                Straight from our own hives to your table. 100% raw, never heated, nothing added — just real honey the way nature made it.
              </motion.p>

              <motion.div variants={heroChild} className="mt-7 flex gap-4">
                <motion.a
                  href="#shop"
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(255,176,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-3.5 bg-honey text-black font-bold text-[14px] rounded-full hover:bg-honey-amber transition-all btn-shine tracking-[0.08em] shadow-lg shadow-honey/25"
                >
                  ORDER FRESH HONEY
                </motion.a>
                <motion.a
                  href="#hives"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-3.5 bg-white border-2 border-honey text-black font-bold text-[14px] rounded-full hover:bg-honey transition-all tracking-[0.08em]"
                >
                  SEE HOW WE HARVEST →
                </motion.a>
              </motion.div>

              {/* Trust micro-row */}
              <motion.div variants={heroChild} className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {trustItems.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-black/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="3"><path d="M9 12l2 2 4-4"/></svg>
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
