const brands = [
  {
    name: "Haldiram",
    logo: "/Haldiram Logo.png",
  },
  {
    name: "Bikanervala",
    logo: "/Bikarnervala Logo.png",
  },
  {
    name: "Yellow Diamond",
    logo: "/Diamond Logo.png",
  },
  {
    name: "24 Seven",
    logo: "/24 Seven Logo.png",
  },
  {
    name: "Bikaji",
    logo: "/Bika ji Logo.png",
  },
  {
    name: "Babaji",
    logo: "/babaji.png",
  },
];

const OEMBrandsSection = () => {
  return (
    <section id="oem" className="py-10 bg-white">
      <div className="max-w-full mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-popred/30 px-5 py-2 font-semibold text-popred">
            OEM Partners
          </span>

          <h2 className="font-display text-2xl md:text-4xl font-semibold md:font-bold mt-5 text-ink">
            Trusted By Industry Leaders
          </h2>

          <p className="max-w-6xl mx-auto mt-4 text-lg text-ink/65">
            TIP TOP proudly associates with renowned OEM brands, delivering
            quality products and trusted manufacturing partnerships across India.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-ink/10 bg-white p-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="h-32 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-24 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OEMBrandsSection;
