import surveyScreenshot from "@/assets/screenshots/survey.jpg";

/**
 * The screenshot already includes its own browser-window chrome (baked in
 * by the capture tool), so this renders as a flat image rather than being
 * wrapped in <BrowserFrame> — that would double up the window chrome (same
 * treatment as CalendarMockup, which this now matches).
 */
export function SurveyMockup() {
  return (
    <img
      src={surveyScreenshot}
      alt="Онлайн-анкета перед приёмом в VetRemote"
      className="block h-auto w-full rounded-2xl shadow-lift"
    />
  );
}
