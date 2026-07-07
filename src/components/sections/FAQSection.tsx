import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Частые вопросы" className="mb-12" />
        </Reveal>
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
