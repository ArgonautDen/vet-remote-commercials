import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
