"use client";

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

export function ResidentialFAQ() {
  return (
    <section id="faq" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            FAQ's
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-foreground mb-3 text-base">
                {faq.q}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
