"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerChild } from "./animations";

function CartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="4" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="3" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function HexBadge({ num }: { num: string }) {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center mb-4">
      <svg viewBox="0 0 60 60" width="56" height="56" className="absolute inset-0">
        <polygon points="30,2 55,16 55,44 30,58 5,44 5,16" fill="#FFB000" />
      </svg>
      <span className="relative z-10 text-black font-bold text-sm tracking-wide">{num}</span>
    </div>
  );
}

const steps = [
  { num: "01", title: "CHOOSE YOUR HONEY", desc: "Browse our collection and add to cart.", icon: <CartIcon /> },
  { num: "02", title: "PLACE YOUR ORDER", desc: "Secure checkout and easy payment.", icon: <CardIcon /> },
  { num: "03", title: "GET IT DELIVERED", desc: "Fast delivery to your doorstep.", icon: <TruckIcon /> },
];

export default function HowToOrder() {
  return (
    <section className="py-8 md:py-10 bg-honey/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-6">
          <h2 className="font-heading text-[24px] md:text-[30px] lg:text-[38px] font-bold text-black tracking-wide">
            HOW TO ORDER
          </h2>
        </FadeUp>

        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-sm border border-honey/15">
          <StaggerContainer className="flex flex-col md:flex-row items-center justify-center gap-2">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <StaggerChild className="text-center flex flex-col items-center px-4 md:px-6 py-4 min-w-45">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <HexBadge num={s.num} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="mb-3"
                  >{s.icon}</motion.div>
                  <h3 className="font-bold text-xs text-black tracking-[0.12em] mb-2">{s.title}</h3>
                  <p className="text-xs text-black/50 leading-relaxed max-w-45">{s.desc}</p>
                </StaggerChild>

                {i < steps.length - 1 && (
                  <div className="hidden md:block mx-2">
                    <svg viewBox="0 0 80 20" width="80" height="20">
                      <path d="M0 10 Q20 0, 40 10 T80 10" stroke="#FFB000" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
