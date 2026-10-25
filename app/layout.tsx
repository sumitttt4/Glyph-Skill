import type { Metadata } from "next";
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
  twitter: { card: "summary", creator: "@sumitthq" },
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
