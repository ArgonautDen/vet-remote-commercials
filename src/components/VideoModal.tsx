import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import dashboardScreenshot from "@/assets/screenshots/dashboard.jpg";
import demoVideo from "@/assets/video/demo.mp4";

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

        <div className="aspect-video w-full bg-void">
          <video
            className="size-full"
            src={demoVideo}
            poster={dashboardScreenshot}
            controls
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
