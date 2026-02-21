"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/media";

const caseStudies = [
  {
    title: "From Rejection to Villa in 10 Days",
    person: "James, Self-Employed Consultant",
    imageIdx: 0,
    problem: "AED 45K average income, but it fluctuates monthly. Three banks were rejected for \"inconsistent income.\"",
    solution: "Showed 3-year average, client contracts, and revenue stability. Found a bank that understands modern work.",
    results: [
      "AED 3.2M approved at 4.1%",
      "75% LTV",
      "10 days total",
      "Dubai Marina villa",
    ],
  },
  {
    title: "Approved While Still on Probation",
    person: "Sarah, Social Activist",
    imageIdx: 1,
    problem: "Perfect apartment found. AED 18K salary, but on 3-month probation. Every bank said, \"wait.\"",
    solution: "Emphasized UK degree, 25% down payment saved, employer letter confirming permanent role.",
    results: [
      "AED 1.2M approved at 4.75%",
      "Still on probation",
      "11 days total",
      "Paying AED 6,450 vs AED 7,500 rent",
    ],
  },
  {
    title: "Recent Job Change Didn't Stop Approval",
    person: "Omar, Software Engineer",
    imageIdx: 2,
    problem: "Changed jobs 2 months ago (40% salary increase to AED 35K). Banks wanted 6 months of employment.",
    solution: "Highlighted career progression in same industry, salary jump, 30% down payment, credit score 755.",
    results: [
      "AED 2.1M approved at 4.35%",
      "75% LTV",
      "16 days total",
      "Business Bay 2-bedroom",
    ],
  },
];

export function ResidentialCaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Real Case Studies
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
                      The Problem:
                    </p>
                    <p className="text-sm text-foreground">{study.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      What Changed:
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
