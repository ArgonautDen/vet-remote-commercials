import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { cn } from "@/lib/cn";

interface FeatureRowProps {
  index: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
}

export function FeatureRow({ index, eyebrow, title, description, visual, reverse }: FeatureRowProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 py-14 first:pt-0 last:pb-0 sm:py-16 lg:grid-cols-2 lg:gap-16",
      )}
    >
      <Reveal
        direction={reverse ? "right" : "left"}
        className={cn("flex flex-col gap-4", reverse && "lg:order-2")}
      >
        <span className="feature-index font-display text-sm font-bold text-indigo-300">
          {index}
        </span>
        <Badge tone="indigo" className="w-fit">
          {eyebrow}
        </Badge>
        <h3 className="text-balance text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
          {title}
        </h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-500 sm:text-base">
          {description}
        </p>
      </Reveal>

      <Reveal
        direction={reverse ? "left" : "right"}
        delay={120}
        className={cn("relative", reverse && "lg:order-1")}
      >
        <CornerMarks />
        {visual}
      </Reveal>
    </div>
  );
}
