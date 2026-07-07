import type { ReactNode } from "react";

interface LivePulseProps {
  children: ReactNode;
}

/**
 * Small pulsing-dot indicator reproducing the real product's own
 * `.live-dot`/`livePulse` animation from dashboard.css — used to make a
 * stat or status line read as "happening right now" rather than static
 * marketing copy.
 */
export function LivePulse({ children }: LivePulseProps) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-500">
      <span className="live-pulse-dot inline-flex size-2 shrink-0 rounded-full bg-pumpkin-500" />
      {children}
    </span>
  );
}
