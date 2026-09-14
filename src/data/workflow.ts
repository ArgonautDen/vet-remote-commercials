import newBookingsImage from "@/assets/screenshots/workflow-new-bookings.jpg";
import anamnesisImage from "@/assets/screenshots/workflow-anamnesis.jpg";
import chatImage from "@/assets/screenshots/workflow-chat.jpg";
import emergencyImage from "@/assets/screenshots/workflow-emergency.jpg";
import pdfExportImage from "@/assets/screenshots/workflow-pdf-export.jpg";

export type WorkflowTagTone = "indigo" | "pumpkin" | "rose" | "neutral";

export interface WorkflowStep {
  time: string;
  tag: string;
  tagTone: WorkflowTagTone;
  title: string;
  description: string;
  screenshotLabel: string;
  image?: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    time: "8:30",
    tag: "Утро",
    tagTone: "neutral",
    title: "Новые записи — пока вы спали",
    description:
      "Клиенты записались сами ночью через вашу личную ссылку. Система приняла заявки, собрала предоплату и поставила в слоты. В Telegram — уведомление с именем животного и типом приёма.",
    screenshotLabel: "Скриншот: календарь с новыми записями",
    image: newBookingsImage,
  },
  {
    time: "10:00",
    tag: "Приём",
    tagTone: "pumpkin",
    title: "Анамнез уже заполнен до вашего появления",
    description:
      "Система автоматически отправила опросник владельцу сразу после записи. Вы открываете карту — история визитов, динамика веса и ответы на ваши вопросы уже здесь.",
    screenshotLabel: "Скриншот: карточка пациента",
    image: anamnesisImage,
  },
  {
    time: "13:40",
    tag: "Чат",
    tagTone: "indigo",
    title: "Клиент пишет — вы отвечаете за 2 минуты",
    description:
      "Владелец прикрепил фото анализов и написал в чат. Вы отвечаете прямо в браузере — без мессенджеров и личных номеров. Переписка и фото сохраняются в карте пациента.",
    screenshotLabel: "Скриншот: чат с владельцем",
    image: chatImage,
  },
  {
    time: "16:15",
    tag: "Экстренно",
    tagTone: "rose",
    title: "Экстренный пациент — без ожидания свободного слота времени",
    description:
      "Экстренное животное, хозяйка не может ждать до завтра. Она выбирает экстренную консультацию на вашей странице записи и вносит предоплату — вы сразу получаете заявку с контактами владельца.",
    screenshotLabel: "Скриншот: заявка на экстренный приём",
    image: emergencyImage,
  },
  {
    time: "18:50",
    tag: "Конец дня",
    tagTone: "neutral",
    title: "Приём заполнен — PDF готов",
    description:
      "Последний пациент ушёл. Вы вносите рекомендации и назначения в карточку приёма. Одна кнопка — и готовый PDF с логотипом клиники и эпикризом. Можно отправить владельцу или распечатать.",
    screenshotLabel: "Скриншот: PDF-выписка",
    image: pdfExportImage,
  },
];
