import { notFound } from "next/navigation";
import { DocContent } from "../content";
import { docPages } from "../navigation";
export function generateStaticParams() {
  return docPages.filter((x) => x.slug).map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: docPages.find((x) => x.slug === slug)?.title || "Documentation",
  };
}
export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!docPages.some((x) => x.slug === slug)) notFound();
  return <DocContent slug={slug} />;
}
