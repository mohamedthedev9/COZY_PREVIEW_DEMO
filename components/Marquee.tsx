const ITEMS = [
  "Mongolian Cashmere",
  "Silk Satin",
  "Virgin Wool",
  "Organic Linen",
  "Cut To Last",
];

export default function Marquee() {
  const content = ITEMS.join("   —   ");

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden bg-gradient-to-r from-coral via-violet to-teal py-4"
    >
      <div className="animate-marquee flex w-max gap-16 will-change-transform">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-paper"
          >
            {content}
            <span className="mx-16">—</span>
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
