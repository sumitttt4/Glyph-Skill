import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Glyph Skill — Design decisions, made deliberate",
    template: "%s · Glyph Skill",
  },
  description:
    "One frontend design skill to help coding assistants understand, compose, build and verify product-specific interfaces.",
  metadataBase: new URL("https://glyph-skillfordesign.vercel.app/"),
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Glyph Skill",
    title: "Glyph Skill — Design decisions, made deliberate",
    description: "A frontend design skill for AI coding assistants. Understand, compose, build and verify.",
    images: [{ url: "/og-glyph.png", width: 1200, height: 630, alt: "Glyph Skill — Good interfaces start with better decisions." }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sumitthq",
    images: [{ url: "/og-glyph.png", alt: "Glyph Skill — Good interfaces start with better decisions." }],
  },
};
const themeScript = `(function(){try{var t=localStorage.getItem('glyph-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}})()`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
