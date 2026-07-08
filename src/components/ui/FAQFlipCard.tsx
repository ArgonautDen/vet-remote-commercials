import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface FAQFlipCardProps {
  question: string;
  answer: string;
  index: number;
}

/**
 * Floating card that flips in 3D on click — question on the front, answer
 * on the back. Desktop/tablet only; FAQSection falls back to the plain
 * <Accordion> list on mobile (see .flip-card-* in index.css for the 3D
 * mechanics: perspective on the scene, preserve-3d + rotateY on the plate,
 * backface-hidden faces).
 */
export function FAQFlipCard({ question, answer, index }: FAQFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((prev) => !prev)}
      aria-expanded={isFlipped}
      aria-label={isFlipped ? `Скрыть ответ: ${question}` : `Показать ответ: ${question}`}
      className="flip-card-scene group h-64 w-full cursor-pointer text-left animate-float"
      style={{ animationDelay: `${index * 0.5}s`, animationDuration: "7s" }}
    >
      <div className={cn("flip-card-plate size-full", isFlipped && "is-flipped")}>
        <div
          className={cn(
            "flip-card-face absolute inset-0 flex size-full flex-col justify-between rounded-3xl border border-ink-200 bg-surface p-6 shadow-soft transition-shadow duration-300",
            "group-hover:shadow-lift",
          )}
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-pumpkin-50 font-display text-sm font-bold text-pumpkin-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-balance font-display text-lg font-bold leading-snug text-ink-900">
            {question}
          </p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
            Показать ответ
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div className="flip-card-face flip-card-face-back absolute inset-0 flex size-full flex-col justify-between rounded-3xl border border-indigo-800 bg-void p-6 text-white shadow-lift">
          <span className="text-xs font-semibold uppercase tracking-wide text-pumpkin-300">
            Ответ
          </span>
          <p className="overflow-y-auto text-[15px] leading-relaxed text-white/90">{answer}</p>
          <span className="flex items-center gap-1.5 text-sm font-medium text-white/60">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Назад к вопросу
          </span>
        </div>
      </div>
    </button>
  );
}
