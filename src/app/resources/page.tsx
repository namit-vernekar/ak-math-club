import type { Metadata } from "next";
import { LessonArchive } from "@/components/LessonArchive";
import { PageHeader } from "@/components/PageHeader";
import { SmartLink } from "@/components/SmartLink";
import { lessonsNewestFirst, siteInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Weekly Resources",
  description: `Slide shows, worksheets, and solutions from every ${siteInfo.name} meeting in ${siteInfo.schoolYear}.`,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · Lesson archive`} title="Weekly Resources">
        <p>
          Slide shows, worksheets, and solutions from every meeting, newest first. Use them to review a topic or
          practice outside of club.
        </p>
      </PageHeader>

      <section className="section" aria-label="All lessons">
        <div className="container">
          {siteInfo.resourcesNote && (
            <p className="callout" style={{ marginBottom: 24 }}>
              {siteInfo.resourcesNote}
            </p>
          )}
          <LessonArchive lessons={lessonsNewestFirst} />

          {siteInfo.pastYears.length > 0 && (
            <div className="callout" style={{ marginTop: 48 }}>
              <p>
                <strong>Looking for older lessons?</strong> Materials from previous school years are on the old club
                site:
              </p>
              <ul className="link-list">
                {siteInfo.pastYears.map((y) => (
                  <li key={y.url}>
                    <SmartLink href={y.url}>{y.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
