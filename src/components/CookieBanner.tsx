import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LegalModal } from "@/components/LegalModal";
import { legalDocs } from "@/data/legalDocs";
import { useAppReady } from "@/context/AppReadyContext";

const STORAGE_KEY = "vetremote-cookie-consent";
const privacyDoc = legalDocs.find((doc) => doc.id === "privacy") ?? null;

export function CookieBanner() {
  const isAppReady = useAppReady();
  const [isVisible, setIsVisible] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!isAppReady) return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    setIsVisible(true);
  }, [isAppReady]);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setIsVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed inset-x-4 bottom-4 z-[90] mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-indigo-800/95 p-5 text-white shadow-lift backdrop-blur-md sm:flex-row sm:items-center sm:gap-4 sm:p-4 sm:pl-5"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-pumpkin-300">
              <Cookie className="size-5" aria-hidden="true" />
            </span>
            <p className="flex-1 text-sm leading-relaxed text-white/85">
              Мы используем файлы cookie для корректной работы сайта. Продолжая пользоваться
              сайтом, вы соглашаетесь с{" "}
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="cursor-pointer underline decoration-white/40 underline-offset-2 transition-colors hover:text-white"
              >
                политикой конфиденциальности
              </button>
              .
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={handleAccept}
              className="w-full shrink-0 sm:w-auto"
            >
              Принять
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <LegalModal doc={isPrivacyOpen ? privacyDoc : null} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
