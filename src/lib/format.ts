/** Small helpers shared by server and client components. */

/** A link is "present" if it's a non-empty string. */
export function hasLink(url: string | undefined): url is string {
  return typeof url === "string" && url.trim() !== "";
}

/** "2026-09-18" → "September 18, 2026" (timezone-safe). */
export function formatDate(value: string, style: "long" | "short" = "long") {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
  });
}

/** "2026-09-18" → "September 2026" */
export function formatMonth(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
  });
}

export function isExternal(url: string) {
  return /^https?:\/\//.test(url);
}

/** Turns an email address into a mailto: link; leaves URLs alone. */
export function contactHref(contact: string) {
  return contact.includes("@") && !contact.startsWith("mailto:") && !/^https?:/.test(contact)
    ? `mailto:${contact}`
    : contact;
}

/** Two-digit week label: 3 → "03" */
export function pad2(n: number) {
  return n.toString().padStart(2, "0");
}
