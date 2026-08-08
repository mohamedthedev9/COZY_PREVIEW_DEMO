import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  // فك الـ Promise بتاع الـ params للتوافق مع Next.js الحديث
  const resolvedParams = await params;
  
  // استدعاء المنتج مع إضافة await عشان ميرجعش Promise فاضي
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* قسم صورة المنتج */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
              {product.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-serif font-normal">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-gray-900">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* تفاصيل إضافية مع تحديد الأنواع (Types) بوضوح لمنع أخطاء TS */}
            {product.details && product.details.length > 0 && (
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <h3 className="font-medium text-sm uppercase tracking-wider">Product Details</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {product.details.map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <button className="w-full bg-black text-white py-4 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider text-xs">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}