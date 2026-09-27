import type { Competition } from "@/lib/types";

/**
 * ============================================================
 *  COMPETITIONS: edit this file to add or update competitions.
 * ============================================================
 *
 * IMPORTANT: only add dates and registration details once they are
 * officially confirmed. Leave `date: ""` and `registration: ""` until
 * then; the site shows "Date TBA" / "Registration details coming soon".
 *
 * Listing a competition here does NOT mean the club has registered for it.
 *
 * Template:
 *   {
 *     name: "Competition Name",
 *     level: "National",   // "National" | "Regional" | "State" | "Local" | "Other"
 *     description: "One or two sentences.",
 *     eligibility: "Who can participate",
 *     date: "",            // "YYYY-MM-DD" once confirmed
 *     dateNote: "",        // optional extra detail, e.g. "B date: Nov 13"
 *     registration: "",    // how AK students sign up, once confirmed
 *     links: [{ label: "Official website", url: "https://..." }],
 *   },
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const competitions: Competition[] = [
  {
    name: "AMC 10",
    level: "National",
    description:
      "The American Mathematics Competitions contest for students in grade 10 and below. Strong scores can qualify students for the AIME.",
    eligibility: "Students in grade 10 or below (see MAA for full rules).",
    date: "2026-11-05",
    dateNote: "AMC 10 A: Thu, Nov 5 · AMC 10 B: Fri, Nov 13 (dates from MAA)",
    registration: "",
    links: [
      { label: "MAA AMC website", url: "https://maa.org/student-programs/amc/" },
      {
        label: "Past problems (AoPS Wiki)",
        url: "https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions",
      },
    ],
  },
  {
    name: "AMC 12",
    level: "National",
    description:
      "The American Mathematics Competitions contest for students in grade 12 and below. Strong scores can qualify students for the AIME.",
    eligibility: "Students in grade 12 or below (see MAA for full rules).",
    date: "2026-11-05",
    dateNote: "AMC 12 A: Thu, Nov 5 · AMC 12 B: Fri, Nov 13 (dates from MAA)",
    registration: "",
    links: [
      { label: "MAA AMC website", url: "https://maa.org/student-programs/amc/" },
      {
        label: "Past problems (AoPS Wiki)",
        url: "https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions",
      },
    ],
  },
  {
    name: "AIME",
    level: "National",
    description:
      "The American Invitational Mathematics Examination, the next step after the AMC 10/12.",
    eligibility: "By invitation, based on AMC 10 or AMC 12 scores.",
    date: "",
    registration: "",
    links: [
      { label: "MAA AMC website", url: "https://maa.org/student-programs/amc/" },
      {
        label: "Past problems (AoPS Wiki)",
        url: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions",
      },
    ],
  },
  {
    name: "ARML",
    level: "National",
    description: "The American Regions Mathematics League, a team-based math competition.",
    eligibility: "",
    date: "",
    registration: "",
    links: [{ label: "ARML website", url: "https://www.arml.com/" }],
  },
  {
    name: "Duke Math Meet",
    level: "Regional",
    description:
      "A regional math competition for high school students, hosted by Duke University each fall. Students compete in teams.",
    eligibility: "High school students, in teams of 6.",
    date: "2026-11-07",
    dateNote: "Saturday, at Duke University. Team registration closes Oct 25.",
    registration: "Ardrey Kell is sending two teams, JV and Varsity, with 6 students each (12 total).",
    links: [{ label: "Duke Math Meet website", url: "https://dukemathmeet.org/" }],
  },
  {
    name: "NC State Math Contest",
    level: "State",
    description: "A North Carolina state-level math contest.",
    eligibility: "",
    date: "",
    registration: "",
    links: [],
  },
];
