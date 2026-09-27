"use client";

import { useEffect, useState } from "react";
import { SmartLink } from "@/components/SmartLink";
import type { ClubEvent } from "@/lib/types";

/** Today's date as "YYYY-MM-DD" in the visitor's time zone. */
function todayISO() {
  return new Date().toLocaleDateString("en-CA");
}

function dateParts(value: string) {
  const d = new Date(`${value}T00:00:00Z`);
  const opts = { timeZone: "UTC" } as const;
  return {
    month: d.toLocaleDateString("en-US", { ...opts, month: "short" }),
    day: d.toLocaleDateString("en-US", { ...opts, day: "numeric" }),
    weekday: d.toLocaleDateString("en-US", { ...opts, weekday: "long" }),
    full: d.toLocaleDateString("en-US", { ...opts, weekday: "long", month: "long", day: "numeric", year: "numeric" }),
  };
}

/**
 * "Upcoming events" section. Receives events sorted soonest-first.
 * Past events are removed in the browser, so the list stays current
 * without rebuilding the site. Renders nothing when no events are left.
 */
export function UpcomingEvents({ events, headingId = "events-title" }: { events: ClubEvent[]; headingId?: string }) {
  const [visible, setVisible] = useState(events);

  useEffect(() => {
    const today = todayISO();
    // Syncing with the visitor's clock after the static HTML loads.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(events.filter((e) => e.date >= today));
  }, [events]);

  if (visible.length === 0) return null;

  return (
    <section className="section" aria-labelledby={headingId}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Mark your calendar</p>
            <h2 id={headingId}>Upcoming events</h2>
          </div>
        </div>
        <ul className="events">
          {visible.map((e) => {
            const d = dateParts(e.date);
            const meta = [e.time, e.location].filter(Boolean).join(" · ");
            return (
              <li key={`${e.date}-${e.title}`} className="event">
                <time className="event__date" dateTime={e.date} aria-label={d.full}>
                  <span className="event__month">{d.month}</span>
                  <span className="event__day">{d.day}</span>
                  <span className="event__weekday">{d.weekday.slice(0, 3)}</span>
                </time>
                <div>
                  <h3 className="event__title">{e.title}</h3>
                  {meta && <p className="event__meta">{meta}</p>}
                  {e.details && <p className="event__details">{e.details}</p>}
                  {e.link && <SmartLink href={e.link.url}>{e.link.label}</SmartLink>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
