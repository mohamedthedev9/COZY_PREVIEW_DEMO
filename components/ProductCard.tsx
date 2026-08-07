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
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="relative w-full h-[420px] overflow-hidden bg-[#1a1614] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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