import { PageLayout } from "@/components/PageLayout";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | NexHome – Customer Testimonials",
  description:
    "Read what our clients say about NexHome. 4.9-star rating. Real stories from families who secured UAE home loans with us.",
};

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })),
  { ssr: true }
);

export default function ReviewsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tried. Tested.
            <span className="text-primary"> Trusted.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            See what thousands of home buyers say about their experience with NexHome.
          </p>
        </div>
      </section>

      <Testimonials />

      {/* Additional reviews / Trust signals */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card/60 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">12,847+</div>
              <p className="text-muted-foreground">Home loans approved</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/60 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Banks compared</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/60 border border-border">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <p className="text-muted-foreground">Star rating</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
