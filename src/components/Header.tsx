"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "#process", label: "Features", dropdown: true },
  { href: "#calculator", label: "Solutions", dropdown: true },
  { href: "#faq", label: "Resources", dropdown: true },
  { href: "#rates", label: "Rates", dropdown: false },
  { href: "#calculator", label: "Calculator", dropdown: false },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overVideo = !scrolled;
  const navBg = overVideo ? "bg-white/10 backdrop-blur-md border-white/20" : "bg-[#e7edf5]/95 backdrop-blur-md border-gray-200/60 shadow-lg";
  const textClass = overVideo ? "text-white" : "text-foreground";
  const logoBg = overVideo ? "bg-black" : "bg-foreground";
  const logoText = overVideo ? "text-white" : "text-background";
  const linkHover = overVideo ? "hover:bg-white/10" : "hover:bg-black/5";
  const btnClass = overVideo
    ? "bg-[#28303a] text-white border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:bg-[#323d48] hover:shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
    : "bg-[#28303a] text-white border-transparent shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:bg-[#323d48] hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 pt-4">
      <nav className={`max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-2xl border transition-all duration-300 ${navBg}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${logoBg}`}>
            <span className={`font-bold text-sm ${logoText}`}>N</span>
          </div>
          <span className={`font-bold text-lg ${textClass}`}>NexHome</span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-0.5 px-4 py-2 font-medium text-sm rounded-lg transition-colors ${textClass} ${linkHover}`}
            >
              {link.label}
              {link.dropdown && <ChevronDown className={`size-4 ${overVideo ? "text-white/80" : "text-muted-foreground"}`} />}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/admin" className={`hidden sm:inline font-medium text-sm hover:opacity-80 transition-opacity ${textClass}`}>
            Log In
          </Link>
          <Link href="#calculator" className={`hidden sm:inline-flex px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-white hover:shadow transition-all ${btnClass}`}>
            Get started
          </Link>
          <button className="lg:hidden p-2 -mr-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className={`size-5 ${textClass}`} /> : <Menu className={`size-5 ${textClass}`} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`lg:hidden mt-2 mx-0 rounded-2xl px-4 py-4 backdrop-blur-md border transition-all ${overVideo ? "bg-white/10 border-white/20" : "bg-[#e7edf5]/95 border-gray-200/60"}`}>
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 font-medium rounded-xl ${textClass} ${linkHover}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown className={`size-4 ${overVideo ? "text-white/80" : "text-muted-foreground"}`} />}
              </Link>
            ))}
            <div className={`border-t my-2 ${overVideo ? "border-white/20" : "border-gray-300/50"}`} />
            <Link href="/admin" onClick={() => setMobileOpen(false)} className={`px-4 py-3 font-medium ${textClass}`}>
              Log In
            </Link>
            <Link href="#calculator" onClick={() => setMobileOpen(false)} className="mt-2 px-5 py-3 rounded-full bg-[#28303a] text-white font-semibold text-center shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:bg-[#323d48]">
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
