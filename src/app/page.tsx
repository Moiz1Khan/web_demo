import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import { ClientMortgageCalculator, ClientProcess, ClientFAQ, ClientCTAAndLeadSection } from "@/components/ClientOnlySections";
import { RatesTable } from "@/components/RatesTable";
import { EligibilityChecklist } from "@/components/EligibilityChecklist";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

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
          <ClientMortgageCalculator />
          <ClientProcess />
          <CaseStudies />
          <RatesTable />
          <EligibilityChecklist />
          <Testimonials />
          <ClientFAQ />
          <BlogSection />
          <ClientCTAAndLeadSection />
          <Footer />
          </div>
        </main>
    </>
  );
}
