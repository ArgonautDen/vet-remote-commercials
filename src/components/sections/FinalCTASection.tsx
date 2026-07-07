import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-cta-gradient" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Попробуйте VetRemote сегодня —<br className="hidden sm:block" /> бесплатно, без
            обязательств
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-balance text-lg text-white/80">
            Регистрация занимает 2 минуты. Поддержка на русском языке.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Button
            to="/contacts"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="size-5" />}
            className="mt-2"
          >
            Создать аккаунт
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
