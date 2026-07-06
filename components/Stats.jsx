const STATS = [
  { value: "12+", label: "Years in production" },
  { value: "40+", label: "Flavours developed" },
  { value: "18", label: "Countries exported to" },
  { value: "6M+", label: "Packs shipped / year" },
];

export default function Stats() {
  return (
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-display text-3xl font-bold text-butter-dark sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 font-body text-sm font-medium text-ink/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
