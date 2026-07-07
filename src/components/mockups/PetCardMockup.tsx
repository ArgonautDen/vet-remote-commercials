import { Bell, PawPrint, Plus, Syringe } from "lucide-react";
import { MockupTag } from "@/components/mockups/mockupPrimitives";

const tabs = ["Обзор", "История", "Анализы", "Файлы"];

const timeline = [
  { date: "12 мар 2025", title: "Плановый осмотр", desc: "Вес 4.2 кг, температура норма", tone: "emerald" as const },
  { date: "02 фев 2025", title: "Вакцинация Nobivac", desc: "Следующая — через 12 месяцев", tone: "indigo" as const },
  { date: "18 янв 2025", title: "Первичный приём", desc: "Заведена карта пациента", tone: "neutral" as const },
];

export function PetCardMockup() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col gap-4 rounded-xl border border-ink-100 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <PawPrint className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-bold text-ink-900">Барсик</p>
              <p className="text-sm text-ink-400">Кот · Британская короткошёрстная · 3 года</p>
              <p className="text-xs text-ink-400">Владелец: Анна Ковалёва · +7 900 123-45-67</p>
            </div>
          </div>
          <MockupTag tone="emerald">Здоров</MockupTag>
        </div>

        <div className="flex gap-1 border-b border-ink-100 pb-0.5">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={
                index === 1
                  ? "rounded-t-lg border-b-2 border-indigo-600 px-3 py-2 text-xs font-semibold text-indigo-700"
                  : "px-3 py-2 text-xs font-medium text-ink-400"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-lg bg-pumpkin-50 px-3 py-2.5">
          <span className="flex items-center gap-2 text-xs font-medium text-pumpkin-700">
            <Bell className="size-3.5" aria-hidden="true" />
            Напоминание: ревакцинация через 3 недели
          </span>
          <Syringe className="size-4 text-pumpkin-500" aria-hidden="true" />
        </div>

        <ul className="flex flex-col gap-3">
          {timeline.map((entry) => (
            <li key={entry.date} className="flex gap-3 rounded-lg border border-ink-100 p-3">
              <span className="mt-0.5 w-20 shrink-0 text-[11px] font-medium text-ink-400">
                {entry.date}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-800">{entry.title}</p>
                <p className="text-xs text-ink-400">{entry.desc}</p>
              </div>
              <MockupTag tone={entry.tone}>●</MockupTag>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex items-center justify-center gap-1.5 self-start rounded-lg border border-dashed border-indigo-300 px-3 py-2 text-xs font-semibold text-indigo-600"
        >
          <Plus className="size-3.5" aria-hidden="true" />
          Добавить запись
        </button>
      </div>
    </div>
  );
}
