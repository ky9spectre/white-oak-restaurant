"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hours", label: "Hours & Location" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md animate-fadeInDown">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl text-white tracking-wide">
          White Oak<span className="text-brass">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-brass text-sm tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919911611916"
            className="flex items-center gap-2 bg-brass text-dark px-5 py-2 text-sm font-semibold tracking-wide hover:bg-brass-light transition-colors"
          >
            <Phone size={14} />
            +91 9911611916
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark/98 border-t border-white/10 px-6 py-4 animate-fadeIn">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/70 hover:text-brass text-sm tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919911611916"
            className="mt-4 block text-center bg-brass text-dark px-5 py-3 text-sm font-semibold tracking-wide"
          >
            +91 9911611916
          </a>
        </div>
      )}
    </header>
  );
}
