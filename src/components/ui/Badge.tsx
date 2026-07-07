import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  tone?: "indigo" | "pumpkin" | "neutral";
  className?: string;
}

const toneClasses = {
  indigo: "bg-indigo-50 text-indigo-700",
  pumpkin: "bg-pumpkin-50 text-pumpkin-700",
  neutral: "bg-ink-100 text-ink-600",
};

export function Badge({ children, tone = "indigo", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
