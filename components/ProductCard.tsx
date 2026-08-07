"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/lib/types";

export default function ProductCard({
  product,
  className = "",
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={`group relative flex flex-col ${className}`}
    >
      <div className="relative min-h-[22rem] flex-1 overflow-hidden bg-ink-soft">
        <motion.div
          whileHover={{ scale: 1.07, rotate: -0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full min-h-[22rem] w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-oxblood opacity-0 mix-blend-multiply transition-opacity duration-500 ease-editorial group-hover:opacity-25" />
        <div className="pointer-events-none absolute inset-3 border border-bone/0 transition-colors duration-500 ease-editorial group-hover:border-bronze/60" />

        <button
          type="button"
          onClick={() => setAdded(true)}
          className="absolute inset-x-3 bottom-3 translate-y-3 border border-bone/30 bg-ink/80 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone opacity-0 backdrop-blur-sm transition-all duration-400 ease-editorial hover:border-bronze group-hover:translate-y-0 group-hover:opacity-100"
        >
          {added ? "Added to Bag" : "Add to Bag"}
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-moss-bright">
            {product.category}
          </p>
          <h3 className="font-display text-lg italic text-bone">
            {product.name}
          </h3>
        </div>
        <span className="whitespace-nowrap font-mono text-sm text-bronze-soft">
          ${product.price}
        </span>
      </div>
    </motion.article>
  );
}
