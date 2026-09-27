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
      slideshow: "https://docs.google.com/presentation/d/1m4sbFAzdgNLJGKJJXRGvWKa-T_IrXtZTDICrJjAXSOk/edit?usp=sharing",
      worksheet: "https://drive.google.com/file/d/1DDSKjy3uiF50NBE7SsUTO_0a08xRJEU_/view?usp=sharing",
      solutions: "https://drive.google.com/file/d/17FxRKiSy9BUEt-FuKtcSDrr-TwhTpALc/view?usp=sharing",
    },
  },
  {
    week: 2,
    date: "2026-09-11",
    topic: "Combinations",
    description: "Counting selections when order does not matter.",
    category: "Combinatorics",
    resources: {
      slideshow: "https://docs.google.com/presentation/d/1OK3LzQJK7Eq91iW5YYmMMj-36hMxTGKa57WyTof3tf4/edit?usp=sharing",
      worksheet: "https://docs.google.com/document/d/1V7AkyUiv3vBVrcWaseTJD6lw_d-EtxlbE29Ot4D47kE/edit?usp=sharing",
      solutions: "https://drive.google.com/file/d/1udDLxp2tWwBoQVsLAhFMTvSYbEWCNv1j/view?usp=sharing",
    },
  },
  {
    week: 3,
    date: "2026-09-18",
    topic: "Recursion",
    description: "Learn about recursion and recursive problem-solving.",
    category: "Combinatorics",
    resources: {
      slideshow: "https://docs.google.com/presentation/d/1Mv7aUBKPDNEHrnDjBB501yao-NzT_h2DjH5TxWcn15U/edit?usp=sharing",
      worksheet: "https://drive.google.com/file/d/1isTCF6ElGKeiUwtcex7B95JFXiAbgM5A/view?usp=sharing",
      solutions: "https://drive.google.com/file/d/16JeEA_KeFRALoAiewXFye0719oqYSPx7/view?usp=sharing",
    },
  },
  // ⬇ Add Week 4 here (copy the template at the top of this file).
];
