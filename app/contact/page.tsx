"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock } from "lucide-react";

function Field({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-ink placeholder:text-ink-soft/50 transition-colors focus:border-violet focus:outline-none"
      />
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-paper pb-28 pt-36 md:pt-44">
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
            Questions before you order?
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            We&apos;re a small studio — no call center, no chat bot. Write to
            us directly and a real person will answer.
          </p>

          <div className="mt-12 space-y-5">
            <div className="flex items-center gap-4 rounded-2xl bg-violet-soft p-5">
              <Mail size={18} strokeWidth={1.75} className="text-ink" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                  Email
                </p>
                <p className="mt-0.5 text-ink">hello@cozyera.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-teal-soft p-5">
              <Clock size={18} strokeWidth={1.75} className="text-ink" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                  Response time
                </p>
                <p className="mt-0.5 text-ink">Within one business day</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-coral-soft px-8 py-10"
            >
              <p className="font-display text-2xl italic text-ink">
                Message sent.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                We&apos;ll be in touch within a business day.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <Field label="Name" type="text" name="name" />
              <Field label="Email" type="email" name="email" />
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-ink/10 bg-surface px-4 py-3 text-ink placeholder:text-ink-soft/50 transition-colors focus:border-violet focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-ink transition-all duration-300 ease-editorial hover:scale-[1.02] hover:shadow-[0_10px_36px_-8px_rgba(255,107,74,0.55)]"
              >
                Send Message
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
