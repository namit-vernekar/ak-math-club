import type { Metadata } from "next";
import Link from "next/link";
import { CompetitionCard } from "@/components/CompetitionCard";
import { PageHeader } from "@/components/PageHeader";
import { SmartLink } from "@/components/SmartLink";
import { competitionsSorted, siteInfo } from "@/lib/content";
import { hasLink } from "@/lib/format";

export const metadata: Metadata = {
  title: "Competitions",
  description: `Math competitions and opportunities for ${siteInfo.school} students, with preparation resources.`,
};

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · Contests`} title="Competitions">
        <p>
          Math competitions are a great way to challenge yourself with problems beyond the classroom. Here are
          contests and opportunities students may be interested in.
        </p>
      </PageHeader>

      <section className="section" aria-labelledby="comp-list-title">
        <div className="container">
          <div className="callout" style={{ marginBottom: 32 }}>
            <p>
              <strong>Dates and sign-up details are posted once they&rsquo;re confirmed.</strong> Anything marked
              &ldquo;TBA&rdquo; hasn&rsquo;t been announced yet. Check back here or ask an officer.
            </p>
          </div>

          <h2 id="comp-list-title" className="visually-hidden">
            Competition list
          </h2>
          <ul className="grid grid--3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {competitionsSorted.map((c) => (
              <li key={c.name}>
                <CompetitionCard competition={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="prep-title">
        <div className="container two-col">
          <div className="prose">
            <h2 id="prep-title">How to prepare</h2>
            <p>
              Contest problems reward creative problem solving more than memorization. The best preparation is
              steady practice on challenging problems.
            </p>
            <p>
              Our <Link href="/resources">weekly resources</Link> cover core competition topics like number theory
              and combinatorics, each with a worksheet and full solutions.
            </p>
          </div>
          <div>
            <h3>Helpful links</h3>
            <ul className="link-list">
              <li>
                <Link href="/resources">Club weekly resources</Link>
              </li>
              {hasLink(siteInfo.links.competitionsSheet) && (
                <li>
                  <SmartLink href={siteInfo.links.competitionsSheet}>Club competitions spreadsheet</SmartLink>
                </li>
              )}
              <li>
                <SmartLink href="https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions">
                  AMC past problems &amp; solutions (AoPS Wiki)
                </SmartLink>
              </li>
              <li>
                <SmartLink href="https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions">
                  AIME past problems &amp; solutions (AoPS Wiki)
                </SmartLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
