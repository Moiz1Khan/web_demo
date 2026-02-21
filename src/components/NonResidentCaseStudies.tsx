"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/media";

const caseStudies = [
  {
    title: "London to Dubai Marina Without Ever Visiting",
    person: "Emma, Marketing Director, London",
    imageIdx: 0,
    challenge: "Wanted Dubai investment property but couldn't take time off for multiple trips. Concerned about international money transfers and legal complexity.",
    solution: "Remote video consultation, pre-qualified before property search, agent showed properties via live video, offered remotely, we coordinated everything, Emma flew in for 48 hours only.",
    results: [
      "AED 1.8M property, 50% down",
      "Approved at 5.25%",
      "9 weeks from first call",
      "Emma in UAE for 2 days only (signing + keys)",
      "Rented at 7.2% yield",
      "She visited her apartment for first time 6 months later",
    ],
  },
  {
    title: "Mumbai Investor Secured 60% LTV (Rare for Non-Residents)",
    person: "Rahul, Business Owner, Mumbai",
    imageIdx: 1,
    challenge: "Wanted AED 4.5M Palm Jumeirah villa. Standard non-resident LTV: 50%. Needed higher leverage to preserve capital for other investments.",
    solution: "Positioned as high-net-worth portfolio investor. Showed India property portfolio (4 properties), business revenue AED 12M annually, large liquid assets. Found bank that values investors.",
    results: [
      "AED 4.5M villa",
      "60% LTV (AED 2.7M loan) vs standard 50%",
      "Saved AED 450K for other investments",
      "5.45% fixed for 5 years",
      "Family uses 8 weeks/year, rents rest at AED 45K/month",
      "Positive cash flow even with mortgage",
    ],
  },
  {
    title: "Chinese Investor: 3 Properties, All Financed Simultaneously",
    person: "Wei, Entrepreneur, Beijing",
    imageIdx: 2,
    challenge: "Experienced investor wanted three Dubai apartments (AED 1.5M, AED 2.2M, AED 1.8M). Thought he could only finance one at a time as non-resident.",
    solution: "Portfolio financing approach. Submitted all three simultaneously to different lenders. Showed global portfolio (23 properties, 5 countries). Strong cash flow and liquidity. Staggered closings by 30 days.",
    results: [
      "All three approved",
      "Total: AED 5.5M purchased with AED 2.75M financed",
      "Average rate: 5.65%",
      "All rented within 60 days",
      "Combined yield: 8.1%",
      "Portfolio value up 18% in 2 years",
    ],
  },
];

export function NonResidentCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          NON-RESIDENT SUCCESS STORIES
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
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
                      Solution:
                    </p>
                    <p className="text-sm text-foreground">{study.solution}</p>
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
