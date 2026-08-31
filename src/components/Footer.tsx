"use client";

import Link from "next/link";
import { FadeUp } from "./animations";
import { BrandLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-honey/5 text-black/60" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-5">
                <BrandLogo variant="dark" iconSize={34} />
              </div>
              <p className="text-xs text-black/50 leading-relaxed mb-4">
                Pure. Raw. Natural.<br />Just as nature made it.
              </p>
              <div className="flex gap-2.5">
                <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-honey/15 flex items-center justify-center hover:bg-honey transition-colors group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-black/40 group-hover:text-black">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-honey/15 flex items-center justify-center hover:bg-honey transition-colors group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black/40 group-hover:text-black">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-honey/15 flex items-center justify-center hover:bg-honey transition-colors group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-black/40 group-hover:text-black">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-[0.12em] mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { l: "Home", h: "#top" },
                  { l: "Our Story", h: "#story" },
                  { l: "Shop", h: "#shop" },
                  { l: "Honey Tips", h: "#tips" },
                  { l: "Contact Us", h: "#contact" },
                ].map((link) => (
                  <li key={link.l}>
                    <Link href={link.h} className="text-xs text-black/50 hover:text-honey transition-colors">{link.l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-[0.12em] mb-4">Customer Care</h4>
              <ul className="space-y-2.5">
                {["FAQ", "Shipping & Delivery", "Returns & Refunds", "Privacy Policy", "Terms & Conditions"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-black/50 hover:text-honey transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-[0.12em] mb-4">Contact Us</h4>
              <ul className="space-y-2.5 text-xs text-black/50">
                <li className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" className="shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bangalore, Karnataka, India
                </li>
                <li className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" className="shrink-0 mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 98765 43210
                </li>
                <li className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" className="shrink-0 mt-0.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                  hello@vedaanthhoney.com
                </li>
                <li className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Mon &ndash; Sun: 8AM &ndash; 8PM
                </li>
              </ul>
            </div>

            {/* Payments */}
            <div>
              <h4 className="text-xs font-bold text-black uppercase tracking-[0.12em] mb-4">We Accept</h4>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-extrabold text-[#1A1F71] border border-honey/15">VISA</span>
                <span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-extrabold text-[#EB001B] border border-honey/15">MC</span>
                <span className="px-3 py-1.5 bg-white rounded-full text-[10px] font-extrabold text-[#00843D] border border-honey/15">UPI</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-honey/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-[11px] text-black/40">
            &copy; 2024 Vedaanth Nectar Honey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
