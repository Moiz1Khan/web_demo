"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#calculator", label: "Calculator", dropdown: false },
  { href: "#rates", label: "Rates", dropdown: true },
  { href: "#process", label: "Process", dropdown: false },
  { href: "#faq", label: "FAQ", dropdown: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center shrink-0 px-3 py-2 rounded-lg bg-white text-black font-bold text-lg"
        >
          NexHome
        </Link>

        <nav className="hidden md:flex items-center navbar-pill rounded-full px-2 py-1.5 border border-white/20 shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-5 py-2.5 text-white font-semibold text-sm hover:bg-white/10 rounded-full transition-colors"
            >
              {link.label}
              {link.dropdown && <ChevronDown className="size-4" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <Link
            href="#calculator"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shine-sweep"
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mx-4 mb-4 rounded-2xl px-4 py-4 navbar-pill">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-white font-semibold rounded-xl hover:bg-white/10"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="size-4" />}
              </Link>
            ))}
            <Link
              href="#calculator"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg bg-white text-black font-semibold text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
