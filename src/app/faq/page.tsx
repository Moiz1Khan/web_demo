import { PageLayout } from "@/components/PageLayout";
import { FAQDome } from "@/components/FAQDome";
import { ClientCTAAndLeadSection } from "@/components/ClientOnlySections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | NexHome – Mortgage Questions Answered",
  description:
    "Find answers to common UAE mortgage questions: how much can I borrow, credit score requirements, fixed vs variable rates, and more.",
};

export default function FAQPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about UAE home loans. Can&apos;t find your answer? We&apos;re here to help.
          </p>
        </div>
      </section>

      <FAQDome />

      <section className="pb-16">
        <ClientCTAAndLeadSection />
      </section>
    </PageLayout>
  );
}
