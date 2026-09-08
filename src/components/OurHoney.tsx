"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

const products = [
  { name: "RAW HONEY", weight: "500 g", price: "\u20B9599", tag: "BESTSELLER", badge: "Multifloral", img: "/images/logo/jar-front-white.png" },
  { name: "RAW HONEY", weight: "500 g", price: "\u20B9599", tag: null, badge: "Unpasteurized", img: "/images/logo/jar-angle-white.png" },
  { name: "RAW HONEY", weight: "500 g", price: "\u20B9599", tag: null, badge: "Unfiltered", img: "/images/logo/jar-front-dark.png" },
  { name: "RAW HONEY", weight: "500 g", price: "\u20B9599", tag: null, badge: "Unprocessed", img: "/images/logo/jar-angle-dark.png" },
];

export default function OurHoney() {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden" id="shop">
      {/* Mobile: subtle accents (parent has section-bg-2 image) */}
      <div className="md:hidden absolute -top-4 right-0 w-20 h-20 rounded-full bg-white/20 blur-xl animate-float-blob pointer-events-none" />
      <div className="md:hidden absolute bottom-8 -left-4 w-24 h-24 rounded-full bg-white/15 blur-2xl animate-float-blob-reverse pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <FadeUp className="text-center mb-8">
          <h2 className="font-heading text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black tracking-wide">
            OUR RAW HONEY
          </h2>
          <p className="text-sm text-black/70 mt-3 font-medium">Unpasteurized · Unprocessed · Unfiltered · Multifloral Honey</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {products.map((p) => (
            <StaggerChild key={p.badge}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(255,176,0,0.18)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white rounded-3xl overflow-hidden group cursor-pointer relative border border-honey/15 shadow-sm"
              >
                {p.tag && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold px-3 py-1 rounded-full z-10 text-black bg-honey shadow-md tracking-wider">
                    {p.tag}
                  </span>
                )}

                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-honey/5 rounded-t-3xl">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-700 p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="font-bold text-[10px] sm:text-xs text-black tracking-widest group-hover:text-honey transition-colors leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-black/70 mt-1">{p.weight} · {p.badge}</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="text-lg sm:text-xl font-heading font-bold text-black">{p.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-honey text-black rounded-full flex items-center justify-center hover:bg-honey-amber transition-colors shadow-md"
                      aria-label={`Add ${p.name} to cart`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center px-10 py-3.5 bg-white border-2 border-black text-black font-bold text-[13px] rounded-full hover:bg-honey hover:border-honey transition-all tracking-[0.12em]"
          >
            VIEW ALL PRODUCTS
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
