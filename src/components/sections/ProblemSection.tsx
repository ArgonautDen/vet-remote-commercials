import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/data/problems";
import tiredDoctorImage from "@/assets/screenshots/tired-doctor.jpg";

const CARDS_START_DELAY = 350;
const CARD_STEP_DELAY = 120;

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="hero-blob absolute -right-24 top-10 -z-10 size-80 rounded-full bg-pumpkin-300/20 blur-3xl animate-float"
      />
      <Container>
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Знакомая картина?
          </h2>
        </Reveal>

        <div className="relative">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={tiredDoctorImage}
                alt="Уставший ветеринар за бумажной работой"
                className="block h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-void/80 via-void/25 to-transparent"
              />
            </div>
          </Reveal>

          <div className="relative z-10 -mt-16 grid gap-5 px-2 sm:-mt-20 sm:grid-cols-3 sm:px-6 lg:-mt-24">
            {problems.map((problem, index) => (
              <Reveal key={problem.title} delay={CARDS_START_DELAY + index * CARD_STEP_DELAY}>
                <div className="glass-shine-card flex h-full flex-col gap-4 rounded-2xl p-6 shadow-soft">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <problem.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-900">{problem.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-500">{problem.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={CARDS_START_DELAY + problems.length * CARD_STEP_DELAY} className="mt-12 text-center">
          <p className="text-balance font-display text-xl font-bold text-indigo-700 sm:text-2xl">
            VetRemote решает всё это. Сразу.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
