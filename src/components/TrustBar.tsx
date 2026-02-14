"use client";

import { motion } from "framer-motion";
import { LogoCarousel } from "./LogoCarousel";
import { images } from "@/lib/media";

const pressLogoItems = [
  { name: "Arabian Business", src: images.pressLogos[0] },
  { name: "The National", src: images.pressLogos[1] },
  { name: "Gulf News", src: images.pressLogos[2] },
  { name: "Entrepreneur", src: images.pressLogos[3] },
  { name: "Construction Week", src: images.pressLogos[4] },
  { name: "Wamda", src: images.pressLogos[5] },
];

const stats = [
  { value: "12,847", label: "Home Loans Approved" },
  { value: "15+", label: "UAE Banks" },
  { value: "200+", label: "Partner Agents" },
  { value: "2,400", label: "Self-Employed Approved" },
];

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 border-b border-border/50 bg-[#0a0a12]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-6">
          As featured in
        </p>
        <LogoCarousel items={pressLogoItems} className="mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
