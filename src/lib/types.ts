/**
 * Shapes of all the content on the site.
 *
 * You normally do NOT need to edit this file. Edit the files in `src/data/`
 * instead. TypeScript uses these types to warn you if you make a typo
 * (for example, writing `worksheeet` instead of `worksheet`).
 */

/**
 * A link to a resource. Use a full URL ("https://docs.google.com/...")
 * or a path to a file inside the `public/` folder ("/resources/week-4.pdf").
 * Use an empty string "" if the resource is not ready yet; the site will
 * show "Coming soon" instead of a broken button.
 */
export type ResourceLink = string;

/** One Problem of the Week. Math goes between dollar signs, e.g. $a_1 = 1$. */
export type WeeklyProblem = {
  /** Where it's from, e.g. "2019 AMC 10A, Problem 15". Always credit the source. */
  source: string;
  /** The problem text. Use String.raw`...` when it contains LaTeX backslashes. */
  problem: string;
  /** Optional multiple-choice answers, in order (A), (B), (C)... */
  choices?: string[];
  /**
   * The answer, e.g. "(E) 8078" or "252". Shown once the next week is posted.
   * The answer checker accepts it automatically ("(E) 8078" accepts both "E" and "8078").
   */
  answer: string;
  /** Optional extra forms the checker should accept, e.g. ["3/4", "0.75"]. */
  accept?: string[];
  /** Optional link to a worked solution (e.g. the AoPS Wiki page). */
  solution?: string;
};

export type WeeklyLesson = {
  /** Week number, e.g. 4. Every week must have a different number. */
  week: number;
  /** Meeting date in YYYY-MM-DD format, e.g. "2026-09-25". */
  date: string;
  /** Lesson topic, e.g. "Modular Arithmetic". */
  topic: string;
  /** Optional one- or two-sentence summary shown on the card. */
  description?: string;
  /**
   * Optional subject area used by the filter buttons on the Weekly Resources page,
   * e.g. "Number Theory", "Combinatorics", "Algebra", "Geometry".
   */
  category?: string;
  resources: {
    slideshow?: ResourceLink;
    worksheet?: ResourceLink;
    solutions?: ResourceLink;
    /** Optional extra challenge problems. */
    challenge?: ResourceLink;
    /** Optional video (e.g. YouTube link). */
    video?: ResourceLink;
  };
  /** Optional short note shown on the card, e.g. "Bring a calculator." */
  notes?: string;
  /**
   * Optional Problem of the Week, in two levels:
   * level1 ≈ AMC 10 problem 15, level2 ≈ AIME problem 4–5.
   */
  problems?: {
    level1?: WeeklyProblem;
    level2?: WeeklyProblem;
  };
};

export type Officer = {
  /** Position title, e.g. "Co-President". */
  role: string;
  /** First name or full name. Use "" if the position has not been filled yet. */
  name: string;
  /** e.g. "Senior", "Junior", "Sophomore", "Freshman". Optional. */
  grade?: string;
  /** Optional portrait photo inside `public/`, e.g. "/officers/anirudh.jpg" (about 480×600 px). */
  photo?: string;
  /** Optional short description (1–2 sentences, max 300 characters). */
  bio?: string;
  /** Optional contact: an email address or a full URL. */
  contact?: string;
};

export type Advisor = {
  name: string;
  title: string;
  subtitle?: string;
  email?: string;
  website?: string;
  photo?: string;
  /** Optional short description. */
  bio?: string;
};

export type Competition = {
  /** e.g. "AMC 10". */
  name: string;
  /** Short, factual description of the competition. */
  description: string;
  /** Who can take it, e.g. "Students in grade 10 or below". "" if unknown. */
  eligibility: string;
  /**
   * Date in YYYY-MM-DD format once it is officially announced.
   * Leave as "" until confirmed; the site will show "Date TBA".
   */
  date: string;
  /** Optional extra date detail shown under the date, e.g. "B date: Fri, Nov 13". */
  dateNote?: string;
  /** How students sign up at Ardrey Kell. Leave "" until confirmed. */
  registration: string;
  /** Short grouping label, e.g. "National", "State", "Regional". */
  level: "National" | "Regional" | "State" | "Local" | "Other";
  /** Official website or helpful preparation links. */
  links: { label: string; url: string }[];
};

export type ClubEvent = {
  /** YYYY-MM-DD. The event disappears from the site automatically after this day. */
  date: string;
  title: string;
  /** e.g. "2:15–3:30 PM". Optional. */
  time?: string;
  /** Where it is, e.g. "CHMS". Optional. */
  location?: string;
  /** Extra details, e.g. "Meet in A103 first, like usual." Optional. */
  details?: string;
  link?: { label: string; url: string };
};

export type Announcement = {
  /** YYYY-MM-DD */
  date: string;
  title: string;
  body?: string;
  link?: { label: string; url: string };
};
