"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const rates = [
  {
    propertyValue: "AED 1M - 2M",
    fixed: "5.75% - 6.25%",
    variable: "5.25% - 5.75%",
    ltv: "50%",
  },
  {
    propertyValue: "AED 2M - 4M",
    fixed: "5.25% - 5.99%",
    variable: "4.75% - 5.49%",
    ltv: "50-55%",
  },
  {
    propertyValue: "AED 4M - 8M",
    fixed: "4.99% - 5.75%",
    variable: "4.49% - 5.25%",
    ltv: "55-60%",
  },
  {
    propertyValue: "AED 8M+",
    fixed: "4.75% - 5.49%",
    variable: "4.25% - 4.99%",
    ltv: "60%",
  },
];

export function NonResidentRatesTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="rates" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            CURRENT NON-RESIDENT RATES
          </h2>
          <p className="text-muted-foreground">(Updated Weekly)</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse bg-card rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 md:p-5 font-semibold text-foreground border-b border-border">
                  Property Value
                </th>
                <th className="text-left p-4 md:p-5 font-semibold text-foreground border-b border-border">
                  Fixed Rate (3-5Y)
                </th>
                <th className="text-left p-4 md:p-5 font-semibold text-foreground border-b border-border">
                  Variable Rate
                </th>
                <th className="text-left p-4 md:p-5 font-semibold text-foreground border-b border-border">
                  Typical LTV
                </th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr
                  key={rate.propertyValue}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <td className="p-4 md:p-5 font-medium text-foreground border-b border-border last:border-b-0">
                    {rate.propertyValue}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground border-b border-border last:border-b-0">
                    {rate.fixed}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground border-b border-border last:border-b-0">
                    {rate.variable}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground border-b border-border last:border-b-0">
                    {rate.ltv}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Better rates possible with: Larger down payment (60% vs 40%), strong income (USD 15K+ monthly), existing property portfolio, high net worth, GCC nationals.
        </p>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#contact">Get My Non-Resident Rate Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
