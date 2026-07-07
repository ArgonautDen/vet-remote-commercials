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

export function FeaturesSection() {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Возможности"
            title="Всё, что нужно врачу в одном рабочем пространстве"
            description="Никаких лишних модулей и настроек — только то, чем вы пользуетесь каждый день."
            className="mb-6"
          />
        </Reveal>
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
          visual={
            <div className="relative">
              <BrowserFrame>
                <CalendarMockup />
              </BrowserFrame>
              <PhoneFrame className="absolute -bottom-8 -right-4 hidden w-[180px] shadow-lift sm:block">
                <CalendarDayMockup />
              </PhoneFrame>
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
          visual={
            <BrowserFrame>
              <SurveyMockup />
            </BrowserFrame>
          }
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
      </Container>
    </section>
  );
}
