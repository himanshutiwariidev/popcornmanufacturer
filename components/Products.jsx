const PRODUCTS = [
  {
    name: "Crispy Crunchy Popcorn",
    flavour: "Butter Flavour",
    desc: "Golden, air-popped kernels finished with a rich butter flavour — our movie-time favourite. Source of fibre and 100% gluten free.",
    img: "/products/1.webp",
  },
  {
    name: "Mera PopCorn",
    flavour: "Classic Salted",
    desc: "Crispy, crunchy kernels with a classic salted finish. Air-popped, not fried, and completely gluten free.",
    img: "/products/2.webp",
  },
  {
    name: "Tip Top Popcorn",
    flavour: "Salted",
    desc: "Light, crispy salted popcorn with a taste everyone calls \"Chokho Hai.\" Air-popped for a guilt-free crunch.",
    img: "/products/3.webp",
  },
  {
    name: "Pop Corn",
    flavour: "Classic Salted",
    desc: "Export-quality classic salted popcorn — air-popped, gluten free and finger-licking good.",
    img: "/products/4.webp",
  },
  {
    name: "Pop Corn",
    flavour: "Butter Flavour",
    desc: "Rich butter flavour popcorn, air-popped not fried, crafted for a tasty and healthy snacking experience.",
    img: "/products/5.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-popred">
            What we produce
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Five flavour lines. One production standard.
          </h2>
          <p className="mt-4 font-body text-base text-ink/70">
            Every line below is available in retail packs, catering bulk
            bags, or a formulation built to your brief.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <div
              key={`${product.name}-${i}`}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-neutral-50">
                <img
                  src={product.img}
                  alt={`${product.name} ${product.flavour}`}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {product.name}
                </h3>
                <p className="mt-0.5 font-body text-xs font-bold uppercase tracking-wide text-popred">
                  {product.flavour}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                  {product.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-bold text-popred"
                >
                  Enquire
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
