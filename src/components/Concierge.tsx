"use client";

import { Button } from "@/components/ui/button";
import { InfiniteCarousel } from "./InfiniteCarousel";

export function Concierge() {
  return (
    <section id="concierge" className="py-16 md:py-24" data-animate="section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Buyers consultancy
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          We revolutionize concierge services, providing unmatched support to
          simplify the home buying process.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] min-h-[200px] bg-secondary/30" />

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                We find your perfect match
              </h3>
              <div className="mt-6 mb-8">
                <InfiniteCarousel />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Connect with our concierge team
              </h3>
              <p className="text-muted-foreground mb-6">
                We handle the negotiations and paperwork for you, working with
                200+ trusted real estate partners. No extra fees, just expert
                guidance.
              </p>
              <Button asChild>
                <a href="#contact">Contact us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
