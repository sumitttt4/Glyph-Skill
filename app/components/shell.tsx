import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeControl } from "./controls";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Glyph Skill home">
      <img src="/glyph-mark.svg" width="30" height="30" alt="" />
      <strong>
        Glyph <span>Skill</span>
      </strong>
    </Link>
  );
}
export function Header({
  docs = false,
  search,
}: {
  docs?: boolean;
  search?: React.ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${docs ? "docs-header" : ""}`}>
        <Brand />
        <nav aria-label="Main">
          <Link href="/#walkthrough" className="how-link">
            How it works
          </Link>
          <Link href="/docs" aria-current={docs ? "page" : undefined}>
            Docs
          </Link>
          <a
            className="github-link"
            href="https://github.com/sumitttt4/Glyph-Skill"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>
        {search}
        <ThemeControl />
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Brand />
        <p>Better decisions. More considered interfaces.</p>
      </div>
      <div>
        <a href="https://sumit-pfp.vercel.app/">
          Built by Sumit Sharma <ArrowUpRight size={13} />
        </a>
        <a href="https://x.com/sumitthq">
          @sumitthq <ArrowUpRight size={13} />
        </a>
        <Link href="/docs">Documentation</Link>
        <small>Open source · MIT</small>
      </div>
    </footer>
  );
}
