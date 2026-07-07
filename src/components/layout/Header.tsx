import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { HashLink } from "@/components/ui/HashLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-ink-200/70 bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-surface/0",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <HashLink
              key={item.hash}
              hash={item.hash}
              className="text-[15px] font-medium text-ink-600 transition-colors hover:text-indigo-700"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/contacts" variant="ghost" size="md">
            Контакты
          </Button>
          <HashLink hash="#pricing">
            <Button variant="primary" size="md">
              Попробовать бесплатно
            </Button>
          </HashLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg text-ink-700 md:hidden"
          aria-label={isMobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden border-t border-ink-200/70 bg-surface transition-[grid-template-rows] duration-300 ease-out md:hidden",
          isMobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <HashLink
                key={item.hash}
                hash={item.hash}
                onNavigate={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-surface-muted"
              >
                {item.label}
              </HashLink>
            ))}
            <Link
              to="/contacts"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-surface-muted"
            >
              Контакты
            </Link>
            <HashLink
              hash="#pricing"
              onNavigate={() => setIsMobileOpen(false)}
              className="mt-2"
            >
              <Button variant="primary" size="lg" className="w-full">
                Попробовать бесплатно
              </Button>
            </HashLink>
          </Container>
        </div>
      </div>
    </header>
  );
}
