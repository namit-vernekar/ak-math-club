"use client";

import { useMemo, useState } from "react";
import { LessonCard } from "@/components/LessonCard";
import { formatDate, formatMonth } from "@/lib/format";
import type { WeeklyLesson } from "@/lib/types";

/**
 * Searchable, filterable list of all weekly lessons, grouped by month.
 * Receives lessons already sorted newest-first.
 */
export function LessonArchive({ lessons }: { lessons: WeeklyLesson[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => [...new Set(lessons.map((l) => l.category).filter((c): c is string => !!c))].sort(),
    [lessons],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lessons.filter((l) => {
      if (category && l.category !== category) return false;
      if (!q) return true;
      const haystack = [
        l.topic,
        l.description,
        l.category,
        l.notes,
        `week ${l.week}`,
        formatDate(l.date),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [lessons, query, category]);

  const groups = useMemo(() => {
    const map = new Map<string, WeeklyLesson[]>();
    for (const l of filtered) {
      const key = formatMonth(l.date);
      map.set(key, [...(map.get(key) ?? []), l]);
    }
    return [...map.entries()];
  }, [filtered]);

  const reset = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <>
      <div className="archive-toolbar" role="search">
        <div>
          <label className="field-label" htmlFor="lesson-search">
            Search lessons
          </label>
          <input
            id="lesson-search"
            className="search-input"
            type="search"
            placeholder="Try “recursion” or “week 2”"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        {categories.length > 1 && (
          <fieldset className="chips">
            <legend className="field-label">Filter by topic area</legend>
            <button type="button" className="chip" aria-pressed={category === null} onClick={() => setCategory(null)}>
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={category === c}
                onClick={() => setCategory(category === c ? null : c)}
              >
                {c}
              </button>
            ))}
          </fieldset>
        )}
        <p className="archive-count" aria-live="polite">
          Showing {filtered.length} of {lessons.length} {lessons.length === 1 ? "week" : "weeks"} · newest first
        </p>
      </div>

      {groups.length === 0 ? (
        <div className="empty-state">
          <p>No lessons match your search.</p>
          <button type="button" className="button" onClick={reset}>
            Clear search
          </button>
        </div>
      ) : (
        groups.map(([month, items]) => (
          <section key={month} className="month-group" aria-label={month}>
            <h2 className="month-heading">{month}</h2>
            <ul className="lesson-list">
              {items.map((l) => (
                <li key={l.week}>
                  <LessonCard lesson={l} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  );
}
