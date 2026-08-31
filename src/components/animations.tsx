"use client";

import { motion, type Variants, useTransform, useScroll } from "framer-motion";
import { type ReactNode, useRef } from "react";

/* ── Shared spring config ───────────────────────── */
const smoothSpring = { type: "spring" as const, stiffness: 100, damping: 20 };
const snappyEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Fade-up on scroll ─────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: snappyEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Fade-in (no translate) ───────────────────── */
const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: snappyEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Slide from left ──────────────────────────── */
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export function SlideLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: snappyEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Slide from right ─────────────────────────── */
const slideRight: Variants = {
  hidden: { opacity: 0, x: 80, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export function SlideRight({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: snappyEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Scale up ─────────────────────────────────── */
const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export function ScaleUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ...smoothSpring }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ────────────────────────── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger child (pair with StaggerContainer) ── */
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: snappyEase as [number, number, number, number] },
  },
};

export function StaggerChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Animated counter ─────────────────────────── */
export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ...smoothSpring }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

/* ── Float (continuous) ───────────────────────── */
export function Float({
  children,
  duration = 4,
  y = 10,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Parallax scroll ─────────────────────────── */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Rotate in ────────────────────────────────── */
const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -8, scale: 0.9 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

export function RotateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={rotateIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ...smoothSpring }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Glow pulse (hover effect wrapper) ───────── */
export function GlowOnHover({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 30px rgba(255,176,0,0.25)",
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
