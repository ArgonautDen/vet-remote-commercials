import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    // Hardcoded dark bezel + light screen: this is physical device chrome
    // wrapping a real product screenshot, not themed UI — it stays the same
    // regardless of the active landing-page theme.
    <div
      className={cn(
        "relative w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-[#12131A] bg-[#12131A] shadow-lift",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#12131A]" />
      <div className="mockup-surface aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-[#F5F6FB]">
        {children}
      </div>
    </div>
  );
}
