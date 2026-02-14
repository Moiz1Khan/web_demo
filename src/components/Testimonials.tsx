"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { images } from "@/lib/media";

const testimonials = [
  {
    quote:
      "They got me approved in 10 days when three other banks said no. Absolutely recommend.",
    name: "James M.",
    role: "Self-Employed Consultant",
    avatar: images.team[0],
  },
  {
    quote:
      "I was still on probation but they found a way. Now I own my apartment instead of renting.",
    name: "Sarah K.",
    role: "Marketing Manager",
    avatar: images.team[1],
  },
  {
    quote:
      "Best rates from 15 banks. The process was smooth and they updated me every step.",
    name: "Omar A.",
    role: "Software Engineer",
    avatar: images.team[2],
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a0a12]" data-reveal>
      <div className="absolute inset-0">
        <Image
          src={images.testimonialBg}
          alt=""
          fill
          className="object-cover brightness-110 contrast-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a12]/55" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tried. Tested. Trusted.
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-6 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Powered by Google</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8" data-stagger>
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              data-stagger-item
              className="border-gradient-wrap shine-sweep bg-card/95 backdrop-blur border border-border rounded-2xl p-6 overflow-hidden"
            >
              <Quote className="size-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-6">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
