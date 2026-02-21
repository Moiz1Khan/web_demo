"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quick answers to common questions about UAE home loans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={cn(
                "bg-card border rounded-2xl overflow-hidden transition-all duration-300 h-fit",
                openIndex === index
                  ? "border-primary/30 shadow-lg"
                  : "border-border hover:border-primary/20 hover:shadow-md"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-secondary/20 transition-colors"
              >
                <span className="font-semibold text-foreground pr-2 text-base">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
                    openIndex === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-300",
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
                    <div className="px-6 pb-6 pt-0 border-t border-border/50">
                      <p className="pt-4 text-muted-foreground leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Have a Question Card */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="size-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Have a Question?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Can&apos;t find what you&apos;re looking for? Check out our complete FAQ page
            </p>
            <Button asChild size="lg" className="w-full">
              <Link href="/faq">
                View All FAQs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
