"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingDown, Wallet, Calendar } from "lucide-react";

const rates = [
  {
    who: "UAE National",
    fixed: "4.15% - 5.29%",
    variable: "3.85% - 4.99%",
    down: "15-20%",
  },
  {
    who: "UAE Non-Resident",
    fixed: "4.25% - 5.49%",
    variable: "3.99% - 5.15%",
    down: "20-25%",
  },
  {
    who: "First-Time Buyer",
    fixed: "4.35% - 5.39%",
    variable: "4.09% - 5.05%",
    down: "20%",
  },
  {
    who: "Non-Resident",
    fixed: "4.75% - 6.25%",
    variable: "4.25% - 5.75%",
    down: "40-50%",
  },
  {
    who: "Commercial Property",
    fixed: "4.99% - 6.75%",
    variable: "4.49% - 6.25%",
    down: "35-50%",
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
            Current Mortgage Rates in Dubai
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            Updated Weekly
          </p>
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
                    Who You Are
                  </span>
                </th>
                <th className="text-left p-4 md:p-5 font-semibold">
                  Fixed Rate (3-5 Years)
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
                  key={row.who}
                  className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="p-4 md:p-5 font-medium">{row.who}</td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.fixed}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.variable}
                  </td>
                  <td className="p-4 md:p-5 text-muted-foreground">
                    {row.down}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Your actual rate depends on: credit score, property value, loan amount,
          employment type, and bank relationship. These are market ranges, not
          guarantees.
        </p>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#contact">Get Personalized Rate Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
