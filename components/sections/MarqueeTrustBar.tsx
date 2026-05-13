export function MarqueeTrustBar() {
  const row1 =
    "Zabiha Halal · Hand Cut · Karachi Recipes · Fresh Daily · Pakistani Cuisine · Family Owned · Sugar Land TX · Authentic Spices · ";
  const row2 =
    "BIRYANI · NIHARI · KABAB ROLLS · KARAHI · HALWA POORI · ZINGER BURGER · WINGS · MUTTON · BEEF · CHICKEN · FISH · NAAN · ";

  return (
    <section
      className="bg-ans-emerald py-4 overflow-hidden"
      aria-label="Trust and specialties"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          <span className="whitespace-nowrap px-4 font-display text-base italic text-ans-gold">
            {row1}
          </span>
          <span className="whitespace-nowrap px-4 font-display text-base italic text-ans-gold">
            {row1}
          </span>
        </div>
        <div className="mt-2 flex w-max animate-marquee-reverse animate-marquee-slow">
          <span className="whitespace-nowrap px-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
            {row2}
          </span>
          <span className="whitespace-nowrap px-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
            {row2}
          </span>
        </div>
      </div>
    </section>
  );
}
