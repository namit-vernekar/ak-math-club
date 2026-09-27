import type { Advisor, Officer } from "@/lib/types";

/**
 * ============================================================
 *  OFFICERS & ADVISOR: edit this file when officers change.
 * ============================================================
 *
 * - Officers appear on the Officers page in the order listed here.
 * - Leave `name: ""` for a position that hasn't been filled yet;
 *   the site shows "To be announced".
 * - PHOTOS: put a portrait photo in `public/officers/` (about 480×600 px,
 *   .jpg or .webp, face near the top third) and set
 *   `photo: "/officers/firstname.jpg"`. Without a photo, the card shows
 *   the officer's initials instead.
 * - BIO: a short description, 1–2 sentences (max 300 characters).
 * - `contact` can be an email address or a full link.
 *
 * Full instructions: CONTENT_GUIDE.md
 */

// The club advisor. This is the ONLY place the advisor is defined.
export const advisor: Advisor = {
  name: "Mr. Erb",
  title: "Club Advisor",
  subtitle: "AP Calculus Teacher",
  email: "tyler1.erb@cms.k12.nc.us",
  website: "https://sites.google.com/site/mrerbb/home",
};

// Student officers for the 2026–2027 school year.
// Full example with every optional field:
//   {
//     role: "Secretary",
//     name: "Jordan",
//     grade: "Junior",
//     photo: "/officers/jordan.jpg",
//     bio: "Loves geometry and puzzle hunts. Ask me about the AMC!",
//     contact: "jordan@example.com",
//   },
export const officers: Officer[] = [
  { role: "Co-President", name: "Anirudh", grade: "Senior" },
  { role: "Co-President", name: "Ishi", grade: "Senior" },
  { role: "ICC Representative", name: "Namit" },
  { role: "Competition Manager", name: "Ameya", grade: "Senior" },
  { role: "Secretary", name: "Atharv" },
  { role: "Underclassmen President", name: "Abby" },
  { role: "General Officer", name: "Anya" },
  { role: "Social Media Manager", name: "Rayan" },
];
