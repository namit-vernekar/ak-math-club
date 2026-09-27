# Ardrey Kell Math Club website

Website for Ardrey Kell Math Club (Ardrey Kell High School, Charlotte, NC), school year 2026–2027.
Maintained by student officers who are not professional developers. Keep it simple and editable.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict). Static export (`output: "export"` → `out/`).
- Plain CSS in `src/app/globals.css` (design tokens on `:root`, dark mode via `prefers-color-scheme`).
  No CSS framework, no UI library, no database, no auth, no CMS.
- Fonts via `next/font/google` (Source Serif 4, IBM Plex Sans, IBM Plex Mono), self-hosted at build.
- Deployed on Vercel from GitHub (any static host works).

## Layout

- `src/data/`: **all content**. `weeklyLessons.ts`, `officers.ts` (includes `advisor`), `competitions.ts`,
  `events.ts` (upcoming events on Home/About) and `volunteering.ts` (Volunteering tab); past ones
  auto-hide client-side, `siteInfo.ts` (meeting info, links, announcements, school year). Officers edit only these.
- `src/lib/types.ts`: content types. `src/lib/content.ts`: sorts data and **validates it at build time**
  (throws friendly errors). `src/lib/format.ts`: client-safe helpers (dates, links).
- `src/components/`: UI. Client components: `SiteHeader` (mobile menu), `LessonArchive` (search/filter),
  `UpcomingEvents` (hides past events using the visitor's date).
  Everything else is a server component.
- `src/app/`: routes `/`, `/resources`, `/officers`, `/competitions`, `/about`, plus metadata files
  (icon.svg, apple-icon, opengraph-image, sitemap, robots).
- Problem of the Week: optional `problems.level1/level2` on each lesson (LaTeX in `$...$`, written with
  String.raw). Rendered to HTML at build time with KaTeX (`src/lib/math.ts`, no client JS). Answers show only
  once a newer lesson *with problems* exists. Page: `/problems`.
- `CONTENT_GUIDE.md`: student-facing editing/deploy guide. Update it whenever the data shape changes.

## Commands

- `npm run dev`: local dev server (http://localhost:3000)
- `npm run lint` / `npm run typecheck` / `npm run build`
- `npm run check`: all three; run before finishing any change.

## Conventions

- Content never goes in components. Add a field to the type in `types.ts`, the data file, validation in
  `content.ts`, and the guide.
- Empty string `""` means "not known yet"; UI must show a placeholder ("Coming soon", "TBA"), never a
  broken link or button.
- Lessons: newest first, sorted by date. Dates are `YYYY-MM-DD` strings formatted in UTC.
- Keep client JS minimal; avoid new dependencies unless clearly necessary.
- Accessibility: semantic HTML, one `h1` per page, visible focus, 44px touch targets, don't rely on color alone,
  external links announce "(opens in a new tab)" (use `SmartLink`).
- Must work at 360–390px phone widths with no horizontal scroll.

## Content rules (important)

- **Never invent club information**: no made-up officer names, meeting times, competition dates,
  registration details, or claims that the club participates in a competition. Use placeholders.
- Info carried over from the old site (https://sites.google.com/view/akmathclub): advisor Mr. Erb
  (email, website), officers Anirudh/Ishi (Co-Presidents), Ameya (now Competition Manager per user; Namit is ICC Rep), "Fridays A103" (confirmed for 2026–27), competitions sheet (not yet confirmed current) (Discord removed at user request; Band is the main channel),
  Mu Alpha Theta roster, 24–25 and 25–26 schedules.
