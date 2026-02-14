"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingDown, Wallet, Calendar } from "lucide-react";

const rates = [
  {
    propertyValue: "Under AED 1M",
    fixedRate: "4.99% - 5.49%",
    variableRate: "4.49% - 4.99%",
    downPayment: "25%",
  },
  {
    propertyValue: "AED 1M - 3M",
    fixedRate: "4.49% - 5.29%",
    variableRate: "3.99% - 4.79%",
    downPayment: "25%",
  },
  {
    propertyValue: "AED 3M - 5M",
    fixedRate: "4.25% - 5.15%",
    variableRate: "3.99% - 4.49%",
    downPayment: "20-25%",
  },
  {
    propertyValue: "Over AED 5M",
    fixedRate: "4.15% - 4.99%",
    variableRate: "3.85% - 4.25%",
    downPayment: "15-20%",
  },
];

export function RatesTable() {
  return (
    <section id="rates" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
            <TrendingDown className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You&apos;ll Actually Pay
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            Live rates from 15+ UAE banks. Updated weekly.
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            Updated Weekly
          </span>
        </div>

        <motion.div
          className="overflow-x-auto rounded-2xl border border-border border-gradient-wrap shine-sweep bg-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left p-4 md:p-5 font-semibold">
                  <span className="flex items-center gap-2">
                    <Wallet className="size-4 text-primary" />
                    Property Value
                  </span>
                </th>
                <th className="text-left p-4 md:p-5 font-semibold">
                  Fixed Rate (3-5Y)
                </th>
                <th className="text-left p-4 md:p-5 font-semibold">
                  Variable Rate
                </th>
                <th className="text-left p-4 md:p-5 font-semibold">
                  <span className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    Down Payment
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row, index) => (
                <motion.tr
                  key={row.propertyValue}
                  className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="p-4 md:p-5 font-medium">{row.propertyValue}</td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.fixedRate}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.variableRate}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.downPayment}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Your exact rate depends on: credit score, employment type, property
          type, and down payment size. We compare 15+ banks to find your best
          option.
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
