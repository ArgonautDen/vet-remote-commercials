import { Link } from "react-router-dom";
import logoIconNavy from "@/assets/logo-icon-navy.png";
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
      <img src={logoIconNavy} alt="" className="size-9" width={319} height={301} />
      VetRemote
    </Link>
  );
}
