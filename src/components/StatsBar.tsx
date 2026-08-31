"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerChild } from "./animations";

export default function StatsBar() {
  const stats = [
    {
      num: "300+",
      label: "Happy Families",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      num: "100%",
      label: "Pure Honey",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/>
          <path d="M12 10v4"/>
          <path d="M10 12h4"/>
        </svg>
      ),
    },
    {
      num: "3+",
      label: "Bee Farms",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6v6l4 8H5l4-8V3z"/>
          <path d="M9 3h6"/>
          <path d="M10 14h4"/>
        </svg>
      ),
    },
    {
      num: "24hrs",
      label: "From Hive to You",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-honey overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 md:py-9">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <StaggerChild
              key={stat.label}
              className={`flex items-center justify-center gap-4 py-3 ${
                i > 0 ? "md:border-l md:border-black/15" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-13 h-13 md:w-14.5 md:h-14.5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm"
              >
                {stat.icon}
              </motion.div>
              <div>
                <strong className="text-[26px] md:text-[32px] font-heading text-black block leading-tight tracking-wide">
                  {stat.num}
                </strong>
                <span className="text-[11px] md:text-[13px] text-black/70 font-medium">
                  {stat.label}
                </span>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
