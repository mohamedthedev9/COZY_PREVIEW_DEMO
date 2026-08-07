const SPINE_TEXT = "COZY ERA — AUTUMN 26 — THE QUIET HOUR EDIT — ";

export default function SpineTicker() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-4 hidden w-8 overflow-hidden md:right-8 md:block lg:right-12"
    >
      <div className="animate-spine flex flex-col will-change-transform">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="vertical-rl rotate-180 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.4em] text-bronze/70"
          >
            {SPINE_TEXT.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
