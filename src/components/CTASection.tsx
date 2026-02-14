"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-10 md:py-14 bg-[#0a0a12]" data-reveal>
      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to own your
          <br />
          <span className="text-primary">Dubai home?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get your exact rate from 15 UAE banks. No obligation, no commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="#calculator" data-magnetic>Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact" data-magnetic>Get My Exact Rate Quote</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
