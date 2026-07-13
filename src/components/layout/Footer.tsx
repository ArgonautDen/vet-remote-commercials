import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Mail } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { HashLink } from "@/components/ui/HashLink";
import { Container } from "@/components/ui/Container";
import { LegalModal } from "@/components/LegalModal";
import { navItems } from "@/data/navigation";
import { legalDocs, type LegalDoc } from "@/data/legalDocs";

export function Footer() {
  const year = new Date().getFullYear();
  const [openDocId, setOpenDocId] = useState<LegalDoc["id"] | null>(null);
  const openDoc = legalDocs.find((doc) => doc.id === openDocId) ?? null;

  return (
    <footer className="border-t border-ink-200 bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-500">
            Современная CRM для ветеринарных врачей и клиник в России. Картотека, календарь и
            онлайн-запись — в одном удобном месте.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-semibold text-ink-900">Навигация</span>
          {navItems.map((item) => (
            <HashLink
              key={item.hash}
              hash={item.hash}
              className="text-sm text-ink-500 transition-colors hover:text-indigo-700"
            >
              {item.label}
            </HashLink>
          ))}
          <Link
            to="/contacts"
            className="text-sm text-ink-500 transition-colors hover:text-indigo-700"
          >
            Контакты
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-semibold text-ink-900">Связаться</span>
          <a
            href="mailto:info@vetremote.ru"
            className="flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-indigo-700"
          >
            <Mail className="size-4" aria-hidden="true" />
            info@vetremote.ru
          </a>
          <a
            href="https://t.me/vetremote"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-indigo-700"
          >
            <Send className="size-4" aria-hidden="true" />
            @vetremote
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display text-sm font-semibold text-ink-900">Документы</span>
          {legalDocs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => setOpenDocId(doc.id)}
              className="cursor-pointer text-left text-sm text-ink-500 transition-colors hover:text-indigo-700"
            >
              {doc.title}
            </button>
          ))}
        </div>
      </Container>

      <div className="border-t border-ink-100">
        <Container className="flex flex-col items-center gap-2 py-6 text-sm text-ink-400 sm:flex-row sm:justify-between">
          <span>© {year} VetRemote. Все права защищены.</span>
          <span>Сделано в России, для ветеринарных врачей</span>
        </Container>
      </div>

      <LegalModal doc={openDoc} onClose={() => setOpenDocId(null)} />
    </footer>
  );
}
