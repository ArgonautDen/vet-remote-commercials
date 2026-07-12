import { useEffect, useState } from "react";
import logoFull from "@/assets/logo.png";
import { cn } from "@/lib/cn";

interface LoadingScreenProps {
  onComplete: () => void;
}

/** How long the logo "charges up" before the screen starts dissolving. */
const CHARGE_MS = 2300;
/** How long the dissolve fade itself takes. */
const DISSOLVE_MS = 750;

/**
 * Splash screen shown while the real site mounts and preloads behind it —
 * brand-navy background, centered logo that builds up a soft white glow
 * like charging mana, then the whole screen dissolves to reveal the site
 * (which has been rendering underneath the whole time, see App.tsx).
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isDissolving, setIsDissolving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const dissolveTimer = window.setTimeout(() => setIsDissolving(true), CHARGE_MS);
    const doneTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, CHARGE_MS + DISSOLVE_MS);

    return () => {
      window.clearTimeout(dissolveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[999] flex items-center justify-center bg-indigo-800 transition-opacity duration-[750ms] ease-out",
        isDissolving && "pointer-events-none opacity-0",
      )}
    >
      <img src={logoFull} alt="" className="loading-logo-charge w-40 sm:w-48" />
    </div>
  );
}
