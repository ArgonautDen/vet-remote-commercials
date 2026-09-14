import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricingPlans, pricingPackageOptions, pricingPackageFeatures } from "@/data/pricing";
import { cn } from "@/lib/cn";

export function PricingSection() {
  const [selectedMonths, setSelectedMonths] = useState(pricingPackageOptions[0].months);
  const selectedOption =
    pricingPackageOptions.find((option) => option.months === selectedMonths) ?? pricingPackageOptions[0];
  const totalPrice = selectedOption.pricePerMonth * selectedOption.months;

  return (
    <section id="pricing" className="relative overflow-hidden bg-indigo-600 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="hero-blob absolute -left-24 bottom-0 -z-10 size-96 rounded-full bg-pumpkin-300/20 blur-3xl animate-float"
        style={{ animationDelay: "0.8s" }}
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Тарифы"
            title="Простая и честная цена"
            description="Одна оплаченная консультация окупает полный доступ к программе на месяц вперёд."
            tone="dark"
            className="mb-14"
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} direction={index === 0 ? "left" : "up"} delay={index * 120}>
              <div className="glass-shine-card flex h-full flex-col gap-6 rounded-3xl border p-7 shadow-soft transition-shadow duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:shadow-lift sm:p-8">
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-indigo-600">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-sm text-ink-400">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{plan.description}</p>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="text-ink-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button to="/contacts" variant="secondary" size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}

          <Reveal direction="right" delay={pricingPlans.length * 120}>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-indigo-600 bg-void p-7 text-white shadow-lift sm:p-8">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-pumpkin-300">
                  Пакет на несколько месяцев
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold">
                    {selectedOption.pricePerMonth.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-sm text-white/60">в месяц</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Спишется {totalPrice.toLocaleString("ru-RU")} ₽ сразу за {selectedOption.months} мес.
                </p>
              </div>

              <div
                role="group"
                aria-label="Срок пакета"
                className="inline-flex rounded-full bg-white/10 p-1"
              >
                {pricingPackageOptions.map((option) => (
                  <button
                    key={option.months}
                    type="button"
                    onClick={() => setSelectedMonths(option.months)}
                    className={cn(
                      "flex-1 cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
                      option.months === selectedMonths
                        ? "bg-white text-ink-900"
                        : "text-white/70 hover:text-white",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {pricingPackageFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-pumpkin-300" aria-hidden="true" />
                    <span className="text-white/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button to="/contacts" variant="primary" size="lg" shimmer className="w-full">
                Подключить
              </Button>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-sm text-white/70">
          Нет скрытых платежей. Нет «модулей за доп. плату». Одна цена — всё включено.
        </p>
      </Container>
    </section>
  );
}
