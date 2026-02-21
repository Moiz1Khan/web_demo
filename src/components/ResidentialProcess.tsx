"use client";

import Image from "next/image";
import { images } from "@/lib/media";

const phases = [
  {
    id: 1,
    days: "Day 1-2",
    title: "Pre-Approval",
    image: images.process[0],
    items: [
      "15-min call with your consultant",
      "Income verification",
      "Calculate your max borrowing",
      "You know your budget",
    ],
  },
  {
    id: 2,
    days: "Day 3-5",
    title: "Document Collection",
    image: images.process[1],
    items: [
      "We send checklist",
      "You gather papers",
      "We review before submission",
      "Fix issues immediately",
    ],
  },
  {
    id: 3,
    days: "Day 6-10",
    title: "Bank Review",
    image: images.process[2],
    items: [
      "Submit to multiple lenders",
      "We handle all questions",
      "Negotiate better terms",
      "Update you every 48 hours",
    ],
  },
  {
    id: 4,
    days: "Day 11-14",
    title: "Approval & Closing",
    image: images.process[3],
    items: [
      "Bank approves",
      "Property valuation done",
      "Sign documents",
      "Collect keys",
    ],
  },
];

export function ResidentialProcess() {
  return (
    <section id="process" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          THE PROCESS
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Application to Keys: 7-14 Days
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/9] bg-secondary/30">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
                    {phase.days}
                  </span>
                  <h3 className="font-bold text-xl text-foreground">
                    {phase.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
