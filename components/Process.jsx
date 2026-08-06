const STEPS = [
  {
    step: "01",
    title: "Sourcing",
    desc: "We hand-pick corn based on size, moisture, and popping expansion, since a bad kernel batch ruins the whole line.",
  },
  {
    step: "02",
    title: "Cleaning & Grading",
    desc: "Every batch is cleaned and graded before it enters production.",
  },
  {
    step: "03",
    title: "Air-Popping",
    desc: "We use air-popping technology instead of deep frying, which is what keeps our popcorn light, crispy, and lower in fat.",
  },
  {
    step: "04",
    title: "Flavouring",
    desc: "Butter, salt, cheese, caramel — each seasoning is applied fresh, in-house.",
  },
  {
    step: "05",
    title: "Hygienic Packing",
    desc: "Packed in moisture-proof, food-grade material to lock in crunch till it reaches the shelf.",
  },
  {
    step: "06",
    title: "Quality Checks",
    desc: "Every stage runs under FSSAI, ISO, and HACCP standards, not just the final product.",
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
            How We Manufacture — From Kernel to Pack
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {STEPS.map((item) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
