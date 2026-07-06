import { Popcorn, Leaf, Medal, Cloud, Wheat, Sparkles, Smile, Star, Milk, Eye, Heart } from "lucide-react";

function mixColor(hex, target, amount) {
  const clean = (c) => c.replace("#", "");
  const h = clean(hex);
  const t = clean(target);
  const r1 = parseInt(h.substring(0, 2), 16);
  const g1 = parseInt(h.substring(2, 4), 16);
  const b1 = parseInt(h.substring(4, 6), 16);
  const r2 = parseInt(t.substring(0, 2), 16);
  const g2 = parseInt(t.substring(2, 4), 16);
  const b2 = parseInt(t.substring(4, 6), 16);
  const blend = (a, b) => Math.round(a + (b - a) * amount);
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(blend(r1, r2))}${toHex(blend(g1, g2))}${toHex(blend(b1, b2))}`;
}

function MarblePedestal({ uid, accent, className = "" }) {
  const topId = `marbleTop-${uid}`;
  const rimId = `marbleRim-${uid}`;

  const topLight = mixColor(accent, "#ffffff", 0.94);
  const topMid = mixColor(accent, "#ffffff", 0.8);
  const topEdge = mixColor(accent, "#ffffff", 0.6);
  const rimLight = mixColor(accent, "#ffffff", 0.55);
  const rimDark = mixColor(accent, "#ffffff", 0.32);
  const veinColor = mixColor(accent, "#ffffff", 0.4);

  return (
    <svg viewBox="0 0 240 70" className={className} aria-hidden>
      <defs>
        <radialGradient id={topId} cx="50%" cy="26%" r="75%">
          <stop offset="0%" stopColor={topLight} />
          <stop offset="45%" stopColor={topMid} />
          <stop offset="78%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={topEdge} />
        </radialGradient>
        <linearGradient id={rimId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={rimLight} />
          <stop offset="100%" stopColor={rimDark} />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="42" rx="115" ry="24" fill={`url(#${rimId})`} />
      <ellipse cx="120" cy="30" rx="115" ry="23" fill={`url(#${topId})`} />
      <g stroke={veinColor} strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round">
        <path d="M35 26 Q80 15 120 24 T208 19" />
        <path d="M52 38 Q90 32 132 38" />
        <path d="M148 19 Q170 28 192 21" />
        <path d="M30 33 Q45 37 62 34" />
      </g>
      <ellipse cx="92" cy="18" rx="42" ry="7" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}

