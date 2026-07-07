import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/cn";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Тарифы"
            title="Простая и честная цена"
            description="Начните бесплатно, переходите на полный доступ, когда будете готовы."
            className="mb-14"
          />
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} direction={index === 0 ? "left" : "right"} delay={index * 120}>
              <div
                className={cn(
                  "relative flex h-full flex-col gap-6 rounded-3xl border p-7 sm:p-8",
                  plan.highlighted
                    ? "border-indigo-600 bg-void text-white shadow-lift"
                    : "border-ink-200 bg-surface shadow-soft",
                )}
              >
                <CornerMarks />
                <div>
                  <p
                    className={cn(
                      "font-display text-sm font-bold uppercase tracking-wide",
                      plan.highlighted ? "text-pumpkin-300" : "text-indigo-600",
                    )}
                  >
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                    <span className={cn("text-sm", plan.highlighted ? "text-white/60" : "text-ink-400")}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={cn("mt-3 text-sm leading-relaxed", plan.highlighted ? "text-white/70" : "text-ink-500")}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.highlighted ? "text-pumpkin-300" : "text-indigo-600",
                        )}
                        aria-hidden="true"
                      />
                      <span className={plan.highlighted ? "text-white/85" : "text-ink-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contacts"
                  variant={plan.highlighted ? "outline" : "primary"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          Нет скрытых платежей. Нет «модулей за доп. плату». Одна цена — всё включено.
        </p>
      </Container>
    </section>
  );
}
