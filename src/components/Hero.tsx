"use client";

import { motion } from "framer-motion";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const heroChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};


export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* ── Mobile layout ── */}
      <div className="md:hidden relative min-h-screen">
        {/* Background image — fills entire section, no distortion */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/mobile/homebackgroundmobile.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Top gradient so text reads clearly over image */}
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-[1]" />

        <div className="px-6 pt-[72px] pb-4 relative z-10">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Top badge */}
            <motion.div variants={heroChild} className="inline-flex items-center gap-1.5 px-3 py-1 bg-honey/10 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-honey animate-pulse" />
              <span className="text-[9px] font-semibold text-black/70 tracking-widest uppercase">Farm Fresh · 100% Natural</span>
            </motion.div>

            <motion.div variants={heroChild}>
              <h1 className="font-heading text-[44px] leading-[0.95] tracking-tight">
                <span className="text-black block">Pure Raw</span>
                <span className="text-honey block">Honey</span>
              </h1>
            </motion.div>

            <motion.p variants={heroChild} className="mt-3 text-black/60 text-[13px] leading-relaxed font-medium">
              Unpasteurized · Unprocessed · Unfiltered
              <br />
              Zero Added Sugar · FSSAI Certified
            </motion.p>

            <motion.div variants={heroChild} className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-honey rounded-full shadow-lg shadow-honey/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4"/>
                <path d="M12 3c-1.3 0-2.4.84-2.82 2H6a2 2 0 00-2 2v13a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-3.18A3 3 0 0012 3z"/>
              </svg>
              <span className="text-[11px] font-bold text-black tracking-wide">LAB TESTED & CERTIFIED</span>
            </motion.div>

            <motion.div variants={heroChild} className="mt-4 flex flex-col gap-2.5 w-fit">
              <motion.a
                href="#shop"
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-honey text-black font-bold text-[12px] rounded-full btn-shine tracking-[0.08em] shadow-lg shadow-honey/25"
              >
                SHOP HONEY
              </motion.a>
              <motion.a
                href="#story"
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-honey text-black font-bold text-[12px] rounded-full tracking-[0.08em]"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-[1]" />
      </div>

      {/* ── Desktop: full background image ── */}
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
          <div className="max-w-xl">
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={heroChild}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-honey/10 backdrop-blur-sm rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
                <span className="text-[11px] font-semibold text-black tracking-widest uppercase">
                  Farm Fresh &bull; 100% Natural
                </span>
              </motion.div>

              <motion.h1 variants={heroChild} className="font-heading text-[66px] lg:text-[82px] xl:text-[96px] leading-[0.92] tracking-[0.02em]">
                <motion.span
                  className="text-black block"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Pure Raw
                </motion.span>
                <motion.span
                  className="text-honey block"
                  initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  Honey
                </motion.span>
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="mt-5 text-black/70 text-base max-w-90 leading-relaxed font-medium"
              >
                Unpasteurized · Unprocessed · Unfiltered
                <br />
                Zero Added Sugar · FSSAI Certified · Made in India
              </motion.p>

              {/* Lab Tested Badge */}
              <motion.div variants={heroChild} className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-honey rounded-full shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M12 3c-1.3 0-2.4.84-2.82 2H6a2 2 0 00-2 2v13a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-3.18A3 3 0 0012 3z"/>
                </svg>
                <span className="text-[13px] font-bold text-black tracking-wide">LAB TESTED & CERTIFIED</span>
              </motion.div>

              <motion.div variants={heroChild} className="mt-9 flex gap-4">
                <motion.a
                  href="#shop"
                  whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(255,176,0,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-3.5 bg-honey text-black font-bold text-[14px] rounded-full hover:bg-honey-amber transition-all btn-shine tracking-[0.08em] shadow-lg shadow-honey/25"
                >
                  SHOP HONEY
                </motion.a>
                <motion.a
                  href="#story"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-9 py-3.5 bg-white border-2 border-honey text-black font-bold text-[14px] rounded-full hover:bg-honey transition-all tracking-[0.08em]"
                >
                  LEARN MORE
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Bottom fade to hide image edge */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white to-transparent" />
      </div>

    </section>
  );
}
