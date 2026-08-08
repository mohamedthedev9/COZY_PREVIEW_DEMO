"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-b border-ink/10 px-6 py-28 md:px-10 md:py-40"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-teal-soft opacity-50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl italic leading-[1.15] text-ink sm:text-5xl md:col-span-7 md:text-6xl"
        >
          &ldquo;We don&apos;t chase seasons. We choose fibers that outlast
          them.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 md:col-start-9 md:mt-16"
        >
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-violet">
            The Studio
          </p>
          <p className="text-sm leading-relaxed text-ink-soft md:text-base">
            Every piece starts with the material, not the trend cycle.
            Mongolian cashmere, silk satin cut on the bias, virgin wool
            tailoring, organic linen with room to breathe. Four fabrics, four
            silhouettes, one point of view.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
