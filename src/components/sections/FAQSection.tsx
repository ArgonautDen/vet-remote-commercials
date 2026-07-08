import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { FAQFlipCard } from "@/components/ui/FAQFlipCard";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <Container className="max-w-3xl sm:hidden">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Частые вопросы" className="mb-12" />
        </Reveal>
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </Container>

      <Container className="hidden max-w-5xl sm:block">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы"
            description="Наведите и кликните на карточку, чтобы перевернуть её и увидеть ответ."
            className="mb-14"
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 80}>
              <FAQFlipCard question={item.question} answer={item.answer} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
