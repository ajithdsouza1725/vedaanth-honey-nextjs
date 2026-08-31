"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "./animations";

const testimonials = [
  {
    text: "Absolutely loved the taste and purity. It's my go-to honey for my family now!",
    name: "Priya S.",
    rating: 5,
  },
  {
    text: "Best raw honey in Bangalore. My kids love it on their toast every morning!",
    name: "Rahul M.",
    rating: 5,
  },
  {
    text: "The forest honey is incredible. You can taste the difference from store-bought.",
    name: "Anjali D.",
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
      <div className="grid md:grid-cols-2">
        {/* ── LEFT: Our Story ── */}
        <SlideLeft className="relative overflow-hidden">
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex items-center min-h-95">
            <div className="max-w-sm ml-auto md:ml-36 lg:ml-52">
              <h2 className="font-heading text-[28px] md:text-[34px] lg:text-[44px] font-bold text-white mb-6">
                <span className="text-honey">OUR</span> STORY
              </h2>
              <p className="text-gray-300 text-sm leading-[1.9] mb-4">
                Vedaanth Nectar Honey was born out of a passion for pure, natural
                living. What started with a few hives in our backyard has grown
                into a mission to bring you the finest raw honey from nature&apos;s
                own goodness.
              </p>
              <p className="text-gray-300 text-sm leading-[1.9] mb-8">
                Thank you for being a part of our journey.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3 bg-honey text-black font-bold text-xs rounded-full hover:bg-honey-amber transition-colors tracking-[0.12em] btn-shine group"
              >
                KNOW MORE ABOUT US
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </SlideLeft>

        {/* ── RIGHT: Testimonials ── */}
        <SlideRight className="p-8 md:p-12 lg:p-16 pt-8 md:pt-10 flex flex-col justify-start">
          <h2 className="font-heading text-[24px] md:text-[30px] lg:text-[34px] font-bold text-black mb-6 text-center">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <div className="relative max-w-md mx-auto">
            {/* Nav arrows */}
            <button
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-honey/30 text-black/40 flex items-center justify-center hover:border-honey hover:text-honey transition-all"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => go((current + 1) % testimonials.length)}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-honey/30 text-black/40 flex items-center justify-center hover:border-honey hover:text-honey transition-all"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Testimonial card */}
            <div className="flex items-center gap-6 px-8 min-h-45">
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
                    {/* Stars */}
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
                      &ndash; {t.name}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative honey image */}
              <div className="hidden sm:block relative w-24 h-28 shrink-0 rounded-2xl overflow-hidden opacity-80">
                <Image
                  src="/images/honey-dipper.jpg"
                  alt="Honey dipper"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-7 h-2.5 bg-honey"
                      : "w-2.5 h-2.5 bg-honey/20 hover:bg-honey/40"
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
