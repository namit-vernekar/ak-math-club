/**
 * Turns text with LaTeX math into HTML, at build time (no JavaScript is sent to visitors).
 *   Inline math:  $a_1 = 1$
 *   Display math: $$a_n = \frac{a_{n-2}}{2}$$
 * Everything outside the dollar signs is shown as plain text.
 */
import katex from "katex";

const MATH_RE = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Throws if the LaTeX is invalid, so mistakes are caught when the site builds. */
export function renderMath(text: string): string {
  let html = "";
  let last = 0;
  for (const m of text.matchAll(MATH_RE)) {
    html += escapeHtml(text.slice(last, m.index));
    const display = m[1] !== undefined;
    html += katex.renderToString(display ? m[1] : m[2], { displayMode: display, throwOnError: true });
    last = m.index + m[0].length;
  }
  html += escapeHtml(text.slice(last));
  return html;
}

/**
 * Catches a common mistake: writing LaTeX like "\frac" inside normal "quotes"
 * turns "\f" into an invisible character. Returns a problem description, or null.
 */
export function findEscapeMistake(text: string): string | null {
  if (/[\b\f\v\t\r]/.test(text)) {
    return 'it contains a backslash command (like \\frac or \\times) inside normal "quotes". Wrap the text in String.raw`...` instead (see CONTENT_GUIDE.md).';
  }
  for (const m of text.matchAll(MATH_RE)) {
    if (/\n/.test(m[1] ?? m[2])) {
      return 'a math formula contains a line break, which usually means "\\n..." (like \\neq) was written inside normal "quotes". Use String.raw`...` instead.';
    }
  }
  return null;
}
