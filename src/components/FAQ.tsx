"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./animations";

const faqs = [
  {
    q: "Is Vedaanth honey 100% pure and raw?",
    a: "Yes. Our honey is 100% pure, raw, and unheated — with nothing added and nothing removed. Every batch is lab-tested for purity.",
  },
  {
    q: "Where does your honey come from?",
    a: "All our honey is harvested from our own hives in the Chitradurga hills of Karnataka. It's single-origin, not blended or bought from middlemen.",
  },
  {
    q: "Do you deliver in Bangalore?",
    a: "Yes — we deliver across all of Bangalore, usually within a few days. Free delivery on orders above ₹400.",
  },
  {
    q: "Will the honey crystallize?",
    a: "It may, and that's a good sign! Natural raw honey crystallizes over time. Just place the jar in warm water and it turns liquid again — never microwave it.",
  },
  {
    q: "How is this different from supermarket honey?",
    a: "Most supermarket honey is heated, heavily processed, and sometimes mixed with sugar syrup. Ours is raw, unheated, single-origin, and lab-tested — as real as honey gets.",
  },
  {
    q: "How do I order?",
    a: "Order directly on this website, message us on WhatsApp, or call us. We accept UPI, cards, and online payment.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-honey/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4"
      >
        <h3 className="font-bold text-sm sm:text-[15px] text-black leading-snug">{q}</h3>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFB000"
          strokeWidth="2.5"
          className="shrink-0"
        >
          <path d="M12 5v14M5 12h14" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-5 text-sm text-black/60 leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-10 md:py-14 bg-honey/5" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-8">
          <h2 className="font-heading text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-extrabold text-black tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm border border-honey/15">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
