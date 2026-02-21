"use client";

const stats = [
  { value: "17,243", label: "approvals" },
  { value: "AED 4.2B", label: "financed" },
  { value: "47", label: "countries" },
  { value: "92%", label: "approval rate" },
];

export function StatsBar() {
  return (
    <section className="py-10 md:py-14 bg-transparent" data-reveal>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          Since 2015:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
