import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  const heroProduct =
    products.find((p) => p.category === "Outerwear") ?? products[0];

  return (
    <main className="bg-paper">
      <Hero
        imageSrc={heroProduct?.image}
        imageAlt={heroProduct?.name ?? "COZY ERA Autumn 26 edit"}
      />

      <Marquee />
      <Manifesto />

      <section className="py-28 md:py-36">
        <div className="mx-auto mb-14 flex flex-col items-start justify-between gap-6 max-w-[1600px] px-6 md:flex-row md:items-end md:px-10">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-coral">
              Newly Arrived
            </p>
            <h2 className="max-w-2xl font-display text-4xl italic leading-tight text-ink md:text-5xl">
              A first look at the edit.
            </h2>
          </div>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-violet"
          >
            View the Full Edit
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ProductGrid products={products} limit={4} />
      </section>
    </main>
  );
}
