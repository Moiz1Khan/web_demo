import { PageLayout } from "@/components/PageLayout";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import Image from "next/image";
import { images } from "@/lib/media";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NexHome – UAE Home Loans",
  description:
    "Learn about NexHome – Dubai's trusted mortgage advisor. 12,847+ home loans approved since 2015. We compare 15+ UAE banks to find you the best rates.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your Partner in
                <span className="text-primary"> Owning a Dubai Home</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2015, we&apos;ve helped over 12,847 families secure the keys to their dream home. 
                We compare 15+ UAE banks so you get the best rates—no guesswork, no stress.
              </p>
              <ul className="space-y-3">
                {["Compare rates from 15+ banks", "7–14 days to approval", "Expert consultants"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-first lg:order-last">
              <Image
                src={images.process[0]}
                alt="NexHome team helping clients with mortgages"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 md:py-20 bg-transparent">
        <WhyChoose />
      </section>

      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To make home ownership in the UAE simple and transparent. We believe everyone deserves 
            a fair shot at their dream home—and we&apos;re here to make it happen with the best rates 
            and the smoothest process.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
