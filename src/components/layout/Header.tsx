import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { HashLink } from "@/components/ui/HashLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

/** Home-page sections tracked for the scroll-spy active indicator, in document order. */
const SPY_SECTION_IDS = ["pricing", "faq"];

/** Minimalist dot under a nav link — visible on hover, or permanently for the active section. */
function navDotClass(isActive: boolean) {
  return cn(
    "pointer-events-none absolute left-1/2 top-full mt-1.5 size-1 -translate-x-1/2 rounded-full bg-indigo-600 transition-all duration-200 ease-out",
    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100",
  );
}

function navLinkClass(isActive: boolean) {
  return cn(
    "group relative text-[15px] font-medium transition-colors",
    isActive ? "text-indigo-700" : "text-ink-600 hover:text-indigo-700",
  );
}

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // Which home-page section is currently in view, e.g. "#pricing" — or null
  // while at the top (hero/problem/workflow/stats), meaning "На главную".
  const [activeHash, setActiveHash] = useState<string | null>(null);

  const isHome = location.pathname === "/";

  function handleHomeLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight "Тарифы"/"FAQ" while their section is in view,
  // fall back to "На главную" everywhere above them on the home page.
  useEffect(() => {
    if (!isHome) {
      setActiveHash(null);
      return;
    }

    const elements = SPY_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });
        const current = SPY_SECTION_IDS.find((id) => intersecting.has(id));
        setActiveHash(current ? `#${current}` : null);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

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
        <div className="flex items-center gap-4">
          <Logo onClick={handleHomeLinkClick} />
          <Link
            to="/"
            onClick={handleHomeLinkClick}
            className={cn(
              "relative hidden border-l pl-4 text-sm font-medium transition-colors md:inline-flex md:items-center",
              isHome && activeHash === null
                ? "group border-ink-200 text-indigo-700"
                : "group border-ink-200 text-ink-500 hover:text-indigo-700",
            )}
          >
            На главную
            <span aria-hidden="true" className={navDotClass(isHome && activeHash === null)} />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => {
            const isActive = item.to
              ? location.pathname === item.to
              : isHome && activeHash === item.hash;

            return item.to ? (
              <Link key={item.label} to={item.to} className={navLinkClass(isActive)}>
                {item.label}
                <span aria-hidden="true" className={navDotClass(isActive)} />
              </Link>
            ) : (
              <HashLink key={item.label} hash={item.hash!} className={navLinkClass(isActive)}>
                {item.label}
                <span aria-hidden="true" className={navDotClass(isActive)} />
              </HashLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/contacts" variant="ghost" size="md">
            Контакты
          </Button>
          <Button to="/contacts#contact-form" variant="primary" size="md" shimmer>
            Попробовать бесплатно
          </Button>
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
            <Link
              to="/"
              onClick={(event) => {
                handleHomeLinkClick(event);
                setIsMobileOpen(false);
              }}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium hover:bg-surface-muted",
                isHome && activeHash === null ? "text-indigo-700" : "text-ink-700",
              )}
            >
              На главную
            </Link>
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-surface-muted"
                >
                  {item.label}
                </Link>
              ) : (
                <HashLink
                  key={item.label}
                  hash={item.hash!}
                  onNavigate={() => setIsMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-surface-muted"
                >
                  {item.label}
                </HashLink>
              ),
            )}
            <Link
              to="/contacts"
              onClick={() => setIsMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-surface-muted"
            >
              Контакты
            </Link>
            <Button
              to="/contacts#contact-form"
              onClick={() => setIsMobileOpen(false)}
              variant="primary"
              size="lg"
              shimmer
              className="mt-2 w-full"
            >
              Попробовать бесплатно
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
