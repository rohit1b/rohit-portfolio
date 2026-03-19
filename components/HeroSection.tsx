"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms on scroll
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-20 px-5 sm:px-8 overflow-hidden"
    >
      {/* Ambient amber glow — top center */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-glow dark:bg-amber-glow-dark" />

      {/* Photo — top right, desktop only */}
      <motion.div
        style={{ opacity: photoOpacity }}
        className="hidden lg:block absolute top-32 right-8 xl:right-16"
      >
        <div className="relative w-28 h-36 xl:w-36 xl:h-44 overflow-hidden rounded-xl border border-surface-border dark:border-dark-surface-border">
          <Image
            alt="Rohit Singh"
            src="/dp.png"
            fill
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="144px"
          />
          {/* Amber corner accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 md:mb-12"
        >
          Full-Stack Engineer · AI Platforms
        </motion.p>

        {/* Giant name */}
        <motion.div style={{ y: nameY, opacity: nameOpacity }}>
          <h1 className="font-display text-[15vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] font-light text-neutral-900 dark:text-white leading-[0.9] tracking-tight">
            <motion.span
              className="block overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Rohit
            </motion.span>
            <motion.span
              className="block overflow-hidden italic font-semibold"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Singh<span className="text-primary">.</span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Amber divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-[1.5px] w-24 bg-primary mt-6 mb-6 md:mt-12 md:mb-12"
        />

        {/* Tagline — standard delayed reveal instead of scroll tied */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed"
        >
          I architect high-performance{" "}
          <span className="text-neutral-900 dark:text-white font-medium">
            AI platforms
          </span>{" "}
          and{" "}
          <span className="text-neutral-900 dark:text-white font-medium">
            scalable multi-tenant systems
          </span>{" "}
          — crafting interfaces where clarity and intelligence converge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row items-center gap-4 mt-8 md:mt-14"
        >
          <a
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 px-6 py-3 rounded hover:bg-primary dark:hover:bg-primary dark:hover:text-white hover:text-white transition-all duration-300"
          >
            View Work
            <span className="text-xs">↓</span>
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 px-6 py-3 rounded hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll hint - adjust for bottom mobile safely margin */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-[1px] h-10 bg-neutral-300 dark:bg-neutral-700" />
        <span className="text-xs text-neutral-400 uppercase tracking-widest font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
