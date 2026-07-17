import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Glyph Skill – Design System for Cursor, Claude Code & AI Coding Assistants",
  description:
    "An enforceable brand, layout, and UI system skill for your AI coding assistant. Import strict layout constraints, typography locks, and color rules to build high-quality frontends.",
  metadataBase: new URL("https://glyph.software"),
  openGraph: {
    title: "Glyph Skill – Design System for Cursor, Claude Code & AI Coding Assistants",
    description:
      "An enforceable brand, layout, and UI system skill for your AI coding assistant.",
    url: "https://glyph.software",
    siteName: "Glyph Skill",
    type: "website",
    images: [
      {
        url: "/showcase-glyph.png",
        width: 1200,
        height: 630,
        alt: "Glyph Skill Design System Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glyph Skill – Design System for Cursor, Claude Code & AI Coding Assistants",
    description:
      "An enforceable brand, layout, and UI system skill for your AI coding assistant.",
    images: ["/showcase-glyph.png"],
    creator: "@sumitdotme",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${spaceGrotesk.className}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
