const STEPS = [
  {
    step: "01",
    title: "Sourcing",
    desc: "Butterfly & mushroom kernels graded on moisture and pop-rate before intake.",
  },
  {
    step: "02",
    title: "Popping",
    desc: "Hot-air and oil popping lines run to a fixed expansion ratio per batch.",
  },
  {
    step: "03",
    title: "Flavouring",
    desc: "Seasoning applied while warm for even coating across the batch.",
  },
  {
    step: "04",
    title: "Packing",
    desc: "Nitrogen-flushed packs sealed on-site to lock in crunch and shelf life.",
  },
  {
    step: "05",
    title: "Dispatch",
    desc: "Batch-coded cartons palletised and routed to retail, cinema or export.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-popred">
            How it&apos;s made
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Kernel to bag in five tracked stages.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((item, i) => (
            <div key={item.step} className="relative">
              <p className="font-display text-5xl font-bold text-ink/10">
                {item.step}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-butter-dark">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                {item.desc}
              </p>
              {i < STEPS.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-ink/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
