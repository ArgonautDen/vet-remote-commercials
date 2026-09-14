export interface NavItem {
  label: string;
  /** In-page anchor on the home page (e.g. "#pricing"). */
  hash?: string;
  /** Standalone route (e.g. "/features"). Takes precedence over `hash`. */
  to?: string;
}

export const navItems: NavItem[] = [
  { label: "Возможности", to: "/features" },
  { label: "Тарифы", hash: "#pricing" },
  { label: "FAQ", hash: "#faq" },
];
