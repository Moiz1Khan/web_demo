"use client";

import { Check } from "lucide-react";

const everyoneNeeds = [
  "Passport + Emirates ID",
  "Visa + residence permit",
  "Last 6 months bank statements",
  "Property documents",
];

const salariedAdd = [
  "Salary certificate",
  "Last 6 months payslips",
  "Employment contract",
];

const selfEmployedAdd = [
  "Trade license",
  "Last 6 months business statements",
  "Last 2 years financials (if available)",
  "MOA (Memorandum of Association)",
];

export function ResidentialEligibility() {
  return (
    <section className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Home Loan Eligibility Checklist
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Everyone Needs */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Everyone Needs:
            </h3>
            <ul className="space-y-3">
              {everyoneNeeds.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Salaried Employees */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Salaried Employees Add:
            </h3>
            <ul className="space-y-3">
              {salariedAdd.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Self-Employed */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Self-Employed Add:
            </h3>
            <ul className="space-y-3">
              {selfEmployedAdd.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
