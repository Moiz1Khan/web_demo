"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Building2, Banknote } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Self-Employed Friendly",
    desc: "40% of our approvals are self-employed. We know how to present variable income.",
  },
  {
    icon: Clock,
    title: "7-14 Day Approval",
    desc: "From application to keys in under two weeks. No endless waiting.",
  },
  {
    icon: Building2,
    title: "15+ Banks Compared",
    desc: "We shop rates across all UAE lenders so you get the best deal.",
  },
  {
    icon: Banknote,
    title: "No Extra Fees",
    desc: "Expert guidance with no hidden costs. Save up to AED 11,000.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why choose us?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          We focus on creating an empowering experience for buyers. Here&apos;s why
          we&apos;re the go-to choice:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-stagger>
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              data-stagger-item
              className="border-gradient-wrap shine-sweep bg-card border border-border rounded-2xl p-6 text-center overflow-hidden"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Icon className="size-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
