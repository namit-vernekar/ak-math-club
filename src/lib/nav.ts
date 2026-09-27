/**
 * Main navigation. Pages appear in this order in the header and footer.
 * `short` is the label used in the top menu (so everything fits on one line);
 * the footer uses the full `label`.
 */
export const navItems = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/resources", label: "Weekly Resources", short: "Resources" },
  { href: "/problems", label: "Problem of the Week", short: "Problems" },
  { href: "/officers", label: "Officers", short: "Officers" },
  { href: "/competitions", label: "Competitions", short: "Competitions" },
  { href: "/volunteering", label: "Volunteering", short: "Volunteering" },
  { href: "/about", label: "About / Join", short: "About" },
] as const;
