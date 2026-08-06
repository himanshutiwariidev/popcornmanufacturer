import { Clapperboard, Store, Landmark, Truck, Handshake } from "lucide-react";

const BUYERS = [
  { icon: Clapperboard, label: "Movie theatres and multiplexes" },
  { icon: Store, label: "Retail and grocery stores" },
  { icon: Landmark, label: "Government and institutional canteens" },
  { icon: Truck, label: "Distributors and wholesalers across India" },
  { icon: Handshake, label: "Brands looking for a private label manufacturing partner" },
];

export default function WhoBuysFromUs() {
  return (
    <section id="who-buys" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-popred">
            Our buyers
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Who Buys From Us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUYERS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-popred/10 text-popred">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="font-body text-sm font-semibold leading-snug text-ink">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
