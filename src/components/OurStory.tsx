"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "./animations";

const testimonials = [
  {
    text: "You can taste the difference. Thick, rich, and clearly pure. My kids love it.",
    name: "Customer",
    location: "Whitefield",
    rating: 5,
  },
  {
    text: "Did the water test — it passed. This is the real thing, not the sugar syrup you get in supermarkets.",
    name: "Customer",
    location: "Koramangala",
    rating: 5,
  },
  {
    text: "Ordered on WhatsApp, got it in two days. Lovely raw honey and great service.",
    name: "Customer",
    location: "HSR Layout",
    rating: 5,
  },
];

export default function OurStory() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);
  const t = testimonials[current];

  function go(next: number) {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="relative" id="story">
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* ── LEFT: Our Story ── */}
        <SlideLeft className="relative overflow-hidden bg-white md:bg-transparent">
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 flex items-center">
            <div className="max-w-lg mx-auto md:ml-36 lg:ml-52 md:bg-transparent md:p-0">
              <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] font-extrabold text-black md:text-white mb-4 md:mb-6">
                <span className="text-honey">OUR</span> STORY
              </h2>
              <p className="text-black/70 md:text-gray-300 text-sm leading-[1.9] mb-4">
                Vedaanth Nectar Honey started with a simple belief — that every family
                deserves access to real, pure honey. Our hives sit in the Chitradurga hills
                of Karnataka, where multifloral and forest blossoms give our honey its
                distinctive rich flavour.
              </p>
              <p className="text-black/70 md:text-gray-300 text-sm leading-[1.9] mb-6 md:mb-8">
                We harvest, filter minimally, test for purity, and deliver fresh — no middlemen,
                no processing, no shortcuts. Just honest honey, the way it should be.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 bg-honey text-black font-bold text-xs rounded-full hover:bg-honey-amber transition-colors tracking-[0.12em] btn-shine group"
              >
                LEARN MORE ABOUT US
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </SlideLeft>

        {/* ── RIGHT: Testimonials ── */}
        <SlideRight className="bg-white md:bg-transparent p-5 sm:p-8 md:p-12 lg:p-16 pt-8 md:pt-10 flex flex-col justify-start border-t border-honey/10 md:border-t-0">
          <div id="reviews" />
          <h2 className="font-heading text-[22px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-extrabold text-black mb-6 text-center">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <div className="relative max-w-md mx-auto">
            <button
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-honey/30 text-black/40 flex items-center justify-center hover:border-honey hover:text-honey transition-all z-10"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => go((current + 1) % testimonials.length)}
              className="absolute right-0 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-honey/30 text-black/40 flex items-center justify-center hover:border-honey hover:text-honey transition-all z-10"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex items-center gap-4 sm:gap-6 px-8 sm:px-12 min-h-40 sm:min-h-45">
              <div className="flex-1">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={current}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFB900">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-black/60 text-sm leading-[1.9] italic mb-4">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-black">
                      &ndash; {t.name}, {t.location}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="hidden sm:block relative w-24 h-28 shrink-0 rounded-2xl overflow-hidden opacity-80">
                <Image src="/images/logo/icon-dark.png" alt="" fill className="object-contain" sizes="96px" />
              </div>
            </div>

            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-7 h-2.5 bg-honey" : "w-2.5 h-2.5 bg-honey/20 hover:bg-honey/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
