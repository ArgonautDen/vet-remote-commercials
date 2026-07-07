import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide",
            tone === "light"
              ? "bg-indigo-50 text-indigo-700"
              : "bg-white/10 text-white",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-ink-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-balance text-lg leading-relaxed",
            tone === "light" ? "text-ink-500" : "text-white/75",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
