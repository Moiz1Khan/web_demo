"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const everyone = [
  "Passport + Emirates ID",
  "Visa + residence permit",
  "Last 6 months bank statements",
  "Property documents",
];

const salaried = [
  "Salary certificate",
  "Last 6 months payslips",
  "Employment contract",
];

const selfEmployed = [
  "Trade license",
  "Last 6 months business statements",
  "Last 2 years financials (if available)",
  "MOA (Memorandum of Association)",
];

export function EligibilityChecklist() {
  return (
    <section className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8" data-reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Home Loan Eligibility Checklist
        </h2>

        <div className="grid md:grid-cols-3 gap-8" data-stagger>
          <motion.div
            data-stagger-item
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-semibold mb-4">Everyone Needs:</h3>
            <ul className="space-y-3">
              {everyone.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            data-stagger-item
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-semibold mb-4">Salaried Employees Add:</h3>
            <ul className="space-y-3">
              {salaried.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            data-stagger-item
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-semibold mb-4">Self-Employed Add:</h3>
            <ul className="space-y-3">
              {selfEmployed.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
