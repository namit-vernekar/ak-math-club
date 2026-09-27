import { formatDate } from "@/lib/format";
import type { WeeklyLesson } from "@/lib/types";

// "week 2", "week 02", "wk 2", "w2", "#2", or just "2"
const WEEK_RE = /^(?:week|wk|w)?\s*#?\s*0*(\d+)$/;
// "9/11", "09/11", "9-11", "9/11/26", "9/11/2026"
const DATE_RE = /^(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2}|\d{4}))?$/;

/** Does this lesson match what the student typed in the search box? */
export function matchesLessonSearch(lesson: WeeklyLesson, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return true;

  const week = q.match(WEEK_RE);
  if (week) return lesson.week === Number(week[1]);

  const date = q.match(DATE_RE);
  if (date) {
    const [year, month, day] = lesson.date.split("-").map(Number);
    const yearOk = !date[3] || Number(date[3]) === year || Number(date[3]) === year % 100;
    return Number(date[1]) === month && Number(date[2]) === day && yearOk;
  }

  // Otherwise every word must appear somewhere (so "sep 11" and "counting order" work).
  const haystack = [
    lesson.topic,
    lesson.description,
    lesson.category,
    lesson.notes,
    `week ${lesson.week}`,
    formatDate(lesson.date),
    formatDate(lesson.date, "short"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return q.split(" ").every((word) => haystack.includes(word));
}
