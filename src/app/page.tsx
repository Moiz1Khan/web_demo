import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { RatesTable } from "@/components/RatesTable";
import { EligibilityChecklist } from "@/components/EligibilityChecklist";
import { FAQ } from "@/components/FAQ";
import { CTAAndLeadSection } from "@/components/CTAAndLeadSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Process = dynamic(() => import("@/components/Process").then((m) => ({ default: m.Process })), { ssr: true });
const CaseStudies = dynamic(() => import("@/components/CaseStudies").then((m) => ({ default: m.CaseStudies })), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials").then((m) => ({ default: m.Testimonials })), { ssr: true });

const BlogSection = dynamic(() => import("@/components/BlogSection").then((m) => ({ default: m.BlogSection })), {
  ssr: true,
  loading: () => <section className="py-10 md:py-14 bg-transparent min-h-[400px]" />,
});

const ScrollAnimations = dynamic(() => import("@/components/ScrollAnimations").then((m) => ({ default: m.ScrollAnimations })));

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <ScrollProgress />
      <Header />
        <main>
          <Hero />
          <div className="theme-gradient">
          <TrustBar />
          <WhyChoose />
          <MortgageCalculator />
          <Process />
          <CaseStudies />
          <RatesTable />
          <EligibilityChecklist />
          <Testimonials />
          <FAQ />
          <BlogSection />
          <CTAAndLeadSection />
          <Footer />
          </div>
        </main>
    </>
  );
}
