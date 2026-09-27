import "katex/dist/katex.min.css";
import { AnswerChecker } from "@/components/AnswerChecker";
import { SmartLink } from "@/components/SmartLink";
import type { ProblemView } from "@/lib/content";

const LEVELS = {
  1: { name: "Level 1", hint: "About AMC 10 #15" },
  2: { name: "Level 2", hint: "About AIME #4–5" },
} as const;

const LETTERS = "ABCDE";

/** Friendly note shown above the problems. */
export function ProblemEncouragement() {
  return (
    <p className="potw-note">
      <strong>Don&rsquo;t worry if you can&rsquo;t get them!</strong> These are real competition problems, and
      they&rsquo;re meant to be hard.
    </p>
  );
}

type Props = {
  problem: ProblemView;
  week: number;
  /** Show the answer (inside a "Show answer" toggle) instead of "posted next week". */
  answersRevealed: boolean;
};

export function ProblemCard({ problem: p, week, answersRevealed }: Props) {
  const level = LEVELS[p.level];
  const titleId = `w${week}-level${p.level}`;
  return (
    <article className={`problem-card problem-card--l${p.level}`} aria-labelledby={titleId}>
      <header className="problem-card__head">
        <h3 id={titleId} className="problem-card__level">
          {level.name}
        </h3>
        <span className="tag">{level.hint}</span>
      </header>

      <div className="problem-card__body" dangerouslySetInnerHTML={{ __html: p.problemHtml }} />

      {p.choicesHtml.length > 0 && (
        <ol className="choices" aria-label="Answer choices">
          {p.choicesHtml.map((c, i) => (
            <li key={i}>
              <span className="choices__letter" aria-hidden="true">
                ({LETTERS[i]})
              </span>
              <span className="visually-hidden">Choice {LETTERS[i]}: </span>
              <span dangerouslySetInnerHTML={{ __html: c }} />
            </li>
          ))}
        </ol>
      )}

      <AnswerChecker hashes={p.answerHashes} salt={p.answerSalt} hint={p.inputHint} />

      <footer className="problem-card__foot">
        <p className="problem-card__source">Source: {p.source}</p>
        {answersRevealed && (
          <details className="answer">
            <summary>Show answer</summary>
            <p>
              <strong>Answer:</strong> <span dangerouslySetInnerHTML={{ __html: p.answerHtml }} />
            </p>
            {p.solution && <SmartLink href={p.solution}>Worked solutions</SmartLink>}
          </details>
        )}
      </footer>
    </article>
  );
}
