"use client";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24" data-animate="section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See your future home
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore what&apos;s possible when you partner with us.
        </p>
        <div className="rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto bg-secondary/30" />
      </div>
    </section>
  );
}
