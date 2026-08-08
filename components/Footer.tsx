"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SHOP_CATEGORIES = ["Knitwear", "Dresses", "Outerwear", "Bottoms"];
const STUDIO_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
// No dedicated pages yet — shown as plain text rather than dead links.
const INFO_LINKS = ["Shipping", "Returns", "Care Guide"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-ink px-6 pb-10 pt-24 text-paper md:px-10">
      <h2 className="text-stroke pointer-events-none select-none font-display text-[18vw] font-light leading-none tracking-tight opacity-40 md:text-[12vw]">
        Cozy Era
      </h2>

      <div className="relative mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
            Shop
          </p>
          <ul className="space-y-2 text-sm text-paper/70">
            {SHOP_CATEGORIES.map((c) => (
              <li key={c}>
                <Link href="/shop" className="transition-colors hover:text-paper">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-violet">
            Studio
          </p>
          <ul className="space-y-2 text-sm text-paper/70">
            {STUDIO_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-teal">
            Info
          </p>
          <ul className="space-y-2 text-sm text-paper/50">
            {INFO_LINKS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-sun">
            Considered pieces, twice a season.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 py-2 pl-4 pr-2"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral text-ink transition-transform hover:scale-105"
            >
              <ArrowRight size={14} strokeWidth={2.25} />
            </button>
          </form>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Cozy Era. All rights reserved.</span>
        <span className="font-mono uppercase tracking-[0.2em]">
          Designed in the quiet hours
        </span>
      </div>
    </footer>
  );
}
