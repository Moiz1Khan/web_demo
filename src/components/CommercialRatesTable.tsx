"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const rates = [
  {
    propertyType: "Owner-Occupied Office",
    fixed: "4.99% - 5.99%",
    variable: "4.49% - 5.49%",
    ltv: "65%",
  },
  {
    propertyType: "Investment Office",
    fixed: "5.25% - 6.25%",
    variable: "4.75% - 5.75%",
    ltv: "55-60%",
  },
  {
    propertyType: "Retail Property",
    fixed: "5.49% - 6.49%",
    variable: "4.99% - 5.99%",
    ltv: "50-60%",
  },
  {
    propertyType: "Warehouse/Industrial",
    fixed: "5.25% - 6.25%",
    variable: "4.75% - 5.75%",
    ltv: "55-65%",
  },
  {
    propertyType: "Mixed-Use",
    fixed: "5.75% - 6.75%",
    variable: "5.25% - 6.25%",
    ltv: "50-55%",
  },
];

export function CommercialRatesTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="rates" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            CURRENT COMMERCIAL MORTGAGE RATES
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
                  Property Type
                </th>
                <th className="text-left p-4 md:p-5 font-semibold text-foreground border-b border-border">
                  Fixed Rate
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
                  key={rate.propertyType}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <td className="p-4 md:p-5 font-medium text-foreground border-b border-border last:border-b-0">
                    {rate.propertyType}
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
          Rates depend on: Business age, DSCR, property quality, tenant mix, LTV
        </p>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#contact">Get Commercial Property Loan Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
