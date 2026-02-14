"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    q: "How much can I borrow?",
    a: "General rule: 7x your annual salary. But max monthly debt can't exceed 50% of gross income. Example: AED 25,000 salary = max AED 12,500 total monthly debt = roughly AED 1.8M borrowing capacity.",
  },
  {
    q: "What credit score do I need?",
    a: "700+ gets best rates. But we've approved 580+ scores with strong income and down payment.",
  },
  {
    q: "Can I apply for home loan while on probation?",
    a: "Yes, but limited options. We work with 3 lenders. Need strong profile: good salary, 25%+ down payment, employer confirmation letter.",
  },
  {
    q: "Fixed rate home loan or variable?",
    a: "Fixed = certainty (same payment for 3-5 years). Variable = lower rate initially but can change. Most people choose fixed for 3-5 years, then refinance when period ends.",
  },
  {
    q: "Should I buy to let or live in?",
    a: "Both work. Buy to let needs 25% down minimum. Rental income can help with approval but banks calculate conservatively (70% of actual rent).",
  },
  {
    q: "Best home loan in UAE for expats?",
    a: "Depends on your situation. We compare all banks and recommend best 2-3 for your specific profile.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
            <HelpCircle className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about UAE home loans. Can&apos;t find your answer? We&apos;re here to help.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={cn(
                "border-gradient-wrap shine-sweep bg-card border rounded-2xl overflow-hidden transition-all duration-300",
                openIndex === index
                  ? "border-primary/30 shadow-[0_0_20px_rgba(40,48,58,0.08)]"
                  : "border-border hover:border-primary/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors rounded-2xl"
              >
                <span className="font-medium text-foreground pr-2">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    openIndex === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key={faq.q}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-border/50">
                      <p className="pt-4 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Still have questions?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Get your personalized rate quote
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
