"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

const areas = [
  "Whitefield", "Koramangala", "Indiranagar", "HSR Layout",
  "Jayanagar", "Electronic City", "Manyata Tech Park", "Marathahalli",
  "JP Nagar", "Bannerghatta", "& All of Bangalore",
];

export default function DeliverySection() {
  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden" id="delivery">
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-white via-cream to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <FadeUp>
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] font-extrabold text-black tracking-wide max-w-2xl mx-auto px-2">
            FRESH RAW HONEY DELIVERED ACROSS BANGALORE
          </h2>
          <p className="text-sm text-black/60 mt-3 max-w-lg mx-auto">
            We deliver pure, raw honey to homes all over Bangalore. Order in seconds on WhatsApp.
            <br />
            <span className="font-semibold text-black/80">Harvested in Chitradurga · Delivered fresh to your Bangalore doorstep.</span>
          </p>
        </FadeUp>

        <StaggerContainer className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-6">
          {areas.map((area) => (
            <StaggerChild key={area}>
              <motion.span
                whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 25px rgba(255,176,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white rounded-full border border-honey/20 text-sm hover:border-honey transition-colors cursor-pointer shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB000">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="text-xs font-medium text-black">{area}</span>
              </motion.span>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a
            href="https://wa.me/919649641558?text=Hi%2C%20I%20want%20to%20order%20Vedaanth%20Honey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37,211,102,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-bold text-xs rounded-full transition-all tracking-[0.12em]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ORDER ON WHATSAPP
          </motion.a>
          <motion.a
            href="tel:+919649641558"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#111] text-white font-bold text-xs rounded-full hover:bg-black transition-all tracking-[0.12em]"
          >
            CALL US
          </motion.a>
        </FadeUp>
      </div>

      {/* Desktop skyline */}
      <div className="mt-8 relative hidden md:block">
        <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none" className="block">
          <path d="M0 80 L0 50 L100 50 L120 30 L140 50 L300 50 L320 25 L340 50 L500 50 L520 35 L540 50 L700 50 L720 20 L740 50 L900 50 L920 30 L940 50 L1100 50 L1120 25 L1140 50 L1300 50 L1320 35 L1340 50 L1440 50 L1440 80 Z" fill="#FFB000" opacity="0.1" />
        </svg>
      </div>
    </section>
  );
}
