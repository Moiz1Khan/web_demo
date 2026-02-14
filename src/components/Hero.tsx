"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimateText } from "@/components/ui/AnimateText";
import { images, videos } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-start justify-center pl-2 md:pl-4 lg:pl-6 pr-4 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div data-parallax className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 hidden sm:block"
          >
            <source src={videos.hero} type="video/mp4" />
          </video>
          <Image
            src={images.heroFallback}
            alt="Dubai home"
            fill
            className="object-cover scale-110 sm:hidden"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden />
      </div>

      <div className="relative z-10 max-w-4xl text-left" data-animate="hero">
        <AnimateText
          text="Stop Paying Rent. Own Your Dubai Home with Just 20% Down"
          by="words"
          as="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] [&>span]:drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        />
        <motion.p
          className="mt-6 text-xl md:text-2xl font-semibold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          12,847 Home Loans Approved Since 2015
        </motion.p>
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          2,400 Were Self-Employed. Self-employment isn&apos;t &quot;difficult&quot;, it&apos;s 40% of our
          business. We know exactly how to present variable income for bank
          approval.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Button
            asChild
            size="lg"
            className="text-base px-10 bg-white text-black hover:bg-gray-100 glow-white shine-sweep transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <a href="#calculator" data-magnetic>Get Started</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
