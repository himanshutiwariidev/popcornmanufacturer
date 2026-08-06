import { Boxes, Tag, Globe, Sparkles } from "lucide-react";

const OFFERS = [
  {
    icon: Boxes,
    iconBg: "bg-amber-50",
    iconColor: "#D69A1F",
    title: "Bulk Supply",
    desc: "For retailers, cinemas, canteens, and institutional buyers who need reliable, repeat stock.",
  },
  {
    icon: Tag,
    iconBg: "bg-blue-50",
    iconColor: "#2E6FE0",
    title: "Private Label Manufacturing",
    desc: "Want popcorn under your own brand? We handle flavour formulation, packaging, and production so you can focus on selling, not producing.",
  },
  {
    icon: Globe,
    iconBg: "bg-emerald-50",
    iconColor: "#1F9D5A",
    title: "Export-Ready Packing",
    desc: "Built to meet international hygiene and packaging standards, not just domestic ones.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-rose-50",
    iconColor: "#E0473F",
    title: "Custom Flavours",
    desc: "Built around what your customers actually want, not a fixed catalogue.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-popred">
            What we offer
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            What We Offer
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2">
          {OFFERS.map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon className="h-6 w-6" style={{ color: iconColor }} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink/65">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
