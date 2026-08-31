"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

const areas = [
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Jayanagar",
  "Electronic City",
  "Manyata Tech Park",
  "& More",
];

export default function DeliverySection() {
  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden" id="delivery">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <FadeUp>
          <h2 className="font-heading text-[24px] md:text-[30px] lg:text-[38px] font-bold text-black tracking-wide max-w-2xl mx-auto">
            FRESH RAW HONEY DELIVERED ACROSS BANGALORE
          </h2>
        </FadeUp>

        <StaggerContainer className="flex flex-wrap justify-center gap-3 mt-6">
          {areas.map((area) => (
            <StaggerChild key={area}>
              <motion.span
                whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 25px rgba(255,176,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-honey/20 text-sm hover:border-honey transition-colors cursor-pointer shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB000">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="text-xs font-medium text-black">{area}</span>
              </motion.span>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,176,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3.5 bg-[#111] text-white font-bold text-xs rounded-full hover:bg-black transition-all tracking-[0.12em]"
          >
            CHECK DELIVERY IN YOUR AREA
          </motion.button>
        </FadeUp>
      </div>

      {/* Bangalore skyline silhouette */}
      <div className="mt-6 relative">
        <svg viewBox="0 0 1440 120" width="100%" height="120" preserveAspectRatio="none" className="block">
          <path
            d="M0 120 L0 80 L30 80 L30 65 L50 65 L50 55 L55 45 L60 35 L65 45 L70 55 L80 55 L80 60 L100 60 L100 50 L110 50 L110 35 L115 25 L120 35 L125 50 L140 50 L140 70 L170 70 L170 55 L185 55 L185 45 L190 30 L195 20 L200 30 L205 45 L215 45 L215 60 L240 60 L240 70 L280 70 L280 55 L290 55 L290 45 L295 35 L300 25 L305 35 L310 45 L320 45 L320 65 L360 65 L360 70 L400 70 L400 60 L415 60 L415 40 L420 25 L425 15 L430 25 L435 40 L445 40 L445 55 L460 55 L460 65 L500 65 L500 75 L540 75 L540 60 L555 60 L555 50 L560 35 L565 25 L570 35 L575 50 L585 50 L585 65 L620 65 L620 75 L660 75 L660 60 L675 60 L675 45 L680 30 L685 18 L690 30 L695 45 L705 45 L705 60 L730 60 L730 70 L770 70 L770 55 L785 55 L785 40 L790 28 L795 18 L800 28 L805 40 L815 40 L815 55 L840 55 L840 65 L880 65 L880 75 L920 75 L920 60 L935 60 L935 45 L940 30 L945 20 L950 30 L955 45 L965 45 L965 65 L1000 65 L1000 70 L1040 70 L1040 55 L1055 55 L1055 40 L1060 28 L1065 18 L1070 28 L1075 40 L1085 40 L1085 60 L1120 60 L1120 70 L1160 70 L1160 55 L1175 55 L1175 45 L1180 35 L1185 25 L1190 35 L1195 45 L1205 45 L1205 60 L1240 60 L1240 65 L1280 65 L1280 75 L1320 75 L1320 60 L1340 60 L1340 50 L1345 40 L1350 30 L1355 40 L1360 50 L1370 50 L1370 65 L1400 65 L1400 75 L1440 75 L1440 120 Z"
            fill="#FFB000"
            opacity="0.12"
          />
          <path
            d="M0 120 L0 90 L60 90 L60 80 L90 80 L90 70 L100 60 L110 70 L120 80 L150 80 L150 85 L200 85 L200 75 L220 75 L220 65 L230 50 L240 65 L250 75 L280 75 L280 85 L330 85 L330 75 L350 75 L350 65 L360 55 L370 65 L380 75 L420 75 L420 85 L470 85 L470 75 L490 75 L490 65 L500 52 L510 65 L520 75 L560 75 L560 85 L610 85 L610 75 L630 75 L630 65 L640 55 L650 65 L660 75 L700 75 L700 85 L750 85 L750 75 L770 75 L770 65 L780 52 L790 65 L800 75 L840 75 L840 85 L890 85 L890 75 L910 75 L910 65 L920 55 L930 65 L940 75 L980 75 L980 85 L1030 85 L1030 75 L1050 75 L1050 65 L1060 52 L1070 65 L1080 75 L1120 75 L1120 85 L1170 85 L1170 75 L1190 75 L1190 65 L1200 55 L1210 65 L1220 75 L1260 75 L1260 85 L1310 85 L1310 78 L1340 78 L1340 70 L1350 60 L1360 70 L1370 78 L1400 78 L1400 88 L1440 88 L1440 120 Z"
            fill="#FFB000"
            opacity="0.08"
          />
        </svg>
      </div>
    </section>
  );
}
