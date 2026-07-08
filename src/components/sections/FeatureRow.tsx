import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

interface FeatureRowProps {
  index: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function FeatureRow({
  index,
  eyebrow,
  title,
  description,
  visual,
  reverse,
  className,
}: FeatureRowProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 py-14 first:pt-0 last:pb-0 sm:py-16 lg:grid-cols-2 lg:gap-16",
        className,
      )}
    >
      <Reveal
        direction={reverse ? "right" : "left"}
        className={cn(reverse && "lg:order-2")}
      >
        <div className="glass-shine-card flex flex-col gap-4 rounded-2xl p-6 shadow-soft sm:p-7">
          <span className="font-display text-sm font-bold text-indigo-300">{index}</span>
          <Badge tone="indigo" className="w-fit">
            {eyebrow}
          </Badge>
          <h3 className="text-balance text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
            {title}
          </h3>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-500 sm:text-base">
            {description}
          </p>
        </div>
      </Reveal>

      <Reveal
        direction={reverse ? "left" : "right"}
        delay={120}
        className={cn(reverse && "lg:order-1")}
      >
        {visual}
      </Reveal>
    </div>
  );
}
