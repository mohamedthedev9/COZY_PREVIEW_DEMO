'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully. We will be in touch shortly.');
  };

  return (
    <div className="min-h-screen bg-ink text-bone flex flex-col selection:bg-oxblood selection:text-bone">
      {/* Assuming you have a Navbar component. If not, replace with a simple header like in the About page */}
      <Navbar />

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-8 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Section */}
          <div className="mb-16 md:mb-24">
            <span className="font-mono text-[11px] tracking-[0.3em] text-bronze uppercase mb-4 block">
              Contact
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-normal leading-tight mb-6">
              Get in <em className="italic text-oxblood">Touch</em>
            </h1>
            <p className="font-sans text-smoke text-sm md:text-base max-w-lg leading-relaxed">
              Have a question about a product or order? Our team will reply shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <h2 className="font-display text-3xl text-bone border-b border-bronze/20 pb-6">
                Contact Information
              </h2>
              
              <ul className="space-y-8 font-sans">
                <li>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Email</span>
                  <a href="mailto:info@cozy-era.com" className="text-bone hover:text-bronze transition-colors text-lg">
                    info@cozy-era.com
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Phone / WhatsApp</span>
                  <a href="tel:+201214895330" className="text-bone hover:text-bronze transition-colors text-lg">
                    +20 1214895330
                  </a>
                </li>
                <li>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Address</span>
                  <p className="text-smoke text-lg">Inter, Egypt</p>
                </li>
                <li>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Working Hours</span>
                  <p className="text-smoke text-lg">Sat - Thu: 10 AM - 8 PM</p>
                </li>
              </ul>

              {/* Actions & Socials */}
              <div className="pt-8 border-t border-bronze/20 space-y-8">
                <a 
                  href="https://maps.google.com/?q=Inter,+Egypt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-bronze/50 text-bronze hover:bg-bronze hover:text-ink transition-colors font-mono text-[11px] uppercase tracking-[0.2em]"
                >
                  Map Navigate
                </a>

                <div className="flex gap-6 items-center pt-4">
                  {/* Facebook Custom Icon */}
                  <a href="https://www.facebook.com/cozyera" target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-bone transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* TikTok Custom Icon */}
                  <a href="https://www.tiktok.com/@cozy_era" target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-bone transition-colors" aria-label="TikTok">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  {/* Instagram Custom Icon */}
                  <a href="https://www.instagram.com/cozy_era" target="_blank" rel="noopener noreferrer" className="text-smoke hover:text-bone transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-ink-soft p-8 md:p-12 border border-bronze/10 shadow-2xl shadow-ink">
              <h3 className="font-display text-2xl mb-8 text-bone">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full bg-ink border border-bronze/20 px-4 py-4 text-sm text-bone placeholder:text-smoke/50 focus:outline-none focus:border-bronze transition-colors font-sans"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full bg-ink border border-bronze/20 px-4 py-4 text-sm text-bone placeholder:text-smoke/50 focus:outline-none focus:border-bronze transition-colors font-sans"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    className="w-full bg-ink border border-bronze/20 px-4 py-4 text-sm text-bone placeholder:text-smoke/50 focus:outline-none focus:border-bronze transition-colors font-sans"
                    placeholder="Order inquiry, sizing, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] tracking-[0.2em] text-bronze uppercase mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-ink border border-bronze/20 px-4 py-4 text-sm text-bone placeholder:text-smoke/50 focus:outline-none focus:border-bronze transition-colors font-sans resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 mt-4 bg-bronze text-ink text-[11px] uppercase tracking-[0.3em] font-mono font-bold hover:bg-bone transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}