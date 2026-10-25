"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Menu,
  Search,
  X,
} from "lucide-react";
import { Header } from "./shell";
import { docPages, hrefFor, legacyAnchors } from "../docs/navigation";
export function DocsFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.replace(/^\/docs\/?/, "").replace(/\/$/, "");
  const page = docPages.find((x) => x.slug === slug) || docPages[0];
  const index = docPages.indexOf(page);
  const [menu, setMenu] = useState(false);
  const [outline, setOutline] = useState(false);
  const [active, setActive] = useState<string>("");
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setMenu(false);
    setOutline(false);
    setActive(page.sections[0][0]);
  }, [pathname, page, router]);
  useEffect(() => {
    function redirectLegacy() {
      if (pathname === "/docs" || pathname === "/docs/") {
        const target = legacyAnchors[location.hash.slice(1)];
        if (target) router.replace(target);
      }
    }
    redirectLegacy();
    addEventListener("hashchange", redirectLegacy);
    return () => removeEventListener("hashchange", redirectLegacy);
  }, [pathname, router]);
  useEffect(() => {
    let frame = 0;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current: string = page.sections[0][0];
        for (const [id] of page.sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 160) current = id;
        }
        if (
          scrollY > 0 &&
          innerHeight + scrollY >= document.documentElement.scrollHeight - 8
        )
          current = page.sections.at(-1)![0];
        setActive(current);
      });
    }
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, [page]);
  function openSearch() {
    setQuery("");
    dialog.current?.showModal();
  }
  useEffect(() => {
    function hotkey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu(false);
        setOutline(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        dialog.current?.open ? dialog.current.close() : openSearch();
      }
    }
    addEventListener("keydown", hotkey);
    return () => removeEventListener("keydown", hotkey);
  }, []);
  const q = query.trim().toLowerCase();
  const results = docPages
    .flatMap((p) => [
      { label: p.title, detail: p.description, href: hrefFor(p.slug) },
      ...p.sections.map(([id, label]) => ({
        label,
        detail: p.title,
        href: hrefFor(p.slug) + "#" + id,
      })),
    ])
    .filter((x) => !q || (x.label + " " + x.detail).toLowerCase().includes(q));
  const groups = Array.from(new Set(docPages.map((x) => x.group)));
  return (
    <div className="docs-site">
      <Header
        docs
        search={
          <button
            ref={trigger}
            className="docs-search-trigger"
            aria-label="Search documentation"
            onClick={openSearch}
          >
            <Search size={15} />
            <span>Search docs…</span>
            <kbd>⌘ K</kbd>
          </button>
        }
      />
      <div className="docs-mobile-bar">
        <button
          onClick={() => {
            setMenu(!menu);
            setOutline(false);
          }}
          aria-expanded={menu}
          aria-controls="docs-navigation"
        >
          <Menu size={16} /> Documentation <ChevronDown size={14} />
        </button>
        <button
          onClick={() => {
            setOutline(!outline);
            setMenu(false);
          }}
          aria-expanded={outline}
          aria-controls="page-outline"
        >
          On this page <ChevronDown size={14} />
        </button>
      </div>
      <div className="docs-layout">
        <aside
          className={`docs-sidebar ${menu ? "is-open" : ""}`}
          id="docs-navigation"
        >
          <nav aria-label="Documentation">
            {groups.map((group) => (
              <div className="nav-group" key={group}>
                <span>{group}</span>
                {docPages
                  .filter((x) => x.group === group)
                  .map((x) => (
                    <Link
                      key={x.slug}
                      href={hrefFor(x.slug)}
                      aria-current={x.slug === slug ? "page" : undefined}
                      onClick={() => setMenu(false)}
                    >
                      {x.title}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
          <a
            className="sidebar-source"
            href="https://github.com/sumitttt4/Glyph-Skill"
          >
            <FileText size={15} /> Source on GitHub <ArrowUpRight size={13} />
          </a>
        </aside>
        <main id="main" className="docs-main">
          <div className="docs-breadcrumb">
            Documentation <span>/</span> {page.group}
          </div>
          <header className="docs-intro">
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </header>
          {children}
          <nav aria-label="Previous and next guide" className="docs-pagination">
            {index > 0 ? (
              <Link href={hrefFor(docPages[index - 1].slug)}>
                <span>
                  <ArrowLeft size={14} /> Previous
                </span>
                {docPages[index - 1].title}
              </Link>
            ) : (
              <span />
            )}
            {index < docPages.length - 1 && (
              <Link href={hrefFor(docPages[index + 1].slug)}>
                <span>
                  Next <ArrowRight size={14} />
                </span>
                {docPages[index + 1].title}
              </Link>
            )}
          </nav>
          <footer className="docs-footer">
            Built by <a href="https://sumit-pfp.vercel.app/">Sumit Sharma</a>
            <span>MIT licensed</span>
          </footer>
        </main>
        <aside
          className={`docs-toc ${outline ? "is-open" : ""}`}
          id="page-outline"
        >
          <nav aria-label="On this page">
            <strong>On this page</strong>
            {page.sections.map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                aria-current={id === active ? "location" : undefined}
                onClick={() => setOutline(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="toc-help">
            <span>Make it your own.</span>
            <p>
              Keep your brand.
              <br />
              Let the task lead.
            </p>
            <Link href="/docs/customize">
              Customize Glyph <ArrowRight size={13} />
            </Link>
          </div>
        </aside>
      </div>
      <dialog
        className="docs-search-dialog"
        ref={dialog}
        aria-label="Search documentation"
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="search-dialog-top">
          <Search size={18} />
          <input
            autoFocus
            aria-label="Search documentation titles and sections"
            placeholder="Search guides and sections…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            aria-label="Close search"
            onClick={() => dialog.current?.close()}
          >
            <X size={18} />
          </button>
        </div>
        <p className="search-scope">Guides & section titles</p>
        <div className="search-results">
          {results.length ? (
            results.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                onClick={() => dialog.current?.close()}
              >
                <FileText size={16} />
                <span>
                  {x.label}
                  <small>{x.detail}</small>
                </span>
                <ArrowUpRight size={14} />
              </Link>
            ))
          ) : (
            <p role="status">
              No matching guides. Try “install”, “motion” or “files”.
            </p>
          )}
        </div>
        <div className="search-dialog-foot">
          Tab to move · Enter to open · Esc to close
        </div>
      </dialog>
    </div>
  );
}
