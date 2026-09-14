import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { ScreenshotPlaceholder } from "@/components/mockups/ScreenshotPlaceholder";
import { workflowSteps } from "@/data/workflow";
import { workflowFeatures } from "@/data/workflowFeatures";
import happyDoctorImage from "@/assets/screenshots/happy-doctor.jpg";

const TIMELINE_START_DELAY = 350;
const TIMELINE_STEP_DELAY = 120;
const FEATURES_START_DELAY = 200;
const FEATURE_STEP_DELAY = 80;

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="hero-blob absolute -left-24 top-1/4 -z-10 size-80 rounded-full bg-indigo-300/15 blur-3xl animate-float"
        style={{ animationDelay: "1.4s" }}
      />
      <Container>
        <Reveal className="mx-auto mb-5 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Теперь работа это...
          </h2>
        </Reveal>
        <Reveal delay={100} className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-balance font-display text-lg font-semibold leading-snug text-indigo-700 sm:text-xl">
            Пока вы ведёте приём — клиенты записываются сами, платят онлайн, получают опросник.
            Когда всё готово, <span className="text-pumpkin-600">Telegram сообщит вам первым.</span>
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-9 top-2 bottom-2 hidden w-px bg-ink-200 sm:block"
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.time} delay={TIMELINE_START_DELAY + index * TIMELINE_STEP_DELAY}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="relative z-[100] flex items-center gap-3 sm:w-[72px] sm:shrink-0 sm:flex-col sm:gap-2 sm:pt-1">
                    <span className="font-display text-lg font-bold text-indigo-700">{step.time}</span>
                    <span
                      aria-hidden="true"
                      className="hidden size-3 shrink-0 rounded-full bg-indigo-600 ring-4 ring-surface sm:block"
                    />
                  </div>

                  <div className="glass-shine-card flex flex-1 flex-col gap-5 rounded-2xl p-6 shadow-soft transition-shadow duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:shadow-lift sm:p-7 md:flex-row md:items-start">
                    <div className="flex-1">
                      <Badge tone={step.tagTone} className="mb-3">
                        {step.tag}
                      </Badge>
                      <h3 className="text-balance font-display text-lg font-bold text-ink-900 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{step.description}</p>
                    </div>

                    <div className="md:w-[320px] md:shrink-0">
                      <BrowserFrame>
                        {step.image ? (
                          <img
                            src={step.image}
                            alt={step.screenshotLabel}
                            className="block h-auto w-full"
                          />
                        ) : (
                          <ScreenshotPlaceholder label={step.screenshotLabel} />
                        )}
                      </BrowserFrame>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal className="mx-auto mb-8 max-w-xl text-center">
            <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
              Всё, что для этого нужно
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowFeatures.map((feature, index) => (
              <Reveal key={feature.name} delay={FEATURES_START_DELAY + index * FEATURE_STEP_DELAY}>
                <div className="flex h-full items-start gap-3 rounded-2xl bg-surface-muted p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <feature.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">{feature.name}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-500">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          {/* Mobile/tablet: plain centered heading, no room for the portrait. */}
          <Reveal className="lg:hidden">
            <SectionHeading
              eyebrow="Возможности"
              title="Всё, что нужно врачу в одном рабочем пространстве"
              description="Никаких лишних модулей и настроек — только то, чем вы пользуетесь каждый день."
            />
          </Reveal>

          {/* Desktop: doctor portrait as a fading background, heading pushed
              right so doctor + text compose as one centered unit. */}
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[44%]"
              style={{
                backgroundImage: `url(${happyDoctorImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "contain",
                maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
              }}
            />
            <Reveal className="relative flex min-h-[320px] flex-col justify-center py-10 pl-[38%]">
              <SectionHeading
                eyebrow="Возможности"
                title="Всё, что нужно врачу в одном рабочем пространстве"
                description="Никаких лишних модулей и настроек — только то, чем вы пользуетесь каждый день."
                align="left"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={200} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-cta-gradient px-6 py-10 text-center sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            />
            <p className="no-drop-cap relative text-balance font-display text-2xl font-extrabold text-white sm:text-3xl">
              Ваши клиенты уже готовы записываться онлайн
            </p>
            <div className="relative mt-6 flex flex-col items-center gap-3">
              <Button
                to="/contacts"
                variant="secondary"
                size="lg"
                shimmer
                icon={<ArrowRight className="size-5" aria-hidden="true" />}
              >
                Получить доступ
              </Button>
              <p className="text-sm text-white/80">Настройка за 10 минут · Работает с любого устройства</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
