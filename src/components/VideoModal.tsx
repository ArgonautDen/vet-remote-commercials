import { useEffect } from "react";
import { createPortal } from "react-dom";
import { PlayCircle, X } from "lucide-react";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { BrowserFrame } from "@/components/mockups/BrowserFrame";

/**
 * Set to a real YouTube video ID to embed the actual product demo.
 * Left empty, the modal shows a tasteful "coming soon" placeholder instead
 * of a broken embed.
 */
const DEMO_VIDEO_ID = "";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Демо VetRemote"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void/70 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-surface shadow-lift"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть видео"
          className="absolute right-3 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-soft transition-colors hover:bg-white"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="aspect-video w-full">
          {DEMO_VIDEO_ID ? (
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1`}
              title="Демо VetRemote"
              allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative flex size-full items-center justify-center bg-void p-6">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <BrowserFrame className="scale-110">
                  <DashboardMockup />
                </BrowserFrame>
              </div>
              <div className="relative flex flex-col items-center gap-3 text-center">
                <PlayCircle className="size-16 text-white/90" aria-hidden="true" />
                <p className="font-display text-lg font-bold text-white">
                  Демо-видео скоро появится здесь
                </p>
                <p className="max-w-sm text-sm text-white/70">
                  А пока — попробуйте VetRemote бесплатно и посмотрите живой интерфейс своими
                  глазами.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
