"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, StaggerContainer, StaggerChild } from "./animations";

const tips = [
  {
    title: "BENEFITS OF RAW HONEY",
    excerpt: "Discover why raw honey is a superfood for your health.",
    img: "/images/blog-benefits.jpg",
  },
  {
    title: "HOW TO USE HONEY",
    excerpt: "Simple ways to add honey to your daily routine.",
    img: "/images/blog-recipes.jpg",
  },
  {
    title: "HONEY & IMMUNITY",
    excerpt: "Boost your immunity naturally with raw honey.",
    img: "/images/blog-immunity.jpg",
  },
];

export default function HoneyTips() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="relative" id="tips">
      <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
        {/* ── LEFT: Blog tips ── */}
        <SlideLeft className="bg-white p-8 md:p-10 lg:p-12">
          <h2 className="font-heading text-[28px] md:text-[34px] lg:text-[38px] font-bold text-black mb-6">
            HONEY TIPS & STORIES
          </h2>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <StaggerChild key={tip.title}>
                <article className="group cursor-pointer">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={tip.img}
                      alt={tip.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-bold text-xs text-black tracking-widest mb-2 group-hover:text-honey transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-black/50 leading-relaxed mb-3">
                    {tip.excerpt}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-honey tracking-wide group-hover:gap-2 transition-all">
                    READ MORE
                    <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </article>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </SlideLeft>

        {/* ── RIGHT: Newsletter (honey bg) ── */}
        <SlideRight className="bg-honey p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute bottom-6 right-6 w-20 h-20 bg-white/10 rounded-full" />

          <div className="relative z-10 max-w-sm mx-auto lg:mx-0">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </div>

            <h3 className="font-heading text-[24px] md:text-[28px] lg:text-[32px] font-bold text-black leading-tight mb-4">
              GET HONEY TIPS,
              <br />
              RECIPES & OFFERS
            </h3>
            <p className="text-black/60 text-sm leading-relaxed mb-8">
              Join our community and get the goodness of honey delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-5 py-3.5 rounded-full text-sm bg-white text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-sm"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full px-5 py-3.5 bg-black text-white font-bold text-xs rounded-full hover:bg-black/80 transition-colors tracking-[0.12em]"
              >
                {submitted ? "SUBSCRIBED!" : "SUBSCRIBE"}
              </motion.button>
            </form>
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
