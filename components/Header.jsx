"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Products",
      href: "#product-showcase",
    },
    {
      title: "OEM",
      href: "#oem",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* Top Bar */}

      <div className="bg-yellow-400 text-black">
        <div className="container mx-auto px-5">

          <div className="flex flex-wrap items-center justify-between gap-3 py-2 text-sm">

            <div className="flex flex-wrap items-center gap-6">



              <div className="flex items-center gap-2">
                <Mail size={15} />
                <span>info@tiptopfoodtech.com</span>
              </div>


            </div>

            <div className="flex items-center gap-5">
              <span className="hidden md:block">
                Since 1991
              </span>

              <span className="font-semibold">
                <span className="hidden sm:inline">
                  Distributor Enquiry :
                </span>{" "}
                +91 9810637185
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Navbar */}

      <header className="sticky top-0 z-50 bg-[#FFF8EC] shadow-md">

        <div className="container mx-auto">

          <div className="flex items-center justify-between px-5 py-2">

            {/* Logo */}

            <Link href="/" className="flex items-center">

              <Image
                src="/logo.png"
                width={130}
                height={20}
                alt="Tip Top"
              />

            </Link>

            {/* Desktop */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="font-medium text-gray-800 transition hover:text-red-700"
                >
                  {item.title}
                </Link>
              ))}

            </nav>

            {/* CTA */}

            <div className="hidden lg:flex">

              <Link
                href="#contact"
                className="rounded-full bg-[#B11B1F] px-7 py-3 font-semibold text-white transition hover:bg-[#8B1115]"
              >
                Become Distributor
              </Link>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t bg-white lg:hidden">

            <div className="flex flex-col">

              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="border-b px-5 py-4"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="#contact"
                className="m-5 rounded-full bg-[#B11B1F] py-3 text-center font-semibold text-white"
              >
                Become Distributor
              </Link>

            </div>

          </div>
        )}

      </header>
    </>
  );
}