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
    <section id="process" className="py-16 md:py-24 bg-[#0a0a12]" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          THE PROCESS
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
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
                  <div className="w-full max-w-md mx-auto text-center">
                    <div className="mb-6">
                      <span className="font-mono text-sm font-bold text-primary">
                        {phase.days}
                      </span>
                      <h3 className="text-xl font-semibold mt-1">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2.5 text-left inline-block">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary shrink-0">•</span>
                          <span>{item}</span>
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
