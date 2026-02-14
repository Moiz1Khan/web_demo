"use client";

import { motion } from "framer-motion";
import { Home, RefreshCw, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const types = [
  {
    id: "purchase",
    icon: Home,
    title: "PURCHASE MORTGAGE",
    headline: "Buy Your Dream Home with Financing That Fits Your Budget.",
    description:
      "Whether it's your first apartment or you're upgrading to a villa, we secure competitive rates from over 15 UAE lenders.",
    benefits: ["15+ banks compared", "Up to 80% LTV", "7-14 day approval"],
  },
  {
    id: "refinance",
    icon: RefreshCw,
    title: "REFINANCE MORTGAGE",
    headline: "Lower Your Rate, Reduce Payments, or Access Your Equity.",
    description:
      "Your mortgage doesn't have to stay the same forever. If rates drop or your financial situation improves, refinancing could save you thousands of dollars each month.",
    benefits: ["Lower monthly payments", "Access equity", "Better terms"],
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "HOME RENOVATION LOAN",
    headline: "Finance Your Property Improvements Up to 85% of Home Value.",
    description:
      "Need a new kitchen? Adding a room? Complete renovation? Finance it through your mortgage at lower rates than personal loans.",
    benefits: ["Up to 85% LTV", "Lower than personal loans", "Flexible terms"],
  },
];

export function MortgageTypes() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8" data-reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Which Home Loan Do You Need?
        </h2>

        <div className="grid md:grid-cols-3 gap-6" data-stagger>
          {types.map(({ icon: Icon, benefits: b, ...item }) => (
            <motion.div
              key={item.id}
              data-stagger-item
              className="group border-gradient-wrap shine-sweep bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Icon className="size-8 text-primary" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                {item.title}
              </h3>
              <h4 className="text-xl font-semibold mb-3">{item.headline}</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground mb-6">
                {b.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
              <Button asChild variant="outline" size="sm">
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
