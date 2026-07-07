import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

export function BrowserFrame({ children, url = "app.vetremote.ru", className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-lift",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/70 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="size-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs text-ink-400 shadow-sm">
            <Lock className="size-3" aria-hidden="true" />
            {url}
          </div>
        </div>
      </div>
      {/* mockup-surface re-pins the `ink` scale to light values: this
          represents the real product's own (light) UI, which stays legible
          regardless of the active landing theme. */}
      <div className="mockup-surface bg-[#F5F6FB]">{children}</div>
    </div>
  );
}
