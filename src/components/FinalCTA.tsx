"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./animations";

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16 bg-honey relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <FadeUp>
          <h2 className="font-heading text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px] font-extrabold text-black tracking-wide leading-tight">
            TASTE REAL HONEY —<br />STRAIGHT FROM OUR HIVES
          </h2>
          <p className="mt-4 text-black/60 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Once you&apos;ve had honey this pure, there&apos;s no going back. Order today and taste the difference raw, single-origin honey makes.
          </p>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-9 py-4 bg-black text-white font-bold text-sm rounded-full hover:bg-black/80 transition-all tracking-[0.12em]"
          >
            ORDER FRESH HONEY
          </motion.a>
          <motion.a
            href="https://wa.me/919649641558?text=Hi%2C%20I%20want%20to%20order%20Vedaanth%20Honey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-white/90 transition-all tracking-[0.12em]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ORDER ON WHATSAPP
          </motion.a>
        </FadeUp>
      </div>
    </section>
  );
}
