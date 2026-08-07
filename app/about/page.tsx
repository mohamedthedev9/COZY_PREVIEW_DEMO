'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink text-bone flex flex-col selection:bg-oxblood selection:text-bone">
      <Navbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-8 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Story Header */}
          <div className="mb-16 md:mb-24">
            <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-normal leading-tight mb-8">
              Designing clothing that blends <em className="italic text-oxblood">classic elegance</em> with the spirit of the times.
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16 border-y border-bronze/25 py-16 items-center">
            <div>
              <h3 className="font-display text-3xl mb-6 text-bone">From an Idea to a Brand</h3>
              <p className="font-sans text-smoke text-sm md:text-base leading-relaxed mb-6">
                COZY ERA started from a passion for the small details that make a big difference. Every piece we design balances sophisticated classic style with everyday comfort.
              </p>
              <p className="font-sans text-smoke text-sm md:text-base leading-relaxed">
                We carefully select fabrics and work with trusted local workshops to deliver clothing that lasts years, not just one season.
              </p>
            </div>
            <div className="bg-ink-soft p-10 border border-bronze/20 flex flex-col justify-center min-h-[280px]">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze mb-3">Workshop / Team Photo</span>
              <p className="font-sans text-smoke text-sm italic">
                Crafted with precision and care behind the scenes.
              </p>
            </div>
          </div>

          {/* What We Believe Section */}
          <div className="my-24">
            <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase mb-4 block">
              Core Philosophy
            </span>
            <h2 className="font-display text-4xl mb-12 text-bone">What We Believe</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-ink-soft p-8 border border-bronze/20">
                <h4 className="font-display text-2xl mb-4 text-bone">Uncompromising Quality</h4>
                <p className="font-sans text-smoke text-sm leading-relaxed">
                  We select materials that last and maintain their shape with repeated use.
                </p>
              </div>
              <div className="bg-ink-soft p-8 border border-bronze/20">
                <h4 className="font-display text-2xl mb-4 text-bone">Timeless Design</h4>
                <p className="font-sans text-smoke text-sm leading-relaxed">
                  Classic pieces that transcend fleeting trends and remain elegant over time.
                </p>
              </div>
              <div className="bg-ink-soft p-8 border border-bronze/20">
                <h4 className="font-display text-2xl mb-4 text-bone">Made with Love</h4>
                <p className="font-sans text-smoke text-sm leading-relaxed">
                  Every detail in our products is carefully considered from the first stitch to the packaging.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center py-20 px-6 border-y border-bronze/25 my-20">
            <blockquote className="font-display text-3xl md:text-4xl italic text-bone mb-6 max-w-3xl mx-auto leading-tight">
              &ldquo;Elegance is not about having many clothes, but about choosing the right piece at the right time&rdquo;
            </blockquote>
            <cite className="font-mono text-xs uppercase tracking-[0.3em] text-bronze not-italic">
              — The COZY ERA Team
            </cite>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}