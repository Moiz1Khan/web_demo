"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/media";

const caseStudies = [
  {
    title: "60% LTV When Market Offered 50%",
    person: "Commercial RE investor, established portfolio",
    imageIdx: 0,
    challenge: "12-unit retail plaza, Dubai Marina. AED 15M purchase. Strong tenants (Emirates NBD, Starbucks) but banks offered only 50% LTV due to \"retail uncertainty.\"",
    approach: "Detailed tenant analysis: 8 of 12 on 5+ year leases, zero vacancy 3 years, rental 15% above market. Emphasized DSCR of 1.65x.",
    results: [
      "AED 15M approved at 5.2% (vs 6.5% initial)",
      "60% LTV (saved AED 1.5M down payment)",
      "20-year term",
      "Cash flow: AED 720K annually after debt",
      "Closed in 67 days",
    ],
  },
  {
    title: "First-Time Commercial at 65% LTV",
    person: "Medical clinic, 5 partners, 8 years operating",
    imageIdx: 1,
    challenge: "Successful clinic paying AED 450K/year rent wanted to buy their AED 6.5M building. Never bought commercial property. Worried about approval.",
    approach: "Positioned as owner-occupied (better terms). Showed business revenue AED 8.2M annually, net income AED 2.1M, patient base 3,800+. Structured as business loan secured by property.",
    results: [
      "AED 4.2M approved at 5.35%",
      "65% LTV (vs expected 50% as first-timer)",
      "15-year term",
      "Payment: AED 33,800 vs AED 37,500 rent",
      "Saved AED 44,400 first year + building equity",
    ],
  },
  {
    title: "Development Finance with Smart Structure",
    person: "Property developer, 8 years experience",
    imageIdx: 2,
    challenge: "AED 8M warehouse construction, Dubai Industrial City. Needed phased financing to preserve cash flow. Banks wanted full interest from day one.",
    approach: "Structured with development lender: Interest-only during 18-month construction, draws at 6 milestones, interest only on drawn amounts.",
    results: [
      "AED 8M approved at 5.8%",
      "Interest-only during construction",
      "6 milestone-based draws",
      "Saved AED 480K in carrying costs",
      "70% pre-leased before completion",
      "Refinanced to 5.1% permanent after completion",
    ],
  },
];

export function CommercialCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Success Stories
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Real Commercial Finance Transformations
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] bg-secondary/30">
                <Image
                  src={images.caseStudies[study.imageIdx]}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{study.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{study.person}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Challenge:
                    </p>
                    <p className="text-sm text-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      Our Approach:
                    </p>
                    <p className="text-sm text-foreground">{study.approach}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                      Result:
                    </p>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">→</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
