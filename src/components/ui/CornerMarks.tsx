/**
 * Technical corner crosshairs, shown only under the brutal theme (see
 * `.corner-marks` in index.css) — an "Industrial Marker" accent from the
 * brutalist-skill spec. No-op markup in every other theme.
 */
export function CornerMarks() {
  return (
    <div className="corner-marks pointer-events-none absolute inset-0" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
