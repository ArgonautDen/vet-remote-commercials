import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-surface-muted">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
