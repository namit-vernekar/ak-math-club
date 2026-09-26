import type { Announcement } from "@/lib/types";

/**
 * ============================================================
 *  SITE INFO: club details, meeting info, links, announcements.
 * ============================================================
 *
 * Anything set to "" is treated as "not decided yet" and the site
 * shows a friendly placeholder instead (e.g. "Time TBA").
 * Only fill things in once they are confirmed.
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const siteInfo = {
  name: "Ardrey Kell Math Club",
  shortName: "AK Math Club",
  school: "Ardrey Kell High School",
  location: "Charlotte, North Carolina",
  // Update this (and the lessons/officers) at the start of each school year.
  schoolYear: "2026–2027",
  tagline: "Explore mathematics. Prepare for competitions. Solve challenging problems.",
  description:
    "Ardrey Kell Math Club is a student organization focused on problem solving, mathematical exploration, and competition mathematics.",

  // The public web address once the site is deployed, e.g. "https://akmathclub.vercel.app".
  // Used for link previews when the site is shared. Leave "" if unsure.
  siteUrl: "",

  meeting: {
    // "Fridays" and "A103" come from the old club website. Confirm them for 2026–2027.
    day: "Fridays",
    time: "2:15–3:00 PM",
    room: "A103",
  },

  /** How to join. Leave "" until the officers decide; a placeholder is shown. */
  howToJoin: "",

  // Links. Leave "" for anything the club doesn't have yet.
  links: {
    band: "https://band.us/n/a6aabanawe249",
    discord: "https://discord.gg/u9fmj3fjFH", // from the old club website
    googleClassroom: "",
    remind: "",
    instagram: "", // coming soon
    // Competition spreadsheet linked from the old club website.
    competitionsSheet:
      "https://docs.google.com/spreadsheets/d/1nXfohB_zu6-CQkkM1-TPChPYR1NWzf8dggsBJlJApBU/edit?usp=sharing",
  },

  // Mu Alpha Theta (math honor society) info, carried over from the old site.
  muAlphaTheta: {
    rosterUrl:
      "https://docs.google.com/spreadsheets/d/1BiYlAitiQiPj0GRfBZCGG94MLKMhjLYXh45hRW6sdi8/edit?usp=sharing",
    note: "If you are on the roster, you are a current member in good standing. If you are a senior, your honor cord will automatically be ordered for you.",
  },

  // Lessons from previous school years (on the old Google Sites page).
  pastYears: [
    { label: "2025–2026 schedule", url: "https://sites.google.com/view/akmathclub/schedule/schedule-25-26" },
    { label: "2024–2025 schedule", url: "https://sites.google.com/view/akmathclub/schedule/schedule-24-25" },
  ],
};

/**
 * ANNOUNCEMENTS: shown on the home page (newest first) when this list
 * is not empty. Remove old announcements when they are no longer relevant.
 *
 * Example:
 *   { date: "2026-10-01", title: "AMC sign-ups are open", body: "Ask an officer for details.",
 *     link: { label: "Sign-up form", url: "https://..." } },
 */
export const announcements: Announcement[] = [];
