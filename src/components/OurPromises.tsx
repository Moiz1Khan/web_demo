"use client";

import { User, Clock, Shield, MessageCircle } from "lucide-react";

const promises = [
  {
    icon: User,
    title: "YOUR DEDICATED CONSULTANT",
    copy: "One Person. Your Entire Journey.",
  },
  {
    icon: Clock,
    title: "48-HOUR UPDATES",
    copy: "You'll Never Be Left in the Dark",
  },
  {
    icon: Shield,
    title: "NO FEE UNLESS APPROVED",
    copy: "We Only Win When You Win",
  },
  {
    icon: MessageCircle,
    title: "HONEST ASSESSMENT",
    copy: "We'll Tell You the Truth Upfront",
  },
];

export function OurPromises() {
  return (
    <section className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Promises to You
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Icon className="size-8 text-primary" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
