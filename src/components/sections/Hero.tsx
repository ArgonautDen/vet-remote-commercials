import { useState } from "react";
import { CalendarCheck, PlayCircle, ShieldCheck, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HashLink } from "@/components/ui/HashLink";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { VideoModal } from "@/components/VideoModal";
import { useAppReady } from "@/context/AppReadyContext";
import dashboardScreenshot from "@/assets/screenshots/dashboard.jpg";
import dashboardMobileScreenshot from "@/assets/screenshots/dashboard-mobile.jpg";

const trustPoints = [
  { icon: ShieldCheck, label: "Без установки" },
  { icon: CreditCard, label: "Без карты" },
  { icon: Smartphone, label: "Поддержка на русском" },
];

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const isAppReady = useAppReady();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b-2 border-pumpkin-500/30 bg-mesh-hero pb-20 pt-14 sm:pb-24 sm:pt-20 lg:min-h-[92vh] lg:pb-28 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="hero-blob absolute -left-24 top-24 -z-10 size-72 rounded-full bg-indigo-300/25 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="hero-blob absolute -right-16 top-56 -z-10 size-80 rounded-full bg-pumpkin-300/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating ring outlines, echoing login.css's own decorative
          circles (border + slow float). */}
      <div
        aria-hidden="true"
        className="brand-ring absolute -right-16 -top-20 -z-10 size-[340px] rounded-full border-2 border-pumpkin-500/25"
        style={{ animation: "brand-ring-float 20s ease-in-out infinite" }}
      />
      <div
        aria-hidden="true"
        className="brand-ring absolute -bottom-16 -left-10 -z-10 size-[220px] rounded-full border-2 border-pumpkin-500/20"
        style={{ animation: "brand-ring-float 15s ease-in-out infinite reverse" }}
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        <Reveal direction="left" active={isAppReady} className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-soft backdrop-blur">
            Первая в России CRM для ветврачей нового поколения
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Ведите пациентов так,
            <br className="hidden sm:block" /> как вы всегда хотели
          </h1>

          <p className="max-w-xl text-balance text-lg leading-relaxed text-ink-500 sm:text-xl">
            VetRemote — первая в России ветеринарная CRM с современным интерфейсом. Картотека,
            календарь, онлайн-запись и анкеты — всё в одном месте. Работает на компьютере и
            телефоне.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <HashLink hash="#pricing">
              <Button
                variant="primary"
                size="lg"
                shimmer
                icon={<CalendarCheck className="size-5" />}
              >
                Попробовать бесплатно
              </Button>
            </HashLink>
            <Button
              variant="ghost"
              size="lg"
              icon={<PlayCircle className="size-5" />}
              iconPosition="left"
              onClick={() => setIsVideoOpen(true)}
            >
              Смотреть демо
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-ink-500">
                <Icon className="size-4 text-indigo-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={150} active={isAppReady} className="relative">
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group relative block w-full cursor-pointer text-left"
              aria-label="Смотреть демо VetRemote"
            >
              <img
                src={dashboardScreenshot}
                alt="Интерфейс VetRemote"
                className="block h-auto w-full rounded-2xl shadow-lift transition-transform duration-500 group-hover:-translate-y-1"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-void/0 transition-colors duration-300 group-hover:bg-void/10">
                <span className="flex size-16 scale-90 items-center justify-center rounded-full bg-white/95 text-indigo-600 opacity-0 shadow-lift transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <PlayCircle className="size-8" aria-hidden="true" />
                </span>
              </span>
            </button>

            <Reveal
              direction="up"
              delay={450}
              active={isAppReady}
              className="absolute -right-6 bottom-[20px] hidden sm:block lg:-right-10 lg:bottom-[4px]"
            >
              <PhoneFrame className="shadow-lift">
                <img
                  src={dashboardMobileScreenshot}
                  alt="Мобильная версия VetRemote"
                  className="block size-full object-cover"
                />
              </PhoneFrame>
            </Reveal>
          </div>
        </Reveal>
      </Container>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
