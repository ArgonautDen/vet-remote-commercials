import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-void py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cta-gradient opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 top-0 size-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 bottom-0 size-80 rounded-full bg-pumpkin-500/20 blur-3xl"
      />

      <Container className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100} className="text-center">
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
