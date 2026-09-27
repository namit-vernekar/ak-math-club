import Link from "next/link";
import { Announcements } from "@/components/Announcements";
import { EuclidFigure } from "@/components/EuclidFigure";
import { LessonCard } from "@/components/LessonCard";
import { ResourceLinks } from "@/components/ResourceLinks";
import { ProblemCard, ProblemEncouragement } from "@/components/ProblemCard";
import { SmartLink } from "@/components/SmartLink";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import {
  announcementsNewestFirst,
  currentProblemWeek,
  lastRevealedWeek,
  latestLesson,
  lessonsNewestFirst,
  siteInfo,
  upcomingEvents,
  weeksWithProblems,
} from "@/lib/content";
import { formatDate, pad2 } from "@/lib/format";

// How many earlier weeks to list under "Latest Week" on the home page.
const PREVIOUS_WEEKS_SHOWN = 3;

const WHAT_WE_DO = [
  {
    n: "01",
    title: "Weekly lessons",
    text: "Each meeting covers one topic with a slide show, a practice worksheet, and full solutions.",
  },
  {
    n: "02",
    title: "Competition preparation",
    text: "Build the techniques and problem-solving habits used on contests like the AMC.",
  },
  {
    n: "03",
    title: "Practice on your own",
    text: "Every lesson's materials stay online, so you can review and practice outside of meetings.",
  },
];

export default function HomePage() {
  const previous = lessonsNewestFirst.slice(1, 1 + PREVIOUS_WEEKS_SHOWN);
  const { meeting } = siteInfo;
  const potw = currentProblemWeek;

  return (
    <>
      <section className="hero graph-paper" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div>
            <p className="eyebrow">
              <span className="accent">{siteInfo.schoolYear}</span> · {siteInfo.school} · Charlotte, NC
            </p>
            <h1 id="hero-title">{siteInfo.name}</h1>
            <p className="hero__tagline">{siteInfo.tagline}</p>
            <p className="hero__desc">
              {siteInfo.description} Every week we explore a new topic, and all of our lesson materials are posted here
              so you can keep practicing.
            </p>
            <div className="button-row">
              <Link href="/resources" className="button button--primary">
                Weekly Resources <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/competitions" className="button">
                Competitions
              </Link>
              <Link href="/officers" className="button">
                Officers
              </Link>
            </div>
          </div>
          <EuclidFigure />
        </div>
      </section>

      <UpcomingEvents events={upcomingEvents} />

      {announcementsNewestFirst.length > 0 && (
        <section className="section" aria-labelledby="announcements-title">
          <div className="container">
            <div className="section-head">
              <h2 id="announcements-title">Announcements</h2>
            </div>
            <Announcements items={announcementsNewestFirst} />
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="latest-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">This week</p>
              <h2 id="latest-title">Latest Week</h2>
            </div>
            <Link href="/resources">All weekly resources →</Link>
          </div>
          {latestLesson ? (
            <LessonCard lesson={latestLesson} featured hasProblems={weeksWithProblems.includes(latestLesson.week)} />
          ) : (
            <p className="empty-state">The first lesson of the year will be posted here soon.</p>
          )}

          {previous.length > 0 && (
            <>
              <h3 className="eyebrow" style={{ marginTop: 40 }}>
                Previous weeks
              </h3>
              <ul className="mini-list">
                {previous.map((l) => (
                  <li key={l.week}>
                    <div className="mini-row">
                      <div className="mini-row__head">
                        <span className="mini-row__week">Week {pad2(l.week)}</span>
                        <time className="mini-row__date" dateTime={l.date}>
                          {formatDate(l.date, "short")}
                        </time>
                      </div>
                      <p className="mini-row__topic">{l.topic}</p>
                      <ResourceLinks lesson={l} />
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {(currentProblemWeek || lastRevealedWeek) && (
        <section className="section" aria-labelledby="potw-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">
                  {currentProblemWeek ? `Week ${pad2(currentProblemWeek.week)} · ${currentProblemWeek.topic}` : "Weekly challenge"}
                </p>
                <h2 id="potw-title">Problem of the Week</h2>
              </div>
              <Link href="/problems">All problems →</Link>
            </div>

            {potw && <ProblemEncouragement />}
            {potw && (
              <div className="problem-grid">
                {potw.problems.map((p) => (
                  <ProblemCard key={p.level} problem={p} week={potw.week} answersRevealed={false} />
                ))}
              </div>
            )}

            {lastRevealedWeek && (
              <div className="last-answers">
                <h3 className="eyebrow">
                  Last week&rsquo;s answers · Week {pad2(lastRevealedWeek.week)}, {lastRevealedWeek.topic}
                </h3>
                <ul>
                  {lastRevealedWeek.problems.map((p) => (
                    <li key={p.level}>
                      <span className="last-answers__level">Level {p.level}</span>
                      <span className="muted">{p.source}</span>
                      <details className="answer">
                        <summary>Show answer</summary>
                        <span dangerouslySetInnerHTML={{ __html: p.answerHtml }} />
                        {p.solution && (
                          <>
                            {" · "}
                            <SmartLink href={p.solution}>Solutions</SmartLink>
                          </>
                        )}
                      </details>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="what-title">
        <div className="container">
          <div className="section-head">
            <h2 id="what-title">What Math Club does</h2>
          </div>
          <div className="grid grid--3">
            {WHAT_WE_DO.map((item) => (
              <div key={item.n} className="card">
                <span className="feature-num" aria-hidden="true">
                  § {item.n}
                </span>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="meeting-strip" style={{ marginTop: 24 }}>
            <dl>
              <div>
                <dt>Meets</dt>
                <dd>{meeting.day || "Day TBA"}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{meeting.time || "TBA"}</dd>
              </div>
              <div>
                <dt>Room</dt>
                <dd>{meeting.room || "TBA"}</dd>
              </div>
            </dl>
            <Link href="/about" className="button">
              How to join
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
