"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

export default function ProductGrid({
  products,
  limit,
}: {
  products: Product[];
  /** Show only the first N products — used for the homepage teaser. */
  limit?: number;
}) {
  const items = limit ? products.slice(0, limit) : products;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1600px] px-6 py-24 text-center md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
          The edit is being restocked. Check back shortly.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-5 gap-y-10 px-6 sm:gap-x-6 md:grid-cols-3 md:gap-x-8 md:px-10 lg:grid-cols-4"
    >
      {items.map((product, i) => (
        <ProductCard key={product.id} product={product} priority={i === 0} />
      ))}
    </motion.div>
  );
}
