"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Interest = "purchase" | "refinance" | "renovation" | "";

export function LeadCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
        <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank you!</h2>
          <p className="text-muted-foreground">
            We&apos;ll contact you within 24 hours with your personalized rate quote.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
      <div className="max-w-xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get Your Exact Rate Quote
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Fill in your details and we&apos;ll compare 15+ banks for you. No obligation.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-lg bg-background border border-border"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-lg bg-background border border-border"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 px-4 rounded-lg bg-background border border-border"
              placeholder="+971 50 123 4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              I&apos;m interested in
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "purchase" as const, label: "Purchase Mortgage" },
                { value: "refinance" as const, label: "Refinance" },
                { value: "renovation" as const, label: "Renovation Loan" },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setInterest(value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    interest === value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Get My Quote
          </Button>
        </form>
      </div>
    </section>
  );
}
