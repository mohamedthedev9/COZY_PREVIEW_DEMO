import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — COZY ERA",
  description:
    "The studio philosophy behind COZY ERA — four fabrics, one point of view.",
};

const MATERIALS = [
  {
    name: "Cashmere",
    origin: "Mongolia",
    note: "Combed, not shorn — softer with every wash, not before it.",
    tint: "bg-coral-soft",
  },
  {
    name: "Silk",
    origin: "Bias-cut satin",
    note: "Cut on the bias so it moves the way the body does.",
    tint: "bg-violet-soft",
  },
  {
    name: "Virgin Wool",
    origin: "Tailored",
    note: "Structured enough to hold a shape through a decade of winters.",
    tint: "bg-teal-soft",
  },
  {
    name: "Organic Linen",
    origin: "Undyed where possible",
    note: "Left with room to wrinkle, because that's what linen is for.",
    tint: "bg-surface",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-paper pb-28 pt-36 md:pt-44">
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
          The Studio
        </p>
        <h1 className="max-w-3xl font-display text-4xl italic leading-tight text-ink sm:text-5xl md:text-6xl">
          We don&apos;t chase seasons. We choose fibers that outlast them.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
          COZY ERA started with a short list: four fabrics worth building a
          wardrobe around, and a refusal to touch anything that wouldn&apos;t
          still earn its place in five years. Everything else — the trend
          calendar, the seasonal drops, the noise — we left out on purpose.
        </p>
      </section>

      <section className="mx-auto mt-24 max-w-[1600px] px-6 md:px-10">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-violet">
          Materials
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {MATERIALS.map((m) => (
            <div
              key={m.name}
              className={`rounded-2xl ${m.tint} p-8 transition-transform duration-500 ease-editorial hover:-translate-y-1`}
            >
              <h2 className="font-display text-2xl italic text-ink">
                {m.name}
              </h2>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                {m.origin}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1600px] px-6 md:px-10">
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
      </section>
    </main>
  );
}
