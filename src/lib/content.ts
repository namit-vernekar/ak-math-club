/**
 * Reads the data files, checks them for common mistakes, and prepares
 * them for the pages. If something is wrong (duplicate week number,
 * bad date, broken link format), `npm run build` stops with a message
 * explaining exactly what to fix.
 */
import { weeklyLessons } from "@/data/weeklyLessons";
import { competitions } from "@/data/competitions";
import { events } from "@/data/events";
import { advisor, officers } from "@/data/officers";
import { announcements, siteInfo } from "@/data/siteInfo";
import type { WeeklyLesson } from "@/lib/types";
import { hasLink } from "@/lib/format";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function fail(file: string, message: string): never {
  throw new Error(`\n\n  ✗ Problem in src/data/${file}:\n    ${message}\n    See CONTENT_GUIDE.md for help.\n`);
}

function isValidDate(value: string) {
  if (!DATE_RE.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(value);
}

function checkLink(file: string, where: string, url: string | undefined) {
  if (!hasLink(url)) return;
  const ok = /^https?:\/\//.test(url) || url.startsWith("/") || url.startsWith("mailto:");
  if (!ok) {
    fail(file, `${where}: "${url}" is not a valid link. Links must start with "https://" (or "/" for files in the public folder).`);
  }
}

function validate() {
  const seen = new Set<number>();
  for (const l of weeklyLessons) {
    const where = `Week ${l.week}`;
    if (!Number.isInteger(l.week) || l.week < 1) fail("weeklyLessons.ts", `"week" must be a whole number like 4 (found ${l.week}).`);
    if (seen.has(l.week)) fail("weeklyLessons.ts", `Week ${l.week} appears more than once. Each week needs a different number.`);
    seen.add(l.week);
    if (!isValidDate(l.date)) fail("weeklyLessons.ts", `${where}: date "${l.date}" must look like "2026-09-25" (YYYY-MM-DD).`);
    if (!l.topic?.trim()) fail("weeklyLessons.ts", `${where}: "topic" can't be empty.`);
    for (const [key, url] of Object.entries(l.resources ?? {})) checkLink("weeklyLessons.ts", `${where} ${key}`, url);
  }

  for (const o of officers) {
    if (!o.role?.trim()) fail("officers.ts", `An officer is missing a "role".`);
    checkLink("officers.ts", `${o.name || o.role} photo`, o.photo);
    if (o.bio && o.bio.length > 300) {
      fail("officers.ts", `${o.name || o.role}'s bio is ${o.bio.length} characters. Keep it under 300 (1–2 sentences).`);
    }
  }
  if (!advisor.name?.trim()) fail("officers.ts", `The advisor needs a name.`);

  for (const c of competitions) {
    if (!c.name?.trim()) fail("competitions.ts", `A competition is missing a "name".`);
    if (c.date && !isValidDate(c.date)) fail("competitions.ts", `${c.name}: date "${c.date}" must look like "2027-02-05" or be "".`);
    for (const link of c.links) checkLink("competitions.ts", `${c.name} link "${link.label}"`, link.url);
  }

  for (const e of events) {
    if (!isValidDate(e.date)) fail("events.ts", `Event "${e.title}": date "${e.date}" must look like "2026-10-16".`);
    if (!e.title?.trim()) fail("events.ts", `An event is missing a "title".`);
    checkLink("events.ts", `Event "${e.title}"`, e.link?.url);
  }

  for (const a of announcements) {
    if (!isValidDate(a.date)) fail("siteInfo.ts", `Announcement "${a.title}": date "${a.date}" must look like "2026-10-01".`);
    checkLink("siteInfo.ts", `Announcement "${a.title}"`, a.link?.url);
  }
  for (const [key, url] of Object.entries(siteInfo.links)) checkLink("siteInfo.ts", `links.${key}`, url);
}

validate();

/** Lessons sorted newest first (by date, then week number). */
export const lessonsNewestFirst: WeeklyLesson[] = [...weeklyLessons].sort(
  (a, b) => b.date.localeCompare(a.date) || b.week - a.week,
);

export const latestLesson: WeeklyLesson | undefined = lessonsNewestFirst[0];

/**
 * Events sorted soonest first, dropping ones already past when the site was built.
 * (The UpcomingEvents component also hides past events in the visitor's browser.)
 */
const buildDay = new Date().toISOString().slice(0, 10);
export const upcomingEvents = [...events]
  .filter((e) => e.date >= buildDay)
  .sort((a, b) => a.date.localeCompare(b.date));

export const announcementsNewestFirst = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

/** Competitions with confirmed dates first (soonest first), then TBA ones in file order. */
export const competitionsSorted = [...competitions].sort((a, b) => {
  if (a.date && b.date) return a.date.localeCompare(b.date);
  if (a.date) return -1;
  if (b.date) return 1;
  return 0;
});

export { siteInfo, advisor, officers };
