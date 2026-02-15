"use client";

import Image from "next/image";
import Stepper, { Step } from "./Stepper";
import { images } from "@/lib/media";

const phases = [
  {
    days: "Day 1-2",
    title: "Pre-Approval",
    items: [
      "15-min call with your consultant",
      "Income verification",
      "Calculate your max borrowing",
      "You know your budget",
    ],
  },
  {
    days: "Day 3-5",
    title: "Document Collection",
    items: [
      "We send checklist",
      "You gather papers",
      "We review before submission",
      "Fix issues immediately",
    ],
  },
  {
    days: "Day 6-10",
    title: "Bank Review",
    items: [
      "Submit to multiple lenders",
      "We handle all questions",
      "Negotiate better terms",
      "Update you every 48 hours",
    ],
  },
  {
    days: "Day 11-14",
    title: "Approval & Closing",
    items: [
      "Bank approves",
      "Property valuation done",
      "Sign documents",
      "Collect keys",
    ],
  },
];

export function Process() {
  return (
    <section id="process" className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          THE PROCESS
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Application to Keys: 7-14 Days
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src={images.process[0]}
              alt="Mortgage process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Stepper
              initialStep={1}
              onStepChange={(step) => {}}
              onFinalStepCompleted={() => {}}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              {phases.map((phase) => (
                <Step key={phase.days}>
                  <div className="w-full">
                    <div className="text-center mb-8">
                      <span className="inline-block font-mono text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg mb-2">
                        {phase.days}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{phase.title}</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      {phase.items.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/60"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {i + 1}
                          </span>
                          <span className="text-foreground font-medium leading-snug pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
      </div>
    </section>
  );
}
