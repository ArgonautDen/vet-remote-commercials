import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

const slots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];

export function BookingMockup() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="border-b border-ink-100 px-4 py-3.5 text-center">
        <p className="text-[11px] text-ink-400">vet-remote.ru/dr/anokhina</p>
        <p className="font-display text-sm font-bold text-ink-900">Др. Анохина Е.В.</p>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
            Выберите время
          </p>
          <p className="mb-2 text-xs font-semibold text-ink-700">Вторник, 11 марта</p>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot, index) => (
              <span
                key={slot}
                className={cn(
                  "rounded-lg border py-2 text-center text-[11px] font-semibold",
                  index === 2
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-ink-200 text-ink-600",
                )}
              >
                {slot}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-ink-100 p-3">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
            Питомец
          </p>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
              Б
            </span>
            <span className="text-xs font-semibold text-ink-800">Барсик · кот</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white">
          <CalendarCheck className="size-4" aria-hidden="true" />
          Подтвердить запись
        </div>

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-600">
          <CheckCircle2 className="size-3.5" aria-hidden="true" />
          Подтверждение придёт на email
        </p>
      </div>
    </div>
  );
}
