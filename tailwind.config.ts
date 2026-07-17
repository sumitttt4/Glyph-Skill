import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glyph: {
          orange: "#1a1a17",
          soft: "#dfdad0",
          text: "#171714",
          muted: "#6b6a65",
          border: "#dfdad0",
          surface: "#f4f0e8",
        },
      },
      boxShadow: {
        panel: "0 22px 70px rgba(17, 17, 17, 0.08)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-host)",
          "Host Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "SFMono-Regular",
          "Cascadia Code",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
