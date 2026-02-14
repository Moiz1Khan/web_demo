"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/media";

const caseStudies = [
  {
    title: "From Rejection to Villa in 10 Days",
    imageIdx: 0,
    quote: "They found a way when everyone else said no.",
    person: "James, Self-Employed Consultant",
    problem:
      "AED 45K average income, but it fluctuates monthly. Three banks rejected for \"inconsistent income.\"",
    solution:
      "Showed 3-year average, client contracts, and revenue stability. Found a bank that understands modern work.",
    results: [
      "AED 3.2M approved at 4.1%",
      "75% LTV",
      "10 days total",
      "Dubai Marina villa",
    ],
  },
  {
    title: "Approved While Still on Probation",
    imageIdx: 1,
    quote: "I own my apartment now instead of renting.",
    person: "Sarah, Social Activist",
    problem:
      "Perfect apartment found. AED 18K salary, but on 3-month probation. Every bank said \"wait.\"",
    solution:
      "Emphasized UK degree, 25% down payment saved, employer letter confirming permanent role.",
    results: [
      "AED 1.2M approved at 4.75%",
      "Still on probation",
      "11 days total",
      "Paying AED 6,450 vs AED 7,500 rent",
    ],
  },
  {
    title: "Recent Job Change Didn't Stop Approval",
    imageIdx: 2,
    quote: "Smooth process, great rate. No regrets.",
    person: "Omar, Software Engineer",
    problem:
      "Changed jobs 2 months ago (40% salary increase to AED 35K). Banks wanted 6 months of employment.",
    solution:
      "Highlighted career progression in same industry, salary jump, 30% down payment, credit score 755.",
    results: [
      "AED 2.1M approved at 4.35%",
      "75% LTV",
      "16 days total",
      "Business Bay 2-bedroom",
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8" data-reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Real Case Studies
        </h2>

        <div className="grid md:grid-cols-3 gap-8" data-stagger>
          {caseStudies.map((study) => (
            <motion.div
              key={study.person}
              data-stagger-item
              className="border-gradient-wrap shine-sweep bg-card border border-border rounded-2xl overflow-hidden"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={images.caseStudies[study.imageIdx]}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm italic text-primary mb-2">&quot;{study.quote}&quot;</p>
                <h3 className="text-lg font-bold mb-2">{study.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">
                {study.person}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Problem:</span>{" "}
                {study.problem}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Solution:</span>{" "}
                {study.solution}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-sm mb-2">Result:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {study.results.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
