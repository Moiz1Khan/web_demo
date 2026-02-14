"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  { value: 12847, suffix: "", label: "Home Loans Approved" },
  { value: 15, suffix: "+", label: "UAE Banks" },
  { value: 200, suffix: "+", label: "Partner Agents" },
  { value: 2400, suffix: "", label: "Self-Employed Approved" },
];

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function CountUp({
  target,
  suffix = "",
  duration = 1.5,
  inView,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || target === 0) return;
    const startTime = performance.now();
    startRef.current = startTime;

    const tick = (now: number) => {
      if (!startRef.current) return;
      const elapsed = (now - startRef.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(eased * target);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      startRef.current = null;
    };
  }, [inView, target, duration]);

  const formatted = display.toLocaleString();
  return <>{formatted}{suffix}</>;
}

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-6 md:py-8 border-b border-border/50 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-6">
          As featured in
        </p>
        <LogoCarousel items={pressLogoItems} className="mb-6" />
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
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
