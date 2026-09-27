import type { ClubEvent } from "@/lib/types";

/**
 * ============================================================
 *  VOLUNTEERING EVENTS: shown on the Volunteering page.
 * ============================================================
 *
 * - Events are sorted by date automatically (soonest first).
 * - An event disappears from the site on its own the day after
 *   its date, so you don't need to delete old ones (but you can).
 *
 * Template:
 *   {
 *     date: "2026-10-16",          // YYYY-MM-DD
 *     title: "Event name",
 *     time: "2:15–3:30 PM",        // optional
 *     location: "Where",           // optional
 *     details: "Anything else.",   // optional
 *     link: { label: "Sign up", url: "https://..." },   // optional
 *   },
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const volunteering: ClubEvent[] = [
  {
    date: "2026-10-16",
    title: "Homecoming Parade",
    time: "2:15–3:30 PM",
    location: "CHMS",
    details: "Meet in A103 first, like usual.",
  },
];
