import React from "react";

const brands = [
  { name: "natural", sub: "MINERAL WATER", style: "text-3xl font-extrabold lowercase tracking-tight" },
  { name: "NEW WAVE", sub: "", style: "font-serif text-2xl font-black leading-[0.9] tracking-widest" },
  { name: "RETRO", top: "THE", sub: "STUDIO", style: "text-3xl font-black tracking-tight" },
  { name: "A", sub: "DESIGN HUB", style: "font-serif text-6xl italic font-bold leading-none" },
  { name: "Iconic", sub: "MENSWEAR", style: "text-3xl font-extrabold tracking-tight" },
  { name: "Hipster", sub: "DESIGN STUDIO", style: "font-serif text-3xl italic font-bold" },
];

const Clients = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1203px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="lg:pl-10">
          <p className="text-sm text-black">our clients</p>
          <h2 className="mt-6 text-4xl font-medium leading-tight text-[#0b0b0b] sm:text-5xl">
            We&apos;ve worked
            <br />
            with 50+ brands
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center justify-center text-center text-[#a3a3a3] opacity-90 transition hover:text-[#6b6b6b]"
            >
              {b.top && (
                <span className="text-xs font-black tracking-widest">
                  {b.top}
                </span>
              )}
              <span className={b.style}>{b.name}</span>
              {b.sub && (
                <span className="mt-1 text-[8px] font-bold tracking-[0.3em]">
                  {b.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients