import { getProductById } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#110e0d] text-[#f3ede2]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] overflow-hidden bg-[#1a1614]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#a39b8b]">
              {product.category}
            </span>
            <h1 className="text-3xl font-light mt-2 mb-4">{product.name}</h1>
            <p className="text-xl font-light mb-6">${product.price}</p>
            <p className="text-[#a39b8b] font-light leading-relaxed mb-8">
              {product.description}
            </p>
            {product.details && (
              <ul className="space-y-2 mb-8">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-[#f3ede2] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a39b8b] mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            <button className="w-full bg-[#f3ede2] text-[#110e0d] py-4 text-sm tracking-wider uppercase hover:bg-[#e2dcd0] transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}