"use client";

const faqs = [
  {
    q: "What's the minimum commercial mortgage amount?",
    a: "AED 1M typically. Below that, consider a business loan or personal financing.",
  },
  {
    q: "How is investor property loan different?",
    a: "Investment properties require proven cash flow (DSCR 1.25x+), lower LTV (55-60%), and banks count only 70% of rental income.",
  },
  {
    q: "Do all commercial loans require personal guarantees?",
    a: "Almost all under AED 50M revenue. Your personal assets are at risk if business defaults. This is standard, not negotiable.",
  },
  {
    q: "Can foreign companies get commercial mortgage Dubai?",
    a: "Yes. Need UAE subsidiary/branch, local trade license, parent company guarantee. LTV: 50%, rates: 5.75-7.25%, timeline: 12-16 weeks.",
  },
  {
    q: "What if property valuation comes in low?",
    a: "Happens frequently. Options: Challenge valuation (30-40% success), renegotiate purchase price, or increase down payment.",
  },
  {
    q: "How long do business mortgage loan applications take?",
    a: "8-12 weeks average. More complex than residential due to business analysis, higher amounts, more stakeholders.",
  },
  {
    q: "Should I choose fixed or variable commercial loan terms?",
    a: "Fixed for first 3-5 years (payment certainty while business establishes). Then refinance or switch to variable.",
  },
];

export function CommercialFAQ() {
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
