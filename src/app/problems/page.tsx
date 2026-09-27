import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProblemCard, ProblemEncouragement } from "@/components/ProblemCard";
import { problemWeeks, siteInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Problem of the Week",
  description: `Weekly competition problems from ${siteInfo.name}, in two levels: about AMC 10 #15 and about AIME #4–5.`,
};

export default function ProblemsPage() {
  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · Weekly challenge`} title="Problem of the Week">
        <p>
          Two problems every week, matched to that week&rsquo;s topic. <strong>Level 1</strong> is about an AMC 10
          #15; <strong>Level 2</strong> is about an AIME #4–5.
        </p>
      </PageHeader>

      <section className="section" aria-label="Problems by week">
        <div className="container">
          {problemWeeks.length > 0 && <ProblemEncouragement />}
          {problemWeeks.length === 0 ? (
            <p className="empty-state">The first Problem of the Week will be posted here soon.</p>
          ) : (
            problemWeeks.map((w) => (
              <section key={w.week} id={`week-${w.week}`} className="problem-week" aria-labelledby={`pw-${w.week}`}>
                <div className="problem-week__head">
                  <h2 id={`pw-${w.week}`}>{w.topic}</h2>
                </div>
                <div className="problem-grid">
                  {w.problems.map((p) => (
                    <ProblemCard key={p.level} problem={p} week={w.week} answersRevealed={w.answersRevealed} />
                  ))}
                </div>
              </section>
            ))
          )}
          <p className="muted" style={{ marginTop: 40 }}>
            Want more practice? Every week&rsquo;s worksheet is on the <Link href="/resources">Weekly Resources</Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
