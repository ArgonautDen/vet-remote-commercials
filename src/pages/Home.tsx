import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <WorkflowSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
