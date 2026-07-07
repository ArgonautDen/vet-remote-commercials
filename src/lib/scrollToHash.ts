/**
 * Smoothly scrolls to an in-page section, accounting for the sticky header
 * height via the `scroll-margin-top` set on section elements (see index.css).
 */
export function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
