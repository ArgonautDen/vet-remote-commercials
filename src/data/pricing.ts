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
    name: "Полный доступ",
    price: "2 490 ₽",
    period: "в месяц",
    description: "Для практикующего врача или частного кабинета — всё включено.",
    features: [
      "Всё из пробного тарифа",
      "Личная ссылка для онлайн-записи",
      "Неограниченное хранилище файлов",
      "Расширенная статистика приёмов",
      "Приоритетная поддержка",
    ],
    cta: "Подключить",
    highlighted: true,
  },
];
