import { BookX, PhoneCall, MousePointerSquareDashed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: BookX,
    title: "Бумажные журналы теряются",
    description:
      "История болезни разбросана по тетрадям и Excel-файлам. Найти нужную запись за прошлый год — целое расследование.",
  },
  {
    icon: PhoneCall,
    title: "Запись — через звонок",
    description:
      "Клиенты звонят, вы записываете вручную на бумажке или в заметках, а потом забываете напомнить о приёме.",
  },
  {
    icon: MousePointerSquareDashed,
    title: "Программы неудобны",
    description:
      "Советские интерфейсы, которые нужно учить неделями — и всё равно тратить лишние минуты на каждого пациента.",
  },
];
