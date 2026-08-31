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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link href="#top" className="group">
            <BrandLogo variant="dark" iconSize={36} />
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

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-black/60 hover:text-honey transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <button className="relative p-2 text-black/60 hover:text-honey transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
            </button>
            <a
              href="#shop"
              className="ml-2 px-7 py-3 bg-honey text-black text-[14px] font-bold rounded-full hover:bg-honey-amber transition-colors tracking-wider btn-shine"
            >
              SHOP NOW
            </a>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden p-2 text-black" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
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
