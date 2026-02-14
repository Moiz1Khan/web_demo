"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Orb = dynamic(() => import("./Orb").then((m) => m.default), {
  ssr: false,
});

const residencyTypes = ["UAE Resident", "UAE National", "Non-Resident"] as const;

function calculateMortgage(
  propertyValue: number,
  downPayment: number,
  years: number,
  annualRate = 0.039
): { loanAmount: number; monthlyPayment: number } {
  const loanAmount = Math.max(0, propertyValue - downPayment);
  if (loanAmount <= 0 || years <= 0)
    return { loanAmount: 0, monthlyPayment: 0 };
  const monthlyRate = annualRate / 12;
  const numPayments = years * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  return { loanAmount, monthlyPayment };
}

export function MortgageCalculator() {
  const [residency, setResidency] = useState<(typeof residencyTypes)[number]>(
    "UAE Resident"
  );
  const [propertyValue, setPropertyValue] = useState(1500000);
  const [downPayment, setDownPayment] = useState(300000);
  const [loanDuration, setLoanDuration] = useState(25);

  const { loanAmount, monthlyPayment } = calculateMortgage(
    propertyValue,
    downPayment,
    loanDuration
  );

  return (
    <section id="calculator" className="relative py-16 md:py-24 overflow-hidden" data-reveal>
      <div className="absolute inset-0 -z-10">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a12"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          See Your Real Monthly Payment
        </h2>
        <p className="text-center text-muted-foreground mt-2 mb-4">
          This is the average rate. Your exact rate might be lower.
        </p>

        <div className="mt-8 max-w-2xl mx-auto border-gradient-wrap bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden" data-scale-in>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Residency status
              </label>
              <div className="flex gap-2 flex-wrap">
                {residencyTypes.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setResidency(r)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      residency === r
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Value (AED)
                </label>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) =>
                    setPropertyValue(Number(e.target.value) || 0)
                  }
                  className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  min={100000}
                  step={50000}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Down Payment (AED)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
                  className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  min={0}
                  step={50000}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Loan Duration
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={loanDuration}
                  onChange={(e) =>
                    setLoanDuration(Number(e.target.value))
                  }
                  className="flex-1 h-2 rounded-full appearance-none bg-secondary accent-primary"
                />
                <span className="w-16 text-sm font-medium">
                  {loanDuration} Years
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-sm text-muted-foreground">
                  Loan Amount
                </div>
                <div className="text-2xl font-bold text-primary">
                  {loanAmount.toLocaleString()} AED
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Monthly Cost
                </div>
                <div className="text-2xl font-bold text-primary">
                  {monthlyPayment > 0
                    ? `${Math.round(monthlyPayment).toLocaleString()} AED`
                    : "--"}
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              This calculation is based on live products in our database.
            </p>

            <Button asChild className="w-full" size="lg">
              <a href="#rates">Get My Exact Rate from 15 Banks</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
