const partners = [
  "/Kendriya Bhandhar.png",
  "/Central Police Canteen.png",
  "/Northern Railway.png",
  "/NAFED Logo.png",
  "/IRCTC Logo.png",
  "/HAFED LOGO IMAGE.png",
];

const PartnerSection = () => {
  return (
    <section id="partners" className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Border */}
        <div className="h-[3px] mb-8 bg-ink/10"></div>

        {/* Heading */}
        <h2 className="text-center md:text-left text-xl md:text-4xl md:font-extrabold font-semibold uppercase mb-12 font-display text-ink">
          Our Prestigious Institutional Retail Partners
        </h2>

        {/* Logo Slider */}
        <div className="group relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

          <div className="flex w-max animate-marquee gap-16 items-center group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-xl border border-ink/10 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-20 md:h-24 object-contain w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-[3px] mt-10 bg-ink/10"></div>
      </div>
    </section>
  );
};

export default PartnerSection;
