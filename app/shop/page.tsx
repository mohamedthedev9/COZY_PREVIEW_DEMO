import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/api";
import ShopCatalogClient from "@/components/ShopCatalogClient";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-ink text-bone flex flex-col selection:bg-oxblood selection:text-bone">
      <Navbar />

      <main className="flex-1 py-20 px-8 lg:px-24 max-w-[1600px] mx-auto w-full">
        <ShopCatalogClient initialProducts={products} />
      </main>

      <Footer />
    </div>
  );
}