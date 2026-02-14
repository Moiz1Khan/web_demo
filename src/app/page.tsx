import { StickyBar } from "@/components/StickyBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { RatesTable } from "@/components/RatesTable";
import { EligibilityChecklist } from "@/components/EligibilityChecklist";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BlogSection } from "@/components/BlogSection";
import { CTAAndLeadSection } from "@/components/CTAAndLeadSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <ScrollProgress />
      <StickyBar />
      <div className="pt-12">
        <Header />
        <main>
          <Hero />
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
        </main>
        <Footer />
      </div>
    </>
  );
}
