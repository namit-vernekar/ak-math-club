import type { WeeklyLesson } from "@/lib/types";

/**
 * ============================================================
 *  WEEKLY LESSONS: this is the file you edit every week.
 * ============================================================
 *
 * TO ADD A NEW WEEK: copy the template below, paste it at the
 * BOTTOM of the list (after the last week), and fill it in.
 * The website automatically sorts weeks so the newest shows first,
 * and the newest week appears on the home page.
 *
 *   {
 *     week: 4,
 *     date: "2026-09-25",            // YYYY-MM-DD
 *     topic: "Your Topic Here",
 *     description: "One sentence about the lesson.",   // optional
 *     category: "Number Theory",     // optional, used for filtering
 *     resources: {
 *       slideshow: "https://...",    // use "" if not ready yet
 *       worksheet: "https://...",
 *       solutions: "https://...",
 *     },
 *   },
 *
 * Links not ready yet? Leave them as "" and the site shows "Coming soon".
 * Google Drive/Docs/Slides links: make sure sharing is set to
 * "Anyone with the link can view", or students won't be able to open them.
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const weeklyLessons: WeeklyLesson[] = [
  {
    week: 1,
    date: "2026-09-04",
    topic: "Euclidean Algorithm",
    description: "Finding greatest common divisors efficiently by repeated division.",
    category: "Number Theory",
    resources: {
      slideshow: "",
      worksheet: "",
      solutions: "",
    },
  },
  {
    week: 2,
    date: "2026-09-11",
    topic: "Combinations",
    description: "Counting selections when order does not matter.",
    category: "Combinatorics",
    resources: {
      slideshow: "",
      worksheet: "",
      solutions: "",
    },
  },
  {
    week: 3,
    date: "2026-09-18",
    topic: "Recursion",
    description: "Learn about recursion and recursive problem-solving.",
    category: "Combinatorics",
    resources: {
      slideshow: "",
      worksheet: "",
      solutions: "",
    },
  },
  // ⬇ Add Week 4 here (copy the template at the top of this file).
];
