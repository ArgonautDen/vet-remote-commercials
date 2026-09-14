export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Пробный",
    price: "0 ₽",
    period: "14 дней",
    description: "Все функции без ограничений. Без карты, без обязательств.",
    features: [
      "Неограниченное число пациентов",
      "Календарь и онлайн-запись",
      "Анкеты перед приёмом",
      "Шаблоны назначений",
      "Поддержка на русском",
    ],
    cta: "Попробовать бесплатно",
  },
  {
    name: "1 месяц",
    price: "5 000 ₽",
    period: "в месяц",
    description: "Для практикующего врача или частного кабинета — всё включено.",
    features: [
      "Неограниченное число пациентов",
      "Чат с владельцами (текст, фото, голосовые)",
      "Личная ссылка для онлайн-записи",
      "Неограниченное хранилище файлов",
      "Расширенная статистика приёмов",
      "Поддержка на русском",
    ],
    cta: "Подключить",
  },
];

export interface PricingPackageOption {
  label: string;
  months: number;
  pricePerMonth: number;
}

/** Longer-commitment package: same "1 месяц" plan, discounted per-month the
 * longer the period — switched via the pill toggle in the pricing card. */
export const pricingPackageOptions: PricingPackageOption[] = [
  { label: "3 мес", months: 3, pricePerMonth: 4500 },
  { label: "6 мес", months: 6, pricePerMonth: 4000 },
  { label: "Год", months: 12, pricePerMonth: 3000 },
];

export const pricingPackageFeatures: string[] = [
  "Всё из тарифа «1 месяц»",
  "Цена зафиксирована на весь срок",
  "Экономия до 40% в пересчёте на месяц",
  "Приоритетная поддержка",
];
