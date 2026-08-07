'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone border-t border-bronze/20 py-20 px-8 lg:px-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div>
          <h3 className="font-display text-2xl tracking-[4px] uppercase mb-4">
            Cozy Era
          </h3>
          <p className="font-sans text-smoke text-xs leading-relaxed max-w-xs">
            Designed in the quiet hours. Considered pieces, twice a season.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bronze mb-4">
            Navigate
          </h4>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-wider text-smoke">
            <li><Link href="/" className="hover:text-bone transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-bone transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-bone transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-bone transition-colors">Support</Link></li>
            <li><Link href="/contact" className="hover:text-bone transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care / Help */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bronze mb-4">
            Information
          </h4>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-wider text-smoke">
            <li><Link href="/contact" className="hover:text-bone transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/contact" className="hover:text-bone transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Follow Us / Socials */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bronze mb-4">
            Follow Us
          </h4>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-wider text-smoke">
            <li>
              <a href="https://www.instagram.com/cozy_era" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cozyera" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@cozy_era" target="_blank" rel="noopener noreferrer" className="hover:text-bone transition-colors">
                TikTok
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-[1600px] mx-auto pt-8 border-t border-bronze/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-smoke">
        <p>© 2026 Cozy Era. All rights reserved.</p>
        <p className="mt-4 sm:mt-0">Designed in the quiet hours.</p>
      </div>
    </footer>
  );
}