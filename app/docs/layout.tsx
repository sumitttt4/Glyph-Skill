import { DocsFrame } from "../components/docs-frame";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsFrame>{children}</DocsFrame>;
}
