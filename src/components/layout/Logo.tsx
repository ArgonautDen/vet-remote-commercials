import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-ink-900",
        className,
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-soft">
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M9 11L16 22L23 11"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="8" r="1.8" fill="#F3711E" />
        </svg>
      </span>
      VetRemote
    </Link>
  );
}
