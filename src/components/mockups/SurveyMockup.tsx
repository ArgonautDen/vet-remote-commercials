import { ArrowRight, ClipboardCheck, Link2, Send } from "lucide-react";

const questions = [
  "Когда появились симптомы?",
  "Питомец ел/пил сегодня?",
  "Есть ли хронические заболевания?",
];

const answers = [
  { q: "Симптомы", a: "Со вчерашнего вечера" },
  { q: "Аппетит", a: "Ел меньше обычного" },
  { q: "Хронические болезни", a: "Нет" },
];

export function SurveyMockup() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
      <div className="rounded-xl border border-ink-100 bg-white p-4">
        <p className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
          <ClipboardCheck className="size-3.5" aria-hidden="true" />
          Анкета «Первичный приём»
        </p>
        <ul className="flex flex-col gap-2">
          {questions.map((question) => (
            <li key={question} className="rounded-lg bg-ink-50 px-3 py-2 text-xs text-ink-600">
              {question}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/60 p-4 text-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-indigo-600 text-white">
          <Send className="size-4" aria-hidden="true" />
        </span>
        <p className="text-xs font-semibold text-indigo-700">Одноразовая ссылка</p>
        <p className="flex items-center gap-1 text-[11px] text-indigo-500">
          <Link2 className="size-3" aria-hidden="true" />
          vetremote.app/f/8k2p
        </p>
        <ArrowRight className="mt-1 size-4 text-indigo-300" aria-hidden="true" />
      </div>

      <div className="rounded-xl border border-ink-100 bg-white p-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
          Ответы в карточке пациента
        </p>
        <ul className="flex flex-col gap-2.5">
          {answers.map((item) => (
            <li key={item.q} className="text-xs">
              <p className="text-ink-400">{item.q}</p>
              <p className="font-medium text-ink-800">{item.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
