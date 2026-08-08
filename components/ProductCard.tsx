"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -4 }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface shadow-md shadow-ink/5 transition-shadow duration-500 ease-editorial group-hover:shadow-[0_16px_40px_-12px_rgba(124,92,252,0.35)]">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Glowing border ring — appears on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 ease-editorial group-hover:ring-2 group-hover:ring-violet/50" />

        <button
          type="button"
          onClick={() => setAdded(true)}
          aria-label={added ? "Added to bag" : "Add to bag"}
          className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-paper/95 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink shadow-lg backdrop-blur-sm transition-all duration-300 ease-editorial hover:bg-coral md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag size={13} strokeWidth={2} />
          {added ? "Added" : "Add"}
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <span className="mb-2 inline-block rounded-full bg-teal-soft px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
            {product.category}
          </span>
          <h3 className="font-display text-lg italic leading-snug text-ink">
            {product.name}
          </h3>
        </div>
        <span className="whitespace-nowrap font-mono text-sm font-medium text-coral">
          ${product.price}
        </span>
      </div>
    </motion.article>
  );
}
