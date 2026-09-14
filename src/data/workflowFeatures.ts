import {
  Calendar,
  CreditCard,
  MessageCircle,
  ClipboardList,
  FolderOpen,
  Bot,
  FileText,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WorkflowFeature {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const workflowFeatures: WorkflowFeature[] = [
  {
    icon: Calendar,
    name: "Онлайн-запись",
    description: "Личная ссылка. Клиенты сами выбирают удобный слот.",
  },
  {
    icon: CreditCard,
    name: "Предоплата при записи",
    description: "Стоимость приёма видно сразу — без сюрпризов по деньгам.",
  },
  {
    icon: MessageCircle,
    name: "Чат с владельцами",
    description: "Текст и фото — прямо в карточке пациента, без личных номеров.",
  },
  {
    icon: ClipboardList,
    name: "Умные опросники",
    description: "Уходят автоматически после записи. Ответы — в карте пациента.",
  },
  {
    icon: FolderOpen,
    name: "Картотека пациентов",
    description: "История приёмов, вес, файлы — всё по каждому животному.",
  },
  {
    icon: Bot,
    name: "Telegram-бот",
    description: "Уведомления о записях — прямо в мессенджер, без лишних проверок.",
  },
  {
    icon: FileText,
    name: "PDF-выписки",
    description: "Готовый документ с логотипом клиники за один клик.",
  },
  {
    icon: AlertTriangle,
    name: "Экстренные приёмы",
    description: "Отдельный поток без слота — заявка приходит сразу.",
  },
];
