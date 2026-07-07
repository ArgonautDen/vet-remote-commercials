import {
  CalendarDays,
  FileText,
  Home,
  PawPrint,
  Search,
  Settings,
  TrendingUp,
  Link2,
  CheckCircle2,
} from "lucide-react";
import { Avatar, MockupTag } from "@/components/mockups/mockupPrimitives";

const sidebarItems = [
  { icon: Home, active: false },
  { icon: PawPrint, active: true },
  { icon: CalendarDays, active: false },
  { icon: FileText, active: false },
];

const historyRows = [
  { date: "12 мар", note: "Плановый осмотр, вес в норме", tone: "emerald" as const },
  { date: "02 фев", note: "Вакцинация (комплекс)", tone: "indigo" as const },
  { date: "18 янв", note: "Первичный приём", tone: "neutral" as const },
];

const weightBars = [62, 68, 64, 72, 76, 74];

const appointments = [
  { time: "10:00", name: "Барсик · осмотр", tone: "bg-indigo-500" },
  { time: "11:30", name: "Рекс · прививка", tone: "bg-pumpkin-500" },
  { time: "13:15", name: "Муся · УЗИ", tone: "bg-emerald-500" },
];

export function DashboardMockup() {
  return (
    <div className="flex h-full min-h-[420px] text-ink-900">
      <aside className="flex w-14 flex-col items-center gap-3 border-r border-ink-100 bg-white py-4">
        {sidebarItems.map(({ icon: Icon, active }, index) => (
          <span
            key={index}
            className={
              active
                ? "flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white"
                : "flex size-9 items-center justify-center rounded-lg text-ink-400"
            }
          >
            <Icon className="size-[18px]" aria-hidden="true" />
          </span>
        ))}
        <span className="mt-auto flex size-9 items-center justify-center rounded-lg text-ink-300">
          <Settings className="size-[18px]" aria-hidden="true" />
        </span>
      </aside>

      <div className="flex-1 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2 text-xs text-ink-400">
            <Search className="size-3.5" aria-hidden="true" />
            Поиск пациента...
          </div>
          <Avatar label="ДВ" index={0} />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    <PawPrint className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">Барсик</p>
                    <p className="text-xs text-ink-400">Кот · Британец · 3 года · Анна К.</p>
                  </div>
                </div>
                <MockupTag tone="emerald">Здоров</MockupTag>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                <span className="flex items-center gap-1.5 font-medium text-ink-600">
                  <TrendingUp className="size-3.5 text-indigo-500" aria-hidden="true" />
                  Вес, кг
                </span>
                <span>Последние 6 визитов</span>
              </div>
              <div className="mt-2 flex h-16 items-end gap-2">
                {weightBars.map((value, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-md bg-indigo-200 last:bg-indigo-600"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
                История приёмов
              </p>
              <ul className="flex flex-col gap-3">
                {historyRows.map((row) => (
                  <li key={row.date} className="flex items-center gap-3 text-xs">
                    <span className="w-12 shrink-0 font-medium text-ink-400">{row.date}</span>
                    <span className="flex-1 text-ink-700">{row.note}</span>
                    <MockupTag tone={row.tone}>●</MockupTag>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-ink-100 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                  Сегодня
                </p>
                <CalendarDays className="size-3.5 text-ink-300" aria-hidden="true" />
              </div>
              <ul className="flex flex-col gap-2.5">
                {appointments.map((item) => (
                  <li key={item.time} className="flex items-center gap-2.5 text-xs">
                    <span className={`size-2 rounded-full ${item.tone}`} />
                    <span className="w-11 font-medium text-ink-400">{item.time}</span>
                    <span className="text-ink-700">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50/60 p-4">
              <div className="mb-2 flex items-center gap-2 text-indigo-700">
                <Link2 className="size-3.5" aria-hidden="true" />
                <p className="text-xs font-semibold">Анкета перед приёмом</p>
              </div>
              <p className="mb-3 text-[11px] leading-relaxed text-indigo-600/80">
                Ссылка отправлена владельцу Барсика
              </p>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Ответы получены
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
