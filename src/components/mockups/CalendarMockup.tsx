import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const events: Record<number, { time: string; label: string; tone: string }[]> = {
  0: [{ time: "09:30", label: "Барсик · осмотр", tone: "bg-indigo-100 text-indigo-700" }],
  1: [
    { time: "10:00", label: "Рекс · прививка", tone: "bg-pumpkin-100 text-pumpkin-700" },
    { time: "15:00", label: "Муся · УЗИ", tone: "bg-emerald-100 text-emerald-700" },
  ],
  2: [{ time: "12:15", label: "Тор · стрижка когтей", tone: "bg-indigo-100 text-indigo-700" }],
  3: [
    { time: "09:00", label: "Кекс · осмотр", tone: "bg-indigo-100 text-indigo-700" },
    { time: "13:30", label: "Луна · вакцинация", tone: "bg-pumpkin-100 text-pumpkin-700" },
  ],
  4: [{ time: "11:00", label: "Симба · операция", tone: "bg-rose-100 text-rose-700" }],
  5: [],
};

export function CalendarMockup() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl border border-ink-100 bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-display text-sm font-bold text-ink-900">Март 2025</p>
            <p className="text-xs text-ink-400">Неделя, 10—15 марта</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white">
            <Plus className="size-3.5" aria-hidden="true" />
            Новая запись
          </span>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {days.map((day, index) => (
            <div key={day} className="flex flex-col gap-2">
              <div className="flex flex-col items-center rounded-lg bg-ink-50 py-1.5">
                <span className="text-[11px] font-medium text-ink-400">{day}</span>
                <span
                  className={cn(
                    "text-xs font-bold",
                    index === 1 ? "text-indigo-600" : "text-ink-700",
                  )}
                >
                  {10 + index}
                </span>
              </div>
              <div className="flex min-h-[96px] flex-col gap-1.5">
                {(events[index] ?? []).map((event) => (
                  <div
                    key={event.time + event.label}
                    className={cn("rounded-md px-1.5 py-1 text-[10px] font-medium leading-tight", event.tone)}
                  >
                    <p className="font-semibold">{event.time}</p>
                    <p className="truncate">{event.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
