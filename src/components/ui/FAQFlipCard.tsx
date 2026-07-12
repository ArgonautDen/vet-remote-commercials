import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface FAQFlipCardProps {
  question: string;
  answer: string;
  index: number;
}

const faceClasses = "flip-card-face absolute inset-0 flex size-full flex-col justify-between rounded-3xl p-6";

/**
 * Floating card that flips in 3D on click — question on the front, answer
 * on the back. Semi-transparent brand-blue glass on both faces (rather than
 * a solid fill), with a slow color/shadow-only hover transition. Kept off
 * `transform` on purpose: the flip itself lives on `transform`
 * (`.flip-card-face-back`'s `rotateY(180deg)`), and an earlier hover effect
 * that also touched `transform` fought with it and broke the flip — see
 * `.flip-card-*` in index.css. Desktop/tablet only; FAQSection falls back to
 * the plain <Accordion> list on mobile.
 */
export function FAQFlipCard({ question, answer, index }: FAQFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const label = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((prev) => !prev)}
      aria-expanded={isFlipped}
      aria-label={isFlipped ? `Скрыть ответ: ${question}` : `Показать ответ: ${question}`}
      className="flip-card-scene h-64 w-full cursor-pointer text-left"
    >
      <div className={cn("flip-card-plate size-full", isFlipped && "is-flipped")}>
        <div
          className={cn(
            faceClasses,
            "border border-white/40 bg-indigo-600/25 shadow-soft backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-500 ease-out hover:bg-indigo-600/40 hover:shadow-lift",
          )}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-xs font-bold tracking-wide text-indigo-800">
            Вопрос {label}
          </span>
          <p className="text-balance font-display text-lg font-bold leading-snug text-ink-900">{question}</p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-pumpkin-600">
            Ответ
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div
          className={cn(
            faceClasses,
            "flip-card-face-back border border-white/10 bg-indigo-800/85 shadow-soft backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow] duration-500 ease-out hover:bg-indigo-800/95 hover:shadow-lift",
          )}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-pumpkin-300">
            Ответ {label}
          </span>
          <p className="no-scrollbar overflow-y-auto text-[15px] leading-relaxed text-white/80">{answer}</p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-pumpkin-300">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Назад
          </span>
        </div>
      </div>
    </button>
  );
}
