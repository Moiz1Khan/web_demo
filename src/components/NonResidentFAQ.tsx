"use client";

const faqs = [
  {
    q: "Can I get UAE mortgage without visiting?",
    a: "Almost. Pre-approval and entire process happen remotely. You must visit once for 2-3 days for final signing and key collection.",
  },
  {
    q: "Do I need UAE bank account?",
    a: "Some banks require it for mortgage payments. Others accept international transfers. We recommend opening one anyway for rental income and property expenses. Many UAE banks allow remote account opening.",
  },
  {
    q: "What if my income is in different currency?",
    a: "Not a problem. Banks convert to AED equivalent. Accepted currencies: USD, EUR, GBP (most preferred), AUD, CAD, INR, PKR, CNY, most major currencies.",
  },
  {
    q: "Can I use rental income to qualify?",
    a: "Future rental income: Usually not counted for first property. Existing rental from other properties: Sometimes included if proven with 2+ years contracts.",
  },
  {
    q: "Should I buy off-plan or ready property?",
    a: "For non-residents, we recommend ready property. Lower risk, immediate rental income, easier financing, can actually inspect. Off-plan requires more trust since you can't monitor construction.",
  },
  {
    q: "How do I manage property from abroad?",
    a: "Property management companies handle everything: Tenant finding (one month rent fee), monthly management (5-8% of rent), maintenance, utilities, inspections, compliance. We can introduce 4-5 reputable companies.",
  },
  {
    q: "What about taxes in my home country?",
    a: "UAE has no property tax. But consult tax advisor in your country about foreign property ownership implications. Each country has different rules.",
  },
];

export function NonResidentFAQ() {
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

        <div className="mt-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Own Dubai Property from Wherever You Are?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            You could spend months figuring this out alone, or get clear answers in one 30-minute call.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book Your 30-Min Consultation Call
          </a>
        </div>
      </div>
    </section>
  );
}
