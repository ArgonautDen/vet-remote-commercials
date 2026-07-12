import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { LegalDoc } from "@/data/legalDocs";

interface LegalModalProps {
  doc: LegalDoc | null;
  onClose: () => void;
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!doc) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void/70 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-surface shadow-lift"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-100 px-6 py-5 sm:px-8">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">{doc.title}</h2>
            <p className="mt-1 text-xs text-ink-400">Действует с {doc.updatedAt}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-surface-muted hover:text-ink-900"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5">
            {doc.blocks.map((block, index) => (
              <div key={index} className="flex flex-col gap-2">
                {block.heading && (
                  <h3 className="font-display text-[15px] font-bold text-ink-900">{block.heading}</h3>
                )}
                {block.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-sm leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
                {block.list && (
                  <ul className="flex flex-col gap-1.5">
                    {block.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
