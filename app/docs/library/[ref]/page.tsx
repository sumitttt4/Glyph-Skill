import { notFound } from "next/navigation";
import { FileCode2 } from "lucide-react";
import library from "../../../generated/library.json";
type Entry = { slug: string; title: string; description: string; file: string; html: string };
const pages = library as Entry[];
const find = (ref: string) => pages.find((x) => x.slug === "library/" + ref);
export function generateStaticParams() {
  return pages.map((x) => ({ ref: x.slug.replace("library/", "") }));
}
export async function generateMetadata({ params }: { params: Promise<{ ref: string }> }) {
  const page = find((await params).ref);
  return page ? { title: page.title, description: page.description } : {};
}
export default async function LibraryPage({ params }: { params: Promise<{ ref: string }> }) {
  const page = find((await params).ref);
  if (!page) notFound();
  return (
    <>
      <a
        className="doc-source-link"
        href={`https://github.com/sumitttt4/Glyph-Skill/blob/main/${page.file}`}
      >
        <FileCode2 size={14} aria-hidden="true" />
        <code>{page.file}</code>
      </a>
      <div className="doc-section doc-md" dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
