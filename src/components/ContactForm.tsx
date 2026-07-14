import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LegalModal } from "@/components/LegalModal";
import { legalDocs } from "@/data/legalDocs";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-indigo-500 focus:outline-none";

const privacyDoc = legalDocs.find((doc) => doc.id === "privacy") ?? null;

// Web3Forms access key is meant to be used client-side — it's a public
// submission-routing token, not a secret (see web3forms.com/docs).
const WEB3FORMS_ACCESS_KEY = "a52aa1fa-5b1a-4d68-b880-7030513cea20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Новая заявка с сайта VetRemote");
    formData.append("from_name", "VetRemote — форма обратной связи");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-emerald-500" aria-hidden="true" />
        <p className="font-display text-lg font-bold text-emerald-800">Сообщение отправлено</p>
        <p className="max-w-sm text-sm text-emerald-700/80">
          Спасибо! Мы ответим на указанный email в течение нескольких часов в рабочее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Не удалось отправить сообщение. Попробуйте ещё раз или напишите напрямую на{" "}
          <a href="mailto:info@vetremote.ru" className="font-medium underline underline-offset-2">
            info@vetremote.ru
          </a>
          .
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink-700">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Как к вам обращаться"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@clinic.ru"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink-700">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Расскажите, чем можем помочь — демо, перенос данных, вопрос по тарифам..."
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600">
        <input
          type="checkbox"
          name="consent"
          required
          checked={hasConsent}
          onChange={(event) => setHasConsent(event.target.checked)}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-indigo-600"
        />
        Согласен(а) на{" "}
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="cursor-pointer text-indigo-600 underline decoration-indigo-200 underline-offset-2 transition-colors hover:text-indigo-700"
        >
          обработку персональных данных
        </button>
      </label>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting" || !hasConsent}
        className="mt-2"
        icon={
          status === "submitting" ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Send className="size-5" />
          )
        }
      >
        {status === "submitting" ? "Отправляем..." : "Отправить"}
      </Button>

      <LegalModal doc={isPrivacyOpen ? privacyDoc : null} onClose={() => setIsPrivacyOpen(false)} />
    </form>
  );
}
