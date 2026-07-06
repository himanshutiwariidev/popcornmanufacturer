import { Popcorn, Wheat, Leaf, WheatOff, ShieldCheck, Smile, Sparkles, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Wheat,
    iconBg: "bg-amber-50",
    iconColor: "#D69A1F",
    title: "Premium Quality Corn",
    desc: "We use the finest quality corn for perfect pops every time.",
  },
  {
    icon: Popcorn,
    iconBg: "bg-blue-50",
    iconColor: "#2E6FE0",
    title: "Air Popped",
    desc: "Our popcorn is air popped, not fried for a healthier snack.",
  },
  {
    icon: Leaf,
    iconBg: "bg-emerald-50",
    iconColor: "#1F9D5A",
    title: "100% Veg & Natural",
    desc: "Made with natural ingredients. 100% vegetarian.",
  },
  {
    icon: WheatOff,
    iconBg: "bg-orange-50",
    iconColor: "#E08A2E",
    title: "Gluten Free",
    desc: "Naturally gluten free, perfect for a healthy lifestyle.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-rose-50",
    iconColor: "#E0473F",
    title: "Hygienically Packed",
    desc: "Packed with care in hygienic conditions to ensure safety.",
  },
  {
    icon: Smile,
    iconBg: "bg-violet-50",
    iconColor: "#7C55D6",
    title: "Loved by All",
    desc: "Delicious taste that everyone in the family will enjoy.",
  },
];

function MarbleDisc({ className = "" }) {
  return (
    <svg viewBox="0 0 420 90" className={className} aria-hidden>
      <defs>
        <radialGradient id="whyMarbleTop" cx="50%" cy="26%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f2f0ec" />
          <stop offset="78%" stopColor="#ddd8d0" />
          <stop offset="100%" stopColor="#c7c0b5" />
        </radialGradient>
        <linearGradient id="whyMarbleRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8d2c8" />
          <stop offset="100%" stopColor="#b3ab9e" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="54" rx="205" ry="30" fill="url(#whyMarbleRim)" />
      <ellipse cx="210" cy="38" rx="205" ry="29" fill="url(#whyMarbleTop)" />
      <g stroke="#a39a8c" strokeWidth="1.2" opacity="0.4" fill="none" strokeLinecap="round">
        <path d="M60 30 Q140 12 220 28 T380 20" />
        <path d="M90 48 Q160 38 230 48" />
        <path d="M260 22 Q300 34 340 24" />
        <path d="M50 40 Q70 46 95 42" />
      </g>
      <ellipse cx="160" cy="20" rx="70" ry="9" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-10 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-tiptop-yellow/60 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-tiptop-navy shadow-sm">
            <Popcorn className="h-4 w-4 text-tiptop-yellow" strokeWidth={2.2} />
            Why Choose Us
          </span>

          <h2 className="relative mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="text-slate-900">Why </span>
            <span className="text-blue-600">Choose Us?</span>
            <Sparkles
              aria-hidden
              className="absolute -right-2 -top-5 h-8 w-8 text-tiptop-yellow sm:-right-4"
              strokeWidth={2}
            />
          </h2>

          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/60">
            We make popcorn that&apos;s not just tasty, but better in every
            way.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-tiptop-yellow/70" />
            <Popcorn className="h-4 w-4 text-ink/70" strokeWidth={2} />
            <span className="h-px w-10 bg-tiptop-yellow/70" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
              <div key={title} className="flex items-start gap-3.5">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconBg}`}
                >
                  <Icon className="h-6 w-6" style={{ color: iconColor }} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 font-body text-sm leading-snug text-ink/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex items-center gap-4 rounded-2xl border-2 border-dashed border-tiptop-yellow/50 px-6 py-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50">
              <Popcorn className="h-6 w-6 text-tiptop-yellow" strokeWidth={2} />
            </span>
            <p className="font-body text-sm text-ink/60">
              <span className="block font-display text-base font-bold text-blue-600">
                Great Taste. Great Quality. Every Time.
              </span>
              <span className="mt-0.5 inline-flex items-center gap-1">
                That&apos;s our promise to you!
                <Heart className="h-3.5 w-3.5 text-popred" fill="currentColor" />
              </span>
            </p>
          </div>
        </div>

        {/* Right: product visual */}
        <div className="relative">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] sm:aspect-[5/5.5]"
            style={{
              background:
                "linear-gradient(135deg, #f8f4ec 0%, #f1ece1 55%, #e9e2d3 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-emerald-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-16 h-48 w-48 rounded-full bg-amber-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 top-1/3 h-40 w-40 rounded-full bg-tiptop-yellow/10 blur-3xl" />

            <Popcorn className="pointer-events-none absolute bottom-24 left-10 h-9 w-9 rotate-[-15deg] text-amber-200/80" />
            <Popcorn className="pointer-events-none absolute bottom-14 right-14 h-7 w-7 rotate-12 text-amber-200/70" />
            <Popcorn className="pointer-events-none absolute bottom-32 right-8 h-6 w-6 rotate-6 text-amber-100/80" />

            <div className="relative flex h-full flex-col items-center justify-end pb-16 pt-14">
              <div className="flex items-end justify-center">
                <img
                  src="/products/1.webp"
                  alt="Crispy Crunchy Popcorn Butter Flavour"
                  className="-mr-7 h-44 w-auto -rotate-[10deg] object-contain drop-shadow-xl sm:h-52"
                />
                <img
                  src="/products/2.webp"
                  alt="Mera PopCorn Classic Salted"
                  className="relative z-10 h-64 w-auto object-contain drop-shadow-2xl sm:h-72"
                />
                <img
                  src="/products/4.webp"
                  alt="Pop Corn Classic Salted"
                  className="-ml-7 h-44 w-auto rotate-[10deg] object-contain drop-shadow-xl sm:h-52"
                />
              </div>
              <div className="-mt-1 h-4 w-72 rounded-full bg-black/20 blur-md" />
              <MarbleDisc className="-mt-3 h-12 w-[22rem] sm:h-14 sm:w-[26rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
