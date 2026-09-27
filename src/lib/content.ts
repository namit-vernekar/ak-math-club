/**
 * Reads the data files, checks them for common mistakes, and prepares
 * them for the pages. If something is wrong (duplicate week number,
 * bad date, broken link format), `npm run build` stops with a message
 * explaining exactly what to fix.
 */
import { weeklyLessons } from "@/data/weeklyLessons";
import { competitions } from "@/data/competitions";
import { events } from "@/data/events";
import { volunteering } from "@/data/volunteering";
import { advisor, officers } from "@/data/officers";
import { announcements, siteInfo } from "@/data/siteInfo";
import type { WeeklyLesson, WeeklyProblem } from "@/lib/types";
import { hasLink } from "@/lib/format";
import { createHash } from "node:crypto";
import { acceptedAnswers } from "@/lib/answerCheck";
import { findEscapeMistake, renderMath } from "@/lib/math";

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

function validateProblem(where: string, p: WeeklyProblem) {
  const file = "weeklyLessons.ts";
  if (!p.source?.trim()) fail(file, `${where}: add a "source" (e.g. "2019 AMC 10A, Problem 15") to credit the problem.`);
  if (!p.problem?.trim()) fail(file, `${where}: "problem" can't be empty.`);
  if (!p.answer?.trim()) fail(file, `${where}: add the "answer" (it stays hidden until the next week is posted).`);
  checkLink(file, `${where} solution`, p.solution);
  for (const text of [p.problem, p.answer, ...(p.choices ?? [])]) {
    const mistake = findEscapeMistake(text);
    if (mistake) fail(file, `${where}: ${mistake}`);
    try {
      renderMath(text);
    } catch (err) {
      fail(file, `${where}: a math formula has a typo. ${(err as Error).message}`);
    }
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
    for (const [level, p] of Object.entries(l.problems ?? {})) {
      if (p) validateProblem(`${where} ${level}`, p);
    }
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

  for (const [file, list] of [["events.ts", events], ["volunteering.ts", volunteering]] as const) {
    for (const e of list) {
      if (!isValidDate(e.date)) fail(file, `Event "${e.title}": date "${e.date}" must look like "2026-10-16".`);
      if (!e.title?.trim()) fail(file, `An event is missing a "title".`);
      checkLink(file, `Event "${e.title}"`, e.link?.url);
    }
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
 * Lessons for the searchable archive, which runs in the browser.
 * Problems are removed so their answers are never sent to visitors.
 */
export const lessonsForArchive: WeeklyLesson[] = lessonsNewestFirst.map((lesson) => {
  const copy = { ...lesson };
  delete copy.problems;
  return copy;
});

/** A Problem of the Week, with its math already turned into HTML. */
export type ProblemView = {
  level: 1 | 2;
  source: string;
  problemHtml: string;
  choicesHtml: string[];
  answerHtml: string;
  solution?: string;
  /** For the answer checker: hashes of accepted answers (the answers themselves aren't sent). */
  answerHashes: string[];
  answerSalt: string;
  inputHint: string;
};

export type ProblemWeek = {
  week: number;
  date: string;
  topic: string;
  problems: ProblemView[];
  /** Answers are revealed once a newer week's problems have been posted. */
  answersRevealed: boolean;
};

function toView(week: number, level: 1 | 2, p: WeeklyProblem): ProblemView {
  const answerSalt = `akmc-w${week}-l${level}:`;
  return {
    answerSalt,
    answerHashes: acceptedAnswers(p.answer, p.accept).map((a) =>
      createHash("sha256").update(answerSalt + a).digest("hex"),
    ),
    inputHint: p.choices?.length ? "Letter or number" : "Your answer",
    level,
    source: p.source,
    problemHtml: renderMath(p.problem),
    choicesHtml: (p.choices ?? []).map(renderMath),
    answerHtml: renderMath(p.answer),
    solution: hasLink(p.solution) ? p.solution : undefined,
  };
}

/**
 * Every week that has problems, newest first. The newest one is the current
 * Problem of the Week (answers hidden); older ones have their answers revealed.
 */
export const problemWeeks: ProblemWeek[] = lessonsNewestFirst
  .filter((l) => l.problems?.level1 || l.problems?.level2)
  .map((l, i) => ({
    week: l.week,
    date: l.date,
    topic: l.topic,
    problems: [
      l.problems?.level1 && toView(l.week, 1, l.problems.level1),
      l.problems?.level2 && toView(l.week, 2, l.problems.level2),
    ].filter((p): p is ProblemView => !!p),
    answersRevealed: i > 0,
  }));

/** The current Problem of the Week (the newest week that has problems). */
export const currentProblemWeek = problemWeeks.find((w) => !w.answersRevealed);

/** The most recent week whose answers are now revealed. */
export const lastRevealedWeek = problemWeeks.find((w) => w.answersRevealed);

/** Week numbers that have problems (used to link lesson cards to /problems). */
export const weeksWithProblems = problemWeeks.map((w) => w.week);

/**
 * Events sorted soonest first, dropping ones already past when the site was built.
 * (The UpcomingEvents component also hides past events in the visitor's browser.)
 */
const buildDay = new Date().toISOString().slice(0, 10);
export const upcomingEvents = [...events]
  .filter((e) => e.date >= buildDay)
  .sort((a, b) => a.date.localeCompare(b.date));

/** Volunteering events, same rules as above. */
export const upcomingVolunteering = [...volunteering]
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
