"use client";

export function InfiniteCarousel() {
  const placeholders = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="relative overflow-hidden">
      <div className="animate-scroll flex gap-4 w-max">
        {placeholders.map((index) => (
          <div
            key={`team-${index}`}
            className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl ring-2 ring-border/50 bg-secondary/30 flex items-center justify-center font-semibold text-muted-foreground text-sm"
          >
            {index % 3 === 0 ? "A" : index % 3 === 1 ? "B" : "C"}
          </div>
        ))}
      </div>
    </div>
  );
}
