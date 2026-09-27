import type { Metadata } from "next";
import Link from "next/link";
import { Announcements } from "@/components/Announcements";
import { PageHeader } from "@/components/PageHeader";
import { SmartLink } from "@/components/SmartLink";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { advisor, announcementsNewestFirst, siteInfo, upcomingEvents } from "@/lib/content";
import { hasLink } from "@/lib/format";

export const metadata: Metadata = {
  title: "About / Join",
  description: `What ${siteInfo.name} is, when we meet, and how to join.`,
};

function Placeholder({ children = "Coming soon" }: { children?: string }) {
  return <span className="tba">{children}</span>;
}

export default function AboutPage() {
  const { meeting, links } = siteInfo;
  const channels = [
    { label: "Band", url: links.band },
    { label: "Google Classroom", url: links.googleClassroom },
    { label: "Remind", url: links.remind },
    { label: "Instagram", url: links.instagram },
  ];

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
              {siteInfo.name} is a student-run club at {siteInfo.school} in {siteInfo.location}. Each week we explore
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

      <section className="section" aria-labelledby="join-title">
        <div className="container two-col">
          <div className="prose">
            <h2 id="join-title">How to join</h2>
            {siteInfo.howToJoin ? (
              <p>{siteInfo.howToJoin}</p>
            ) : (
              <p>
                <Placeholder>Joining details will be posted here soon.</Placeholder>
              </p>
            )}
            <p>
              Questions? Contact our advisor,{" "}
              {advisor.email ? <a href={`mailto:${advisor.email}`}>{advisor.name}</a> : advisor.name}, or any of our{" "}
              <Link href="/officers">officers</Link>.
            </p>
          </div>
          <div>
            <h2>Stay connected</h2>
            <dl className="info-grid">
              {channels.map((c) => (
                <div className="info-item" key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>
                    {hasLink(c.url) ? (
                      <SmartLink href={c.url}>Join on {c.label}</SmartLink>
                    ) : (
                      <Placeholder>Link coming soon</Placeholder>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

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
        <div className="container prose">
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
      </section>
    </>
  );
}
