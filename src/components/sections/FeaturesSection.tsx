import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { PetCardMockup } from "@/components/mockups/PetCardMockup";
import { CalendarMockup } from "@/components/mockups/CalendarMockup";
import { CalendarDayMockup } from "@/components/mockups/CalendarDayMockup";
import { BookingMockup } from "@/components/mockups/BookingMockup";
import { SurveyMockup } from "@/components/mockups/SurveyMockup";
import { TemplatesMockup } from "@/components/mockups/TemplatesMockup";
import happyDoctorImage from "@/assets/screenshots/happy-doctor.jpg";
import chatImage from "@/assets/screenshots/chat.jpg";
import videoImage from "@/assets/screenshots/video.jpg";

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="hero-blob absolute -right-32 top-1/3 -z-10 size-[28rem] rounded-full bg-pumpkin-300/15 blur-3xl animate-float"
        style={{ animationDelay: "2.2s" }}
      />
      <Container>
        {/* Mobile/tablet: plain centered heading, no room for the portrait. */}
        <Reveal className="lg:hidden">
          <SectionHeading
            eyebrow="Возможности"
            title="Всё, что нужно врачу в одном рабочем пространстве"
            description="Никаких лишних модулей и настроек — только то, чем вы пользуетесь каждый день."
            className="mb-6"
          />
        </Reveal>

        {/* Desktop: doctor portrait as a fading background, heading pushed
            right so doctor + text compose as one centered unit. */}
        <div className="relative mb-6 hidden lg:block">
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
      </Container>

      <Container className="divide-y divide-ink-100">
        <FeatureRow
          index="01"
          eyebrow="Картотека"
          title="Полная история каждого пациента"
          description="Вес в динамике, история приёмов, напоминания о прививках — всё в одной карточке. Находите любого питомца за секунду."
          visual={
            <BrowserFrame>
              <PetCardMockup />
            </BrowserFrame>
          }
        />

        <FeatureRow
          index="02"
          eyebrow="Календарь"
          title="Календарь, который работает на вас"
          description="Записи на день и неделю, цветовая кодировка типов приёма, мгновенное добавление события. На телефоне — вертикальный вид по дням, удобно смотреть между приёмами."
          reverse
          className="!pt-[150px]"
          visual={
            <div className="relative lg:min-h-[410px]">
              <CalendarMockup />
              <Reveal
                direction="up"
                delay={300}
                className="absolute -bottom-[2px] left-6 z-10 hidden lg:block"
              >
                <PhoneFrame className="!w-[180px] shadow-lift">
                  <CalendarDayMockup />
                </PhoneFrame>
              </Reveal>
            </div>
          }
        />

        <FeatureRow
          index="03"
          eyebrow="Онлайн-запись"
          title="Клиенты записываются сами — 24/7"
          description="Дайте клиенту личную ссылку — он выберет время, укажет питомца и получит подтверждение на email. Вы видите заявку в календаре сразу."
          visual={
            <div className="flex justify-center">
              <PhoneFrame>
                <BookingMockup />
              </PhoneFrame>
            </div>
          }
        />

        <FeatureRow
          index="04"
          eyebrow="Анкеты"
          title="Узнайте всё о пациенте до приёма"
          description="Создайте анкету с нужными вопросами, отправьте одноразовую ссылку клиенту. Ответы сохранятся в системе — приём начнётся уже подготовленным."
          reverse
          visual={<SurveyMockup />}
        />

        <FeatureRow
          index="05"
          eyebrow="Шаблоны"
          title="Ваши протоколы — под рукой"
          description="Сохраняйте шаблоны назначений, диагнозов и рекомендаций. Одним кликом вставляйте в карточку пациента — не набирайте одно и то же снова."
          visual={
            <BrowserFrame>
              <TemplatesMockup />
            </BrowserFrame>
          }
        />

        <FeatureRow
          index="06"
          eyebrow="Чат"
          title="Чат с владельцами — без ВПН и приложений"
          description="Отвечайте прямо в браузере — не нужно ставить приложения или обходить блокировки через VPN. Никаких личных номеров: переписка идёт через карточку пациента. Чат всегда под рукой: с компьютера или телефона, где бы вы ни были."
          reverse
          visual={
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={chatImage}
                alt="Врач отвечает владельцу в чате прямо с ноутбука"
                className="block h-auto w-full"
              />
            </div>
          }
        />

        <FeatureRow
          index="07"
          eyebrow="Видеозвонки"
          title="Видеоконсультации с доктором"
          description="Проведите приём по видеосвязи, если владелец не может приехать. Звонок открывается прямо в браузере по ссылке — без установки программ. Видите питомца и владельца в реальном времени, как на очном приёме."
          visual={
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={videoImage}
                alt="Врач проводит видеоконсультацию с владельцем питомца"
                className="block h-auto w-full"
              />
            </div>
          }
        />
      </Container>
    </section>
  );
}
