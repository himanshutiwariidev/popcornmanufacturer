import { Fraunces, Manrope, Baloo_2 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://popcornmanufacturer.com"),
  title: "TipTop Food Tech | Popcorn Manufacturer in Delhi",
  description:
    "TipTop Food Tech is a popcorn manufacturer in Delhi trusted by IRCTC, Haldiram and Bikaji. 30+ years, FSSAI certified, 25+ flavours, bulk & private label supply.",
    keywords: [
      "Popcorn Manufacturer",
      "Popcorn Manufacturer in Delhi",
      ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "qk6UXRH1PQGtlDTj7uhn6Im3GvleFgNvhyzmOKexcf0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${baloo.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
