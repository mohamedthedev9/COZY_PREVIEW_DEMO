"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SpineTicker from "./SpineTicker";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200";

const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  [{ text: "Comfort," }],
  [{ text: "made" }, { text: "permanent.", accent: true }],
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({
  imageSrc,
  imageAlt,
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-bone/10 pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,var(--color-oxblood)_0%,transparent_45%),radial-gradient(circle_at_85%_75%,var(--color-moss)_0%,transparent_40%)] opacity-40" />

      <SpineTicker />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-y-16 px-6 md:grid-cols-12 md:px-10">
        <motion.div style={{ y: textY }} className="relative z-20 md:col-span-7 md:pr-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-bronze"
          >
            AW26 — The Quiet Hour Edit
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-[15vw] font-light leading-[0.92] tracking-tight text-bone sm:text-[10vw] md:text-[6.4vw]"
          >
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                {line.map((w, j) => (
                  <span
                    key={j}
                    className="mr-[0.22em] inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      variants={word}
                      className={`inline-block ${w.accent ? "italic text-bronze-soft" : ""}`}
                    >
                      {w.text}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 max-w-sm text-balance text-sm leading-relaxed text-smoke md:text-base"
          >
            Cashmere, silk, and wool, cut for a life that doesn&apos;t perform for
            anyone. Four pieces, built to outlast the season they arrived in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 border border-bronze/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-bone transition-colors duration-300 ease-editorial hover:border-bronze hover:bg-bronze/10"
            >
              Shop the Edit
              <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mb-24 md:col-span-5 md:-mb-32"
        >
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden md:ml-auto md:max-w-none">
            <Image
              src={imageSrc || FALLBACK_IMAGE}
              alt={imageAlt || "COZY ERA Autumn 26 edit"}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-smoke md:left-10 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
