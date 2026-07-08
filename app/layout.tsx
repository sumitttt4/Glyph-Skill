import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
