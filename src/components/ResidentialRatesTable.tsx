"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const rates = [
  {
    propertyValue: "Under AED 1M",
    fixed: "4.99% - 5.49%",
    variable: "4.49% - 4.99%",
    down: "25%",
  },
  {
    propertyValue: "AED 1M - 3M",
    fixed: "4.49% - 5.29%",
    variable: "3.99% - 4.79%",
    down: "25%",
  },
  {
    propertyValue: "AED 3M - 5M",
    fixed: "4.25% - 5.15%",
    variable: "3.99% - 4.49%",
    down: "20-25%",
  },
  {
    propertyValue: "Over AED 5M",
    fixed: "4.15% - 4.99%",
    variable: "3.85% - 4.25%",
    down: "15-20%",
  },
];

export function ResidentialRatesTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="rates" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What You'll Actually Pay
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
                  Down Payment
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
                    {rate.down}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Your rate depends on: Credit score, employment type, property type, down payment size
        </p>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#contact">Get My Exact Rate Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
