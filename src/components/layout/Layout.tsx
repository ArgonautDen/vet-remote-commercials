import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-muted">
      <Header />
      {/* overflow-x-hidden lives here, not on <html>/<body> or this file's
          root div — any of those would sit as an ancestor of <Header> and
          silently disable its position: sticky on iOS Safari, which treats
          non-visible overflow anywhere above a sticky element as
          disqualifying. Section decorations (blurred circles etc.) bleed
          past the viewport edge and need clipping somewhere; <main> is the
          lowest common ancestor that still excludes Header. */}
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
