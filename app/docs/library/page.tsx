import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { groupId, libraryGroups, libraryIndex, libraryPages } from "../navigation";
export const metadata = {
  title: libraryIndex.title,
  description: libraryIndex.description,
};
export default function Library() {
  return (
    <>
      <section className="doc-section">
        <p>
          Design Skill is {libraryPages.length} files: one entry point, focused
          references and two CSS kits. Your assistant loads only the ones a task
          needs; every page below is generated from the installed source, so
          the site and the skill never drift apart.
        </p>
      </section>
      {libraryGroups.map((group) => (
        <section id={groupId(group)} className="doc-section" key={group}>
          <h2>
            <a href={"#" + groupId(group)}>
              {group}
              <span aria-hidden="true">#</span>
            </a>
          </h2>
          <div className="doc-link-grid">
            {libraryPages
              .filter((x) => x.group === group)
              .map((x) => (
                <Link href={"/docs/" + x.slug} key={x.slug}>
                  <strong>{x.title}</strong>
                  <span>{x.description}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
