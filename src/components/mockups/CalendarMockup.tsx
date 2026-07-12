import calendarDesktopScreenshot from "@/assets/screenshots/calendar-desktop.jpg";

/**
 * The screenshot already includes its own browser-window chrome (baked in
 * by the capture tool), so this renders as a flat image rather than being
 * wrapped in <BrowserFrame> — that would double up the window chrome.
 */
export function CalendarMockup() {
  return (
    <img
      src={calendarDesktopScreenshot}
      alt="Недельный календарь в VetRemote"
      className="block h-auto w-full rounded-2xl shadow-lift"
    />
  );
}
