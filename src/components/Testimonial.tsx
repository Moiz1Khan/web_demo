import { Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-secondary/20" data-animate="section">
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Tried. Tested. Trusted.
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-bold text-primary">4.9</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-6 fill-primary text-primary"
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Powered by Google</p>
      </div>
    </section>
  );
}
