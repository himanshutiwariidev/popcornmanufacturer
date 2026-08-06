import {
  BadgeCheck,
  Factory,
  Globe,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  PenLine,
  Package,
  Tag,
  ArrowRight,
} from "lucide-react";

const STATS = [
  { icon: BadgeCheck, label: "35+ Years\nExperience" },
  { icon: Factory, label: "State-of-the-art\nManufacturing" },
  { icon: Globe, label: "Worldwide\nSupply" },
];

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "info@tiptopfoodtech.com" },
  { icon: Phone, label: "Phone", value: "+91 98106 37185" },
  { icon: MapPin, label: "Address", value: " D-12, Sector 2  Bawana Industrial Area, DSIIDC Delhi – 110039 " },
];

const TAGS = [
  { icon: Package, label: "Bulk orders" },
  { icon: Tag, label: "Private label" },
  { icon: Globe, label: "Export" },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-neutral-50 py-10">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: copy + contact details */}
        <div>
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-popred">
            Get in touch
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            Let&apos;s put your
            <br className="hidden sm:block" /> product on shelf.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/60">
            Share the brief and our team will come back with timelines and
            pricing — typically within one business day.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
            {STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-popred/30 text-popred">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="whitespace-pre-line font-body text-sm font-semibold leading-tight text-ink">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 border-t border-ink/10 pt-8">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-popred text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink/45">
                    {label}
                  </p>
                  <p className="mt-0.5 font-body text-sm font-medium text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-xl sm:p-10">
          <form>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-ink/50"
                >
                  Full name
                </label>
                <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-ink/15 px-4 py-3 transition-colors focus-within:border-popred">
                  <User className="h-4 w-4 shrink-0 text-ink/35" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/35 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-ink/50"
                >
                  Company
                </label>
                <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-ink/15 px-4 py-3 transition-colors focus-within:border-popred">
                  <Building2 className="h-4 w-4 shrink-0 text-ink/35" />
                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/35 focus:outline-none"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-ink/50"
                >
                  Email
                </label>
                <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-ink/15 px-4 py-3 transition-colors focus-within:border-popred">
                  <Mail className="h-4 w-4 shrink-0 text-ink/35" />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/35 focus:outline-none"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-ink/50"
                >
                  What do you need?
                </label>
                <div className="mt-2 flex items-start gap-2.5 rounded-xl border border-ink/15 px-4 py-3 transition-colors focus-within:border-popred">
                  <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-ink/35" />
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Order volume, flavour, packaging, target market..."
                    className="w-full resize-none bg-transparent font-body text-sm text-ink placeholder:text-ink/35 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {TAGS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-body text-sm font-medium text-ink/70"
                >
                  <Icon className="h-4 w-4 text-popred" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-popred px-6 py-4 font-body text-sm font-bold text-paper transition-colors hover:bg-popred-dark"
            >
              Send enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
