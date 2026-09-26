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
 *     registration: "",    // how AK students sign up, once confirmed
 *     links: [{ label: "Official website", url: "https://..." }],
 *   },
 *
 * Full instructions: CONTENT_GUIDE.md
 */
export const competitions: Competition[] = [
  {
    name: "AMC 8",
    level: "National",
    description:
      "The American Mathematics Competitions middle-school contest, run by the Mathematical Association of America (MAA).",
    eligibility: "Students in grade 8 or below (see MAA for full rules).",
    date: "",
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
    name: "AMC 10",
    level: "National",
    description:
      "The American Mathematics Competitions contest for students in grade 10 and below. Strong scores can qualify students for the AIME.",
    eligibility: "Students in grade 10 or below (see MAA for full rules).",
    date: "",
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
    date: "",
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
    description: "A math competition hosted at Duke University.",
    eligibility: "",
    date: "",
    registration: "",
    links: [],
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
