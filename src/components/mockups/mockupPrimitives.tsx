import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const avatarPalette = [
  "bg-indigo-100 text-indigo-700",
  "bg-pumpkin-100 text-pumpkin-700",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
];

interface AvatarProps {
  label: string;
  index?: number;
  className?: string;
}

export function Avatar({ label, index = 0, className }: AvatarProps) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
        avatarPalette[index % avatarPalette.length],
        className,
      )}
    >
      {label}
    </span>
  );
}

export function MockupPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-ink-100 bg-white p-4", className)}>
      {children}
    </div>
  );
}

export function MockupTag({
  children,
  tone = "indigo",
}: {
  children: ReactNode;
  tone?: "indigo" | "pumpkin" | "neutral" | "emerald";
}) {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-700",
    pumpkin: "bg-pumpkin-50 text-pumpkin-700",
    neutral: "bg-ink-100 text-ink-500",
    emerald: "bg-emerald-50 text-emerald-700",
  };
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", tones[tone])}>
      {children}
    </span>
  );
}
