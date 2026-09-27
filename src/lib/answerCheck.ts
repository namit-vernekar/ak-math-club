/**
 * Answer checking for Problem of the Week.
 * Answers are never sent to the browser as text: the site stores a SHA-256
 * hash of each accepted answer, and the browser hashes what the student types.
 * (Good enough for honor-system practice; it's not meant to stop a determined cheater.)
 */

/** "(E)", " e ", "8078", "0252" → "e", "e", "8078", "252" */
export function normalizeAnswer(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[\s()$\\]/g, "")
    .replace(/\.$/, "")
    .replace(/^0+(?=\d)/, "");
}

/**
 * Which inputs count as correct. "(E) 8078" accepts "E" and "8078";
 * anything else accepts the answer itself. Extra forms can be added with `accept`.
 */
export function acceptedAnswers(answer: string, extra: string[] = []): string[] {
  const choice = answer.match(/^\(?([A-Ea-e])\)\s*(.+)$/);
  const forms = choice ? [choice[1], choice[2]] : [answer];
  return [...new Set([...forms, ...extra].map(normalizeAnswer).filter(Boolean))];
}

export async function sha256Hex(text: string): Promise<string> {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
