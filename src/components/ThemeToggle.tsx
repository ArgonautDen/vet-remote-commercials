import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/cn";

type ThemeName = "brand" | "brutal";

const STORAGE_KEY = "vetremote-theme";

const themeOrder: ThemeName[] = ["brand", "brutal"];

const themeLabels: Record<ThemeName, string> = {
  brand: "Тема 3 · Brand",
  brutal: "Тема 2 · Brutal",
};

function applyTheme(theme: ThemeName) {
  if (theme === "brand") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

/**
 * Design-review control: toggles the site between "Тема 3" (VetRemote's
 * real brand colors — the default) and "Тема 2" (industrial brutalism) via
 * `data-theme` on <html>. Every color/radius/shadow/font token in
 * tailwind.config.ts + index.css reads from CSS variables, so no component
 * re-render is required. Remove this before shipping — it's a comparison
 * tool for design review, not a user-facing feature.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("brand");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    if (stored && themeOrder.includes(stored)) setTheme(stored);
  }, []);

  function cycle() {
    const next = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length];
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full border border-ink-200 bg-surface px-4 py-2.5 text-sm font-semibold text-ink-700 shadow-lift transition-transform hover:-translate-y-0.5",
      )}
      aria-label="Переключить тему оформления (только для просмотра вариантов)"
    >
      <Palette className="size-4 text-indigo-600" aria-hidden="true" />
      {themeLabels[theme]}
    </button>
  );
}
