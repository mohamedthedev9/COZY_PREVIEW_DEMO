"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-ink/10 pt-28"
    >
      {/* Soft, colorful ambient blobs — the "vibrant" wash behind the type */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-coral-soft opacity-70 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-soft opacity-70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-teal-soft opacity-60 blur-3xl" />
      </div>

      <SpineTicker />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-y-16 px-6 md:grid-cols-12 md:px-10">
        <motion.div style={{ y: textY }} className="relative z-20 md:col-span-7 md:pr-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-coral"
          >
            AW26 — The Quiet Hour Edit
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-[13vw] font-light leading-[0.92] tracking-tight text-ink sm:text-[9vw] md:text-[6.4vw]"
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
                      className={`inline-block ${
                        w.accent
                          ? "bg-gradient-to-r from-coral to-violet bg-clip-text italic text-transparent"
                          : ""
                      }`}
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
            className="mt-8 max-w-sm text-balance text-sm leading-relaxed text-ink-soft md:text-base"
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
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-ink transition-all duration-300 ease-editorial hover:scale-[1.02] hover:shadow-[0_10px_36px_-8px_rgba(255,107,74,0.55)]"
            >
              Shop the Edit
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mb-10 sm:-mb-16 md:col-span-5 md:-mb-32"
        >
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-violet-soft md:ml-auto md:max-w-none">
            <Image
              src={imageSrc || FALLBACK_IMAGE}
              alt={imageAlt || "COZY ERA Autumn 26 edit"}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft md:left-10 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
