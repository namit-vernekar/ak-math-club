"use client";

import { useId, useState } from "react";
import { normalizeAnswer, sha256Hex } from "@/lib/answerCheck";

type Props = {
  /** Hashes of every accepted answer (see src/lib/answerCheck.ts). */
  hashes: string[];
  salt: string;
  hint: string;
};

type Result = "correct" | "wrong" | null;

export function AnswerChecker({ hashes, salt, hint }: Props) {
  const id = useId();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [tries, setTries] = useState(0);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    const guess = normalizeAnswer(value);
    if (!guess) return;
    const hash = await sha256Hex(salt + guess);
    const correct = hashes.includes(hash);
    setResult(correct ? "correct" : "wrong");
    if (!correct) setTries((t) => t + 1);
  }

  return (
    <form className="checker" onSubmit={check}>
      <label className="checker__label" htmlFor={id}>
        Check your answer
      </label>
      <div className="checker__row">
        <input
          id={id}
          className="checker__input"
          type="text"
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          placeholder={hint}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setResult(null);
          }}
        />
        <button type="submit" className="button button--primary checker__button">
          Check
        </button>
      </div>
      <p className={`checker__result${result ? ` checker__result--${result}` : ""}`} role="status" aria-live="polite">
        {result === "correct" && "✓ Correct! Nice work."}
        {result === "wrong" &&
          (tries >= 3 ? "✗ Not quite. Keep at it, or take a break and come back to it!" : "✗ Not quite. Try again!")}
      </p>
    </form>
  );
}
