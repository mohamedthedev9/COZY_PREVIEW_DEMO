'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-ink text-bone flex flex-col selection:bg-oxblood selection:text-bone">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md bg-ink-soft border border-bronze/20 p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase mb-3 block">
              Client Portal
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-normal text-bone mb-3">
              Sign In
            </h1>
            <p className="font-sans text-smoke text-sm">
              Access your orders, wishlist, and private collection releases.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-bronze">
                ✦ Magic link sent to {email}
              </p>
              <p className="font-sans text-smoke text-sm">
                Please check your inbox to complete secure sign-in.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-mono text-xs uppercase tracking-wider text-smoke">
                  Email Address
                </label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-ink border border-bronze/30 px-4 py-3 font-sans text-bone placeholder:text-smoke/50 focus:outline-none focus:border-bronze transition-colors text-sm"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-bronze text-ink font-mono text-xs uppercase tracking-[0.3em] font-bold hover:bg-bone transition-colors cursor-pointer"
              >
                Continue with Email
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-bronze/20 text-center font-mono text-[11px] text-smoke">
            <p>Protected by quiet encryption standards.</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}