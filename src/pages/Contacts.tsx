import { Clock, Mail, Send, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@vetremote.ru",
    href: "mailto:info@vetremote.ru",
  },
  {
    icon: Send,
    label: "Telegram-канал",
    value: "@vetremote",
    href: "https://t.me/vetremote",
  },
  {
    icon: Clock,
    label: "Время ответа",
    value: "В течение нескольких часов, будни 9:00–19:00 МСК",
  },
];

export function Contacts() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-5xl">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Свяжитесь с нами
          </h1>
          <p className="mt-4 text-balance text-lg leading-relaxed text-ink-500">
            Есть вопросы? Хотите демо или помощь с переходом? Напишите — ответим в течение
            нескольких часов.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div id="contact-form" className="scroll-mt-24">
            <Reveal direction="left" className="rounded-3xl border border-ink-200 bg-surface p-6 shadow-soft sm:p-8">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal direction="right" delay={120} className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-3xl border border-ink-200 bg-surface p-6 shadow-soft sm:p-8">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <detail.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        {detail.label}
                      </p>
                      <p className="text-[15px] font-medium text-ink-800">{detail.value}</p>
                    </div>
                  </div>
                );

                if (detail.href) {
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={detail.label}>{content}</div>;
              })}
            </div>

            <div className="flex flex-col gap-4 rounded-3xl bg-cta-gradient p-6 text-white shadow-lift sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/15">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-bold">Для клиник и команд</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                  Работаете с несколькими врачами? Получите персональное демо и поможем настроить
                  VetRemote под процессы вашей клиники.
                </p>
              </div>
              <Button
                href="mailto:info@vetremote.ru?subject=Демо для клиники"
                variant="secondary"
                size="md"
                className="w-fit"
              >
                Запросить демо
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
