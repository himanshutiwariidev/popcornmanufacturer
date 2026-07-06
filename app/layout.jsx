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
  title: "TipTop Kernels | Popcorn Manufacturer & Private Label Partner",
  description:
    "Bulk and private-label popcorn manufacturing — from kernel sourcing to flavour, packing and export. FSSAI, ISO and HACCP certified production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${baloo.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
