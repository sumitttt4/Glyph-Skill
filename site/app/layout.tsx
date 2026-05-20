import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glyph Skill",
  description:
    "A brand and design skill for AI-built products. Give Claude Code, Cursor, and Codex better taste before they design your product.",
  metadataBase: new URL("https://glyph.software"),
  openGraph: {
    title: "Glyph Skill",
    description:
      "A brand and design skill for AI-built products.",
    url: "https://glyph.software",
    siteName: "Glyph Skill",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
