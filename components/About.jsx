import { Award, Factory, Popcorn, Users, Leaf, Heart, WheatOff, Droplet, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Award, value: "35+", label: "Years", sub: "of Trust & Quality" },
  { icon: Factory, value: "2+", label: "Modern", sub: "Manufacturing Units" },
  { icon: Popcorn, value: "25+", label: "Delicious", sub: "Varieties" },
  { icon: Users, value: "1M+", label: "Happy", sub: "Customers" },
];

const FEATURES = [
/*   { icon: Leaf, label: "Premium\nQuality Corn" },
 */  { icon: Heart, label: "Light &\nCrispy" },
  { icon: WheatOff, label: "Gluten\nFree" },
  { icon: Droplet, label: "Air Popped\nNot Fried" },
  { icon: ShieldCheck, label: "Export\nQuality" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 ">
      {/* floating popcorn decorations */}
      <Popcorn
        aria-hidden
        className="pointer-events-none absolute -left-2 top-8 h-16 w-16 -rotate-12 text-amber-200/80 blur-[1.5px] lg:left-8 lg:h-20 lg:w-20"
      />
      <Popcorn
        aria-hidden
        className="pointer-events-none absolute right-6 top-24 h-14 w-14 rotate-12 text-amber-200/80 blur-[1.5px] lg:right-16 lg:h-16 lg:w-16"
      />
      <Popcorn
        aria-hidden
        className="pointer-events-none absolute right-1/3 top-1/2 hidden h-14 w-14 rotate-6 text-amber-200/70 blur-[1.5px] lg:block"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-14 gap-y-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Text column */}
        <div className="relative z-10">
          {/* ABOUT US ribbon */}
          <span
            className="inline-block bg-tiptop-red px-6 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%, 10% 50%)" }}
          >
            About Us
          </span>

          {/* Heading */}
          <h1 className="mt-5 font-heading leading-[1.1] text-tiptop-navy">
            <span className="block text-2xl font-bold sm:text-[1.75rem]">
             Popcorn Manufacturer in Delhi — 

            </span>
            <span className="relative mt-1 inline-block text-[2.75rem] font-extrabold sm:text-5xl lg:text-[3.25rem]">
              Making Every Moment More Delicious
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 h-4 w-full text-tiptop-yellow"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14C60 2 120 2 150 10C180 18 240 18 298 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Copy */}
          <p className="mt-7 max-w-xl font-body text-[15px] leading-relaxed text-ink/75">
         Popcorn should feel like an experience, not just a snack — and that belief has driven TipTop Food Tech since 1991. As a popcorn manufacturer in Delhi, we have spent over 35+ years turning carefully selected corn into the kind of crunch people reach for during late-night cravings, family movie nights, and everything in between.

          </p>
          <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-ink/75">
       Today, that experience runs across 2 modern manufacturing units in Delhi, more than 25 popcorn varieties, and over 1 million happy customers. Our popcorn is air-popped, not fried, which keeps it light, naturally gluten-free, and just as satisfying without the extra oil.

          </p>
                      <div className="md:hidden relative order-first lg:order-last">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] border-[6px] border-tiptop-yellow/60 shadow-xl lg:aspect-[5/4]">
            <img
              src="/aboutimage.png"
              alt="Tip Top popcorn production line"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-y-7 rounded-2xl border border-tiptop-navy/10 bg-white/40 px-4 py-6 sm:grid-cols-4 sm:divide-x sm:divide-tiptop-navy/10">
            {STATS.map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2 px-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tiptop-yellow">
                  <Icon className="h-6 w-6 text-tiptop-navy" strokeWidth={2.2} />
                </span>
                <p className="font-heading text-2xl font-extrabold text-tiptop-navy">{value}</p>
                <p className="font-body text-xs font-extrabold uppercase leading-tight text-tiptop-red">
                  {label}
                </p>
                <p className="font-body text-[11px] font-medium uppercase leading-tight text-ink/55">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="hidden md:block relative order-first lg:order-last">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] border-[6px] border-tiptop-yellow/60 shadow-xl lg:aspect-[5/4]">
            <img
              src="/aboutimage.png"
              alt="Tip Top popcorn production line"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="relative z-10 mx-auto mt-12 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-tiptop-navy px-6 py-6  md:grid-cols-4 lg:divide-x lg:divide-white/15">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 px-2 lg:justify-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-tiptop-yellow text-tiptop-yellow">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="whitespace-pre-line font-body text-xs font-bold uppercase leading-tight text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
