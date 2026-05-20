import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glyph: {
          orange: "#FF5A1F",
          soft: "#FFF4EE",
          text: "#111111",
          muted: "#666666",
          border: "#EAE7E2",
          surface: "#FCFAF8",
        },
      },
      boxShadow: {
        panel: "0 22px 70px rgba(17, 17, 17, 0.08)",
      },
      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
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
