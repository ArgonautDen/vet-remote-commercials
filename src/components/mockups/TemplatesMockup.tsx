import { FileText, MousePointerClick } from "lucide-react";

const templates = [
  { title: "Плановая вакцинация", tag: "Назначение" },
  { title: "Диагноз: отит", tag: "Диагноз" },
  { title: "Рекомендации после стерилизации", tag: "Рекомендации" },
  { title: "Дегельминтизация", tag: "Назначение" },
];

export function TemplatesMockup() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl border border-ink-100 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
            <FileText className="size-3.5" aria-hidden="true" />
            Мои шаблоны
          </p>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600">
            <MousePointerClick className="size-3.5" aria-hidden="true" />
            Вставить одним кликом
          </span>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {templates.map((template) => (
            <li
              key={template.title}
              className="flex items-center justify-between gap-2 rounded-lg border border-ink-100 px-3 py-2.5 text-xs hover:border-indigo-200"
            >
              <span className="font-medium text-ink-700">{template.title}</span>
              <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
                {template.tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
