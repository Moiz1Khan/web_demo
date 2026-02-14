import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Residential Finance | Home Loans in Dubai & UAE",
  description:
    "Stop paying rent. Own your Dubai home with just 20% down. 12,847 home loans approved since 2015. Purchase, refinance & renovation loans from 15+ UAE banks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased noise-overlay`}
        suppressHydrationWarning
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");var s=t||"dark";document.documentElement.classList.toggle("dark",s==="dark");document.documentElement.classList.add("starlight");})();`,
          }}
        />
        <Script
          id="strip-extension-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){function r(){document.querySelectorAll("[fdprocessedid]").forEach(function(e){e.removeAttribute("fdprocessedid")})}r();if(document.readyState!=="loading")r();else document.addEventListener("DOMContentLoaded",r);setTimeout(r,50);setTimeout(r,200);var o=new MutationObserver(r);o.observe(document.documentElement,{attributes:!0,attributeFilter:["fdprocessedid"],subtree:!0});window.addEventListener("load",function(){setTimeout(r,100)})})();`,
          }}
        />
        <ThemeProvider>
          <div className="fixed inset-0 pointer-events-none z-0 orb-glow" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
