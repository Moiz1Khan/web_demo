import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ResidentialHero } from "@/components/ResidentialHero";
import { ResidentialCalculator } from "@/components/ResidentialCalculator";
import { ResidentialLoanTypes } from "@/components/ResidentialLoanTypes";
import { ResidentialProcess } from "@/components/ResidentialProcess";
import { ResidentialCaseStudies } from "@/components/ResidentialCaseStudies";
import { ResidentialRatesTable } from "@/components/ResidentialRatesTable";
import { ResidentialEligibility } from "@/components/ResidentialEligibility";
import { ResidentialFAQ } from "@/components/ResidentialFAQ";
import { ClientCTAAndLeadSection } from "@/components/ClientOnlySections";

const ScrollAnimations = dynamic(() => import("@/components/ScrollAnimations").then((m) => ({ default: m.ScrollAnimations })));

export default function ResidentialFinancePage() {
  return (
    <>
      <ScrollAnimations />
      <ScrollProgress />
      <Header />
      <main>
        <ResidentialHero />
        <div className="theme-gradient">
          <ResidentialCalculator />
          <ResidentialLoanTypes />
          <ResidentialProcess />
          <ResidentialCaseStudies />
          <ResidentialRatesTable />
          <ResidentialEligibility />
          <ResidentialFAQ />
          <ClientCTAAndLeadSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
