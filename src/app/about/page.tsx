import type { Metadata } from "next";
import Link from "next/link";
import { Announcements } from "@/components/Announcements";
import { PageHeader } from "@/components/PageHeader";
import { SmartLink } from "@/components/SmartLink";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { announcementsNewestFirst, siteInfo, upcomingEvents } from "@/lib/content";
import { hasLink } from "@/lib/format";

export const metadata: Metadata = {
  title: "About / Join",
  description: `What ${siteInfo.name} is, when we meet, and where to find us.`,
};

function Placeholder({ children = "Coming soon" }: { children?: string }) {
  return <span className="tba">{children}</span>;
}

export default function AboutPage() {
  const { meeting, links } = siteInfo;
  // Only channels that have a link are shown (add links in src/data/siteInfo.ts).
  const channels = [
    { label: "Band", url: links.band },
    { label: "Instagram", url: links.instagram },
    { label: "Google Classroom", url: links.googleClassroom },
    { label: "Remind", url: links.remind },
  ].filter((c) => hasLink(c.url));

  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · About`} title="About / Join">
        <p>{siteInfo.description}</p>
      </PageHeader>

      <section className="section" aria-labelledby="about-title">
        <div className="container two-col">
          <div className="prose">
            <h2 id="about-title">About the club</h2>
            <p>
              {siteInfo.name} is a student-run club at {siteInfo.school}. Each week we explore
              a new topic, from number theory to combinatorics, and work through problems together.
            </p>
            <p>
              Every lesson&rsquo;s slide show, worksheet, and solutions are posted on the{" "}
              <Link href="/resources">Weekly Resources</Link> page, so you can review a topic or practice outside of
              meetings, even if you missed one.
            </p>
          </div>
          <div>
            <h2>Meetings</h2>
            <dl className="info-grid">
              <div className="info-item">
                <dt>Day</dt>
                <dd>{meeting.day || <Placeholder>TBA</Placeholder>}</dd>
              </div>
              <div className="info-item">
                <dt>Time</dt>
                <dd>{meeting.time || <Placeholder>TBA</Placeholder>}</dd>
              </div>
              <div className="info-item">
                <dt>Room</dt>
                <dd>{meeting.room || <Placeholder>TBA</Placeholder>}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {channels.length > 0 && (
        <section className="section" aria-labelledby="connect-title">
          <div className="container">
            <h2 id="connect-title">Stay connected</h2>
            <div className="button-row">
              {channels.map((c) => (
                <SmartLink key={c.label} href={c.url} className="button">
                  {c.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </section>
      )}

      <UpcomingEvents events={upcomingEvents} />

      <section className="section" aria-labelledby="announce-title">
        <div className="container">
          <h2 id="announce-title">Club announcements</h2>
          {announcementsNewestFirst.length > 0 ? (
            <Announcements items={announcementsNewestFirst} />
          ) : (
            <p className="muted">No announcements right now. Check back soon.</p>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="mat-title">
        <div className="container">
          <div className="prose">
            <h2 id="mat-title">Mu Alpha Theta</h2>
            <p>{siteInfo.muAlphaTheta.note}</p>
            {hasLink(siteInfo.muAlphaTheta.rosterUrl) && (
              <p>
                <SmartLink href={siteInfo.muAlphaTheta.rosterUrl} className="button">
                  View the current Mu Alpha Theta roster
                </SmartLink>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
