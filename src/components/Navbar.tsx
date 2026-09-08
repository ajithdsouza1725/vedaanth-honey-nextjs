"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BrandLogo } from "./Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", href: "#top", active: true },
    { label: "OUR STORY", href: "#story" },
    { label: "SHOP", href: "#shop" },
    { label: "HONEY TIPS", href: "#tips" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 border-b border-white/50"
          : "bg-transparent"
      }`}
      id="top"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-[60px] md:h-[76px] items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="group shrink-0">
            <BrandLogo variant="dark" iconSize={36} className="md:hidden" />
            <BrandLogo variant="dark" iconSize={56} className="hidden md:block" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] tracking-[0.06em] transition-colors relative py-1 group ${
                  item.active
                    ? "text-black font-semibold"
                    : "text-black/60 font-medium hover:text-honey"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#shop"
              className="px-7 py-3 bg-honey text-black text-[14px] font-bold rounded-full hover:bg-honey-amber transition-colors tracking-wider btn-shine"
            >
              SHOP NOW
            </a>
          </div>

          {/* Mobile right icons */}
          <div className="lg:hidden flex items-center gap-1">
            <button className="p-1.5 text-black" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden glass border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              {links.map((item, i) => (
                <motion.div key={item.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link href={item.href} className={`block py-2 text-[14px] tracking-[0.06em] ${item.active ? "text-black font-semibold" : "text-black/60 font-medium hover:text-honey"}`} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                </motion.div>
              ))}
              <a href="#shop" className="inline-block mt-3 px-6 py-2.5 bg-honey text-black text-[13px] font-bold rounded-full tracking-wider" onClick={() => setMobileOpen(false)}>SHOP NOW</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
