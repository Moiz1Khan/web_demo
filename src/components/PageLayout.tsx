import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const ScrollAnimations = dynamic(
  () => import("@/components/ScrollAnimations").then((m) => ({ default: m.ScrollAnimations })),
  { ssr: true }
);

export function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollAnimations />
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <div className="theme-gradient pt-24 pb-0 min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
