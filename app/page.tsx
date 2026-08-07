import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  const heroProduct =
    products.find((p) => p.category === "Outerwear") ?? products[0];

  return (
    <main className="bg-ink">
      <Navbar />

      <Hero
        imageSrc={heroProduct?.image}
        imageAlt={heroProduct?.name ?? "COZY ERA Autumn 26 edit"}
      />

      <Marquee />
      <Manifesto />

      <section id="shop" className="py-28 md:py-36">
        <div className="mx-auto mb-16 max-w-[1600px] px-6 md:px-10">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bronze">
            The Edit — {products.length}{" "}
            {products.length === 1 ? "Piece" : "Pieces"}
          </p>
          <h2 className="max-w-2xl font-display text-4xl italic leading-tight text-bone md:text-5xl">
            Four fabrics. One point of view.
          </h2>
        </div>

        <ProductGrid products={products} />
      </section>

      <Footer />
    </main>
  );
}
