"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Mail, MapPin } from "lucide-react";

const FAQS = [
  {
    q: "Who is the best popcorn manufacturer in Delhi?",
    a: "TipTop Food Tech is one of the most established popcorn manufacturers in Delhi, operating since 1991 with supply partnerships including IRCTC, Northern Railway, NAFED, and brands like Haldiram and Bikaji.",
  },
  {
    q: "Where is TipTop Food Tech's manufacturing unit located?",
    a: "Our facility is in Bawana Industrial Area, DSIIDC, Delhi – 110039, with 2 manufacturing units currently in operation.",
  },
  {
    q: "Is TipTop popcorn healthy?",
    a: "Yes. It's air-popped rather than deep fried, which keeps it lower in fat, and it's naturally gluten-free.",
  },
  {
    q: "Does TipTop Food Tech supply for export?",
    a: "Yes, our packing and hygiene standards are built to meet export requirements in addition to domestic supply.",
  },
  {
    q: "What popcorn flavours and product lines does TipTop Food Tech make?",
    a: "We manufacture 25+ varieties across product lines like Crispy Crunchy, Mera PopCorn, and Tip Top Popcorn, including salted, butter, cheese, and caramel flavours.",
  },
  {
    q: "Which big brands has TipTop Food Tech worked with?",
    a: "We've worked as an OEM manufacturing partner for brands including Haldiram, Bikanervala, Bikaji, Yellow Diamond, 24 Seven, and Babaji.",
  },
  {
    q: "Who is the best popcorn manufacturer near me in Delhi NCR?",
    a: "For businesses in Delhi NCR, TipTop Food Tech is a strong choice — our manufacturing unit is based in Bawana Industrial Area, Delhi, which means shorter lead times and easier coordination for local retailers, distributors, and event businesses.",
  },
  {
    q: "Where can I buy popcorn in bulk directly from a manufacturer?",
    a: "You can buy popcorn in bulk directly from TipTop Food Tech's factory in Bawana Industrial Area, Delhi, by calling +91 98106 37185 or emailing info@tiptopfoodtech.com — this skips wholesaler markups since you're buying straight from the manufacturer.",
  },
  {
    q: "Which popcorn manufacturer supplies to big brands like Haldiram or Bikaji?",
    a: "TipTop Food Tech has worked as an OEM (private manufacturing) partner for major snack brands including Haldiram, Bikanervala, Bikaji, Yellow Diamond, 24 Seven, and Babaji, producing popcorn to their brand specifications.",
  },
  {
    q: "Where is a popcorn manufacturer's product actually used?",
    a: "A popcorn manufacturer's products are used across many places — movie theatres and multiplexes, retail and grocery stores, government and institutional canteens, corporate offices, events and parties, restaurants and cafes, and by distributors who supply popcorn further down the retail chain. TipTop Food Tech's popcorn is currently used across all these channels, including institutional supply to IRCTC and Northern Railway.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-bold text-ink sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-popred transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2.2}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="font-body text-sm leading-relaxed text-ink/65 sm:text-base">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-neutral-50 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-tiptop-yellow/60 bg-white px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.15em] text-tiptop-navy shadow-sm">
            <HelpCircle className="h-4 w-4 text-tiptop-yellow" strokeWidth={2.2} />
            FAQs
          </span>
          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-2 border-dashed border-tiptop-yellow/50 px-6 py-6 text-center">
          <h3 className="font-display text-lg font-bold text-slate-900">
            Get in Touch
          </h3>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-body text-sm text-ink/70">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-popred" strokeWidth={2} />
              +91 98106 37185
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-popred" strokeWidth={2} />
              info@tiptopfoodtech.com
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-popred" strokeWidth={2} />
              Bawana Industrial Area, DSIIDC, Delhi – 110039
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
