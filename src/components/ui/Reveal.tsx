import type { ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/cn";

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "up" (default, vertical fade) · "left"/"right" (horizontal slide-in) */
  direction?: RevealDirection;
}

const hiddenState: Record<RevealDirection, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
};

/**
 * Scroll-driven reveal wrapper: fades/slides in on viewport entry and
 * resets when the element scrolls back out, so the animation replays every
 * time (see useScrollReveal's `once: false` default). Soft, non-jarring
 * easing — a gentle settle, not a snap.
 */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform",
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenState[direction],
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
