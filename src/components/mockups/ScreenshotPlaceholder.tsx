import { Image } from "lucide-react";
import { cn } from "@/lib/cn";

interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

/** Stand-in for a real product screenshot, meant to sit inside
 * `BrowserFrame`/`PhoneFrame` until the actual image is dropped in. */
export function ScreenshotPlaceholder({ label, className }: ScreenshotPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[180px] flex-col items-center justify-center gap-2 border-2 border-dashed border-ink-200 px-6 py-10 text-center",
        className,
      )}
    >
      <Image className="size-6 text-ink-300" aria-hidden="true" />
      <span className="text-xs font-medium text-ink-400">{label}</span>
    </div>
  );
}