function Badge({ text, color }) {
  const words = text.split(" ");
  return (
    <div
      className="absolute left-3 top-3 z-20 flex h-16 w-16 -rotate-12 flex-col items-center justify-center rounded-full text-center text-[10px] font-extrabold uppercase leading-tight text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );
}

const SHOWCASE = [
  {
    img: "/products/1.webp",
    name: "Crispy Crunchy",
    flavour: "Butter Flavour",
    badge: { text: "Best Seller", color: "#E11D2E" },
    accent: "#C8860D",
    cardBg: "linear-gradient(180deg, #FDF1D6 0%, #FFFFFF 62%)",
    buttonBg: "linear-gradient(90deg, #F6B93B, #D98E04)",
    features: [
      { icon: Popcorn, label: "Crispy & Crunchy" },
      { icon: Leaf, label: "Goodness of Corn" },
      { icon: Medal, label: "Premium Quality" },
    ],
  },
  {
    img: "/products/2.webp",
    name: "Mera PopCorn",
    flavour: "Classic Salted",
    accent: "#1D3E9C",
    cardBg: "linear-gradient(180deg, #E8EFFC 0%, #FFFFFF 62%)",
    buttonBg: "linear-gradient(90deg, #2A4FC0, #14205C)",
    features: [
      { icon: Leaf, label: "Light & Tasty" },
      { icon: Cloud, label: "Air Popped" },
      { icon: Wheat, label: "Gluten Free" },
    ],
  },
  {
    img: "/products/3.webp",
    name: "Tip Top Popcorn",
    flavour: "Salted",
    badge: { text: "New Pack", color: "#1580D6" },
    accent: "#1591C9",
    cardBg: "linear-gradient(180deg, #E3F4FC 0%, #FFFFFF 62%)",
    buttonBg: "linear-gradient(90deg, #3BB2E3, #1580B8)",
    features: [
      { icon: Sparkles, label: "Perfectly Salted" },
      { icon: Smile, label: "Authentic Taste" },
      { icon: Star, label: "Extra Crunch" },
    ],
  },
  {
    img: "/products/4.webp",
    name: "Pop Corn",
    flavour: "Classic Salted",
    accent: "#0E8E7D",
    cardBg: "linear-gradient(180deg, #E2F5F1 0%, #FFFFFF 62%)",
    buttonBg: "linear-gradient(90deg, #2CAE9B, #0E7A6B)",
    features: [
      { icon: Popcorn, label: "Crispy Bites" },
      { icon: Cloud, label: "Air Popped" },
      { icon: Medal, label: "Export Quality" },
    ],
  },
  {
    img: "/products/5.webp",
    name: "Pop Corn",
    flavour: "Butter Flavour",
    accent: "#f1df1b",
    cardBg: "linear-gradient(180deg, #fcf9e7 0%, #FFFFFF 62%)",
    buttonBg: "linear-gradient(90deg, #ffdc3e, #eece32)",
    features: [
      { icon: Milk, label: "Rich Butter Taste" },
      { icon: Popcorn, label: "Crispy & Delicious" },
      { icon: Medal, label: "Premium Quality" },
    ],
  },
];

export default function ProductShowcase() {
  return (
    <section id="product-showcase" className="relative overflow-hidden bg-white py-10">
      <div className="mx-auto max-w-8xl px-6 lg:px-5">
        <div className=" text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-popred">
            The full range
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Every pack, straight off our line.
          </h2>
          <p className="mt-4 font-body text-base text-ink/70">
            Real packaging, real flavours — a look at what ships out of our
            facility every day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SHOWCASE.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ backgroundImage: item.cardBg }}
            >
              {item.badge && <Badge text={item.badge.text} color={item.badge.color} />}

              <div className="flex h-44 items-center justify-center pt-8">
                <img
                  src={item.img}
                  alt={`${item.name} ${item.flavour}`}
                  className="h-40 w-auto object-contain drop-shadow-2xl"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="h-3 w-44 rounded-full bg-black/20 blur-md" />
                <MarblePedestal uid={i} accent={item.accent} className="-mt-2 h-9 w-72" />
              </div>

              <div className="mt-3 px-5 text-center">
                <h3 className="font-display text-base font-extrabold uppercase leading-tight tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 font-body text-sm font-bold" style={{ color: item.accent }}>
                  {item.flavour}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 px-3">
                {item.features.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                    <Icon className="h-5 w-5" style={{ color: item.accent }} strokeWidth={2} />
                    <p className="font-body text-[10.5px] leading-tight text-ink/70">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto px-5 pb-6 pt-6">
                <a
                  href="#contact"
                  className="relative flex items-center justify-center rounded-full py-3 pl-6 pr-14 font-body text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: item.buttonBg }}
                >
                 Get in Touch
                  <span
                    className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-white"
                    style={{ color: item.accent }}
                  >
                    <Eye className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-ink/10 bg-white px-8 py-4 shadow-sm">
            <span className="flex items-center gap-2 font-body text-sm font-medium text-ink/80">
              <Heart className="h-4 w-4 text-popred" fill="currentColor" />
              Made with love
            </span>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span className="font-body text-sm font-medium text-ink/80">
              100% Quality Ingredients
            </span>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" />
            <span className="font-body text-sm font-medium text-ink/80">Loved by Everyone</span>
          </div>
        </div>
      </div>
    </section>
  );
}
