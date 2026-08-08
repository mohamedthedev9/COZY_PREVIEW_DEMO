import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Shop — COZY ERA",
  description:
    "The full COZY ERA Autumn 26 edit — cashmere, silk, wool, and linen.",
};

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="bg-paper pb-28 pt-36 md:pt-44">
      <div className="mx-auto mb-14 max-w-[1600px] px-6 md:px-10">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
          The Edit — {products.length}{" "}
          {products.length === 1 ? "Piece" : "Pieces"}
        </p>
        <h1 className="max-w-2xl font-display text-4xl italic leading-tight text-ink md:text-5xl">
          Four fabrics. One point of view.
        </h1>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}
