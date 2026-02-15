"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { images } from "@/lib/media";

const CardSwap = dynamic(
  () => import("./CardSwap").then((m) => ({ default: m.default })),
  { ssr: false }
);
const Card = dynamic(
  () => import("./CardSwap").then((m) => ({ default: m.Card })),
  { ssr: false }
);

const caseStudies = [
  {
    title: "From Rejection to Villa in 10 Days",
    imageIdx: 0,
    quote: "They found a way when everyone else said no.",
    person: "James, Self-Employed Consultant",
    problem:
      'AED 45K average income, but it fluctuates monthly. Three banks rejected for "inconsistent income."',
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
      'Perfect apartment found. AED 18K salary, but on 3-month probation. Every bank said "wait."',
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardSwapRef = useRef<{ goToCard: (index: number) => void }>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    cardSwapRef.current?.goToCard(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-14 bg-transparent relative min-h-[400px] md:min-h-[520px]"
      data-reveal
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Real Case Studies
        </h2>

        <div className="relative grid grid-cols-[1fr_1fr] gap-4 md:gap-8 items-center min-h-[420px] md:min-h-[480px]">
          {/* Left: Case study list - clickable */}
          <div className="flex flex-col gap-3 md:gap-4 min-w-0">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.person}
                type="button"
                onClick={() => handleSelect(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 ${
                  selectedIndex === index
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-card/80 hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <h3 className="font-bold text-sm md:text-lg mb-1">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground">{study.person}</p>
              </motion.button>
            ))}
          </div>

          {/* Right: CardSwap - loads only when section in view (defers GSAP bundle) */}
          <motion.div
            className="relative h-[380px] md:h-[480px] min-w-0 flex items-end justify-end overflow-visible"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.9, x: 30 }
            }
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {isInView && (
            <CardSwap
              ref={cardSwapRef}
              width={340}
              height={420}
              cardDistance={50}
              verticalDistance={55}
              delay={6000}
              pauseOnHover
              skewAmount={5}
              easing="elastic"
            >
              {caseStudies.map((study) => (
                <Card key={study.person}>
                  <div className="w-full h-full overflow-y-auto p-6">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={images.caseStudies[study.imageIdx]}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    </div>
                    <p className="text-sm italic text-primary mb-2">
                      &quot;{study.quote}&quot;
                    </p>
                    <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {study.person}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">
                        Problem:
                      </span>{" "}
                      {study.problem}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">
                        Solution:
                      </span>{" "}
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
                </Card>
              ))}
            </CardSwap>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
