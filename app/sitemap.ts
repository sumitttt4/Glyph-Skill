import type { MetadataRoute } from "next";
import { docPages, hrefFor } from "./docs/navigation";
export const dynamic = "force-static";
const site = "https://designskill.site";
export default function sitemap(): MetadataRoute.Sitemap {
  const examples = ["directions", "halo", "ledgerline", "lumen", "console"];
  return [
    { url: site + "/", priority: 1 },
    ...docPages.map((p) => ({ url: site + hrefFor(p.slug), priority: p.slug ? 0.7 : 0.9 })),
    ...examples.map((e) => ({ url: `${site}/examples/${e}`, priority: 0.5 })),
  ];
}
