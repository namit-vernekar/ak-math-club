import type { ClubEvent } from "@/lib/types";

/**
 * ============================================================
 *  UPCOMING EVENTS: shown on the Home and About / Join pages.
 * ============================================================
 *
 * - Events are sorted by date automatically (soonest first).
 * - An event disappears from the site on its own the day after
 *   its date, so you don't need to delete old ones (but you can).
 * - When there are no upcoming events, the section is hidden.
 *
 * Template:
 *   {
 *     date: "2026-10-16",          // YYYY-MM-DD
 *     title: "Event name",
 *     time: "2:15–3:30 PM",        // optional
 *     location: "Where",           // optional
 *     details: "Anything else.",   // optional
 *   },
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const events: ClubEvent[] = [
  {
    date: "2026-10-16",
    title: "Homecoming Parade",
    time: "2:15–3:30 PM",
    location: "CHMS",
    details: "Meet in A103 first, like usual.",
  },
];
