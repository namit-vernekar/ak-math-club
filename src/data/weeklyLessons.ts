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
    problems: {
      level1: {
        source: "2019 AMC 10A, Problem 15",
        problem: String.raw`A sequence of numbers is defined recursively by $a_1 = 1$, $a_2 = \frac{3}{7}$, and $$a_n=\frac{a_{n-2} \cdot a_{n-1}}{2a_{n-2} - a_{n-1}}$$ for all $n \geq 3$. Then $a_{2019}$ can be written as $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. What is $p+q$?`,
        choices: ["2020", "4039", "6057", "6061", "8078"],
        answer: "(E) 8078",
        solution: "https://artofproblemsolving.com/wiki/index.php/2019_AMC_10A_Problems/Problem_15",
      },
      level2: {
        source: "2019 AIME I, Problem 5",
        problem: String.raw`A moving particle starts at the point $(4,4)$ and moves until it hits one of the coordinate axes for the first time. When the particle is at the point $(a,b)$, it moves at random to one of the points $(a-1,b)$, $(a,b-1)$, or $(a-1,b-1)$, each with probability $\frac{1}{3}$, independently of its previous moves. The probability that it will hit the coordinate axes at $(0,0)$ is $\frac{m}{3^n}$, where $m$ and $n$ are positive integers such that $m$ is not divisible by $3$. Find $m + n$.`,
        answer: "252",
        solution: "https://artofproblemsolving.com/wiki/index.php/2019_AIME_I_Problems/Problem_5",
      },
    },
  },
  {
    week: 4,
    date: "2026-09-25",
    topic: "Topic coming soon",
    resources: {
      slideshow: "",
      worksheet: "https://docs.google.com/document/d/17B_Xz-z1xC4fOAZ-jJXnywbzvDLHJ2xLakysXRrQgUQ/edit",
      solutions: "https://docs.google.com/document/d/1YRd7mLDGS32ILeSI7lgl0CP2g3yjBnknNDKlxNpzhFA/edit",
    },
  },
  {
    week: 5,
    date: "2026-10-10",
    topic: "Topic coming soon",
    resources: {
      slideshow: "",
      worksheet: "",
      solutions: "",
    },
  },
  // ⬇ Add the next week here (copy the template at the top of this file).
];
