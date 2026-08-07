import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1a1614] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start text-[#f3ede2]">
        <div>
          <h3 className="text-sm font-light tracking-wide">{product.name}</h3>
          <p className="text-xs text-[#a39b8b] mt-1">{product.category}</p>
        </div>
        <p className="text-sm font-light">${product.price}</p>
      </div>
    </Link>
  );
}