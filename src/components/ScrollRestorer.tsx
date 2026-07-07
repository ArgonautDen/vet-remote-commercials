import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "@/lib/scrollToHash";

/**
 * Runs on every route change: scrolls to the URL hash (if present) once the
 * new page has mounted, otherwise resets scroll to the top of the page.
 */
export function ScrollRestorer() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => scrollToHash(location.hash), 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.hash]);

  return null;
}
