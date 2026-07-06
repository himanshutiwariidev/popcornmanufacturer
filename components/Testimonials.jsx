"use client";

import { Quote, Star } from "lucide-react";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote:
      "We've been sourcing popcorn from TipTop for over two years. The kernel quality, popping ratio, and on-time deliveries have been consistently excellent. Our customers notice the difference.",
    name: "Rahul Sharma",
    role: "Owner, Delhi Popcorn & Snacks",
    platform: "google",
  },
  {
    quote:
      "The taste and freshness are outstanding. Whether it's butter, cheese, or caramel popcorn, every batch meets our quality standards. A reliable manufacturing partner for our business.",
    name: "Priya Patel",
    role: "Director, Snack Hub Foods, Ahmedabad",
    platform: "facebook",
  },
  {
    quote:
      "TipTop delivers premium-quality popcorn with excellent packaging and competitive pricing. Their professionalism and consistent product quality have made them our preferred supplier.",
    name: "Amit Verma",
    role: "Procurement Manager, Multiplex Snacks India",
    platform: "instagram",
  },
];
const platformData = {
  google: {
    icon: <FaGoogle className="text-[#4285F4]" size={18} />,
    label: "Google Review",
    bg: "bg-[#4285F4]/10",
  },
  facebook: {
    icon: <FaFacebookF className="text-[#1877F2]" size={18} />,
    label: "Facebook Review",
    bg: "bg-[#1877F2]/10",
  },
  instagram: {
    icon: <FaInstagram className="text-[#E4405F]" size={18} />,
    label: "Instagram Review",
    bg: "bg-[#E4405F]/10",
  },
};

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-20">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-200/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-popred/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-popred">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold text-ink md:text-4xl">
            Trusted by Businesses Across India 
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From retail brands to international distributors, our partners rely
            on TipTop for consistent quality, reliable delivery, and exceptional
            service.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-popred/20 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 opacity-10 transition duration-300 group-hover:rotate-12 group-hover:scale-125">
                <Quote className="h-20 w-20 text-popred" />
              </div>

              {/* Platform Badge */}
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${platformData[item.platform].bg}`}
              >
                {platformData[item.platform].icon}

                <span className="text-sm font-semibold text-gray-700">
                  {platformData[item.platform].label}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-lg leading-8 text-gray-700">
                "{item.quote}"
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                <div>
                  <h4 className="text-lg font-semibold text-ink">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">{item.role}</p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}