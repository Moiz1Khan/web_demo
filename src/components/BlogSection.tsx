"use client";

import Image from "next/image";
import MagicBento from "./MagicBento";
import { images } from "@/lib/media";

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Latest from our blog
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Expert insights on UAE mortgages, market trends, and home buying tips.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-10 lg:gap-12 items-center">
          {/* Left: Stylish image (smaller) */}
          <div className="relative order-1 lg:order-1 lg:max-w-[360px]">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[400px] lg:max-h-[420px] group">
              <Image
                src={images.blog[0]}
                alt="First-time buyer guide - Dubai home loans"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              {/* Gradient overlay - subtle, dark at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent opacity-80"
                aria-hidden
              />
              {/* Subtle purple glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-[rgba(132,0,255,0.4)] transition-all duration-500 pointer-events-none"
                aria-hidden
              />
            </div>
            {/* Decorative accent - floating corner */}
            <div
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border border-white/10 bg-[#0a0a12]/60 backdrop-blur-sm -z-10"
              aria-hidden
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border border-[rgba(132,0,255,0.3)] bg-[rgba(132,0,255,0.05)] -z-10"
              aria-hidden
            />
          </div>

          {/* Right: Bento grid */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <MagicBento
              textAutoHide
              enableStars
              enableSpotlight
              enableBorderGlow
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
              gridClassName="max-w-full w-full lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
