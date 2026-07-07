import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

const slots = [
  { time: "09:00", label: "Барсик", desc: "Осмотр", tone: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { time: "10:30", label: "Рекс", desc: "Прививка", tone: "bg-pumpkin-50 border-pumpkin-200 text-pumpkin-700" },
  { time: "12:00", label: "—", desc: "Свободно", tone: "border-dashed border-ink-200 text-ink-300" },
  { time: "13:15", label: "Муся", desc: "УЗИ брюшной полости", tone: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { time: "15:00", label: "Кекс", desc: "Осмотр", tone: "bg-indigo-50 border-indigo-200 text-indigo-700" },
];

export function CalendarDayMockup() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3.5">
        <ChevronLeft className="size-4 text-ink-300" aria-hidden="true" />
        <div className="text-center">
          <p className="text-[11px] text-ink-400">Вторник</p>
          <p className="font-display text-sm font-bold text-ink-900">11 марта</p>
        </div>
        <ChevronRight className="size-4 text-ink-300" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-3.5">
        {slots.map((slot) => (
          <div
            key={slot.time}
            className={cn("rounded-lg border px-3 py-2.5", slot.tone)}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold">{slot.time}</span>
              <span className="text-[11px] font-medium">{slot.desc}</span>
            </div>
            {slot.label !== "—" && (
              <p className="mt-0.5 text-xs font-semibold">{slot.label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
