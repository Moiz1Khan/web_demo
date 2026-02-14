"use client";

const logos = [
  "Arabian Business",
  "The National",
  "Gulf News",
  "Entrepreneur",
  "Construction Week",
  "Startus Insights",
  "Wamda",
];

export function PressLogos() {
  return (
    <section className="py-12 md:py-16 border-y border-border" data-animate="section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Featured in
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {logos.map((name) => (
            <div
              key={name}
              className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
