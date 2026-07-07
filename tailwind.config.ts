import type { Config } from "tailwindcss";

/**
 * All brand colors resolve through CSS custom properties (see src/index.css)
 * so the whole palette can be swapped at runtime via `[data-theme]` on
 * <html> — no component classes need to change between themes.
 */
function themedColor(name: string) {
  return `rgb(var(--color-${name}) / <alpha-value>)`;
}

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

function themedScale(prefix: string) {
  return Object.fromEntries(shades.map((s) => [s, themedColor(`${prefix}-${s}`)]));
}

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        indigo: themedScale("indigo"),
        pumpkin: themedScale("pumpkin"),
        ink: { ...themedScale("ink"), 950: themedColor("ink-950") },
        surface: {
          DEFAULT: themedColor("surface"),
          muted: themedColor("surface-muted"),
          sunken: themedColor("surface-sunken"),
        },
        void: themedColor("void"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        lift: "var(--shadow-lift)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        "mesh-hero": "var(--bg-mesh-hero)",
        "cta-gradient": "var(--bg-cta-gradient)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
