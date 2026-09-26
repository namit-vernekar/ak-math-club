/**
 * Decorative figure for the home page: the Euclidean algorithm drawn as
 * a 21 × 13 rectangle cut into squares. Each division step removes the
 * largest possible square; the last square's side is the gcd.
 */
const UNIT = 20;
const SQUARES: { x: number; y: number; s: number }[] = [
  { x: 0, y: 0, s: 13 },
  { x: 13, y: 0, s: 8 },
  { x: 13, y: 8, s: 5 },
  { x: 18, y: 8, s: 3 },
  { x: 18, y: 11, s: 2 },
  { x: 20, y: 11, s: 1 },
  { x: 20, y: 12, s: 1 },
];
const STEPS = ["21 = 1·13 + 8", "13 = 1·8 + 5", "8 = 1·5 + 3", "5 = 1·3 + 2", "3 = 1·2 + 1", "2 = 2·1 + 0"];

export function EuclidFigure() {
  return (
    <figure className="hero__figure euclid">
      <svg
        viewBox={`-2 -2 ${21 * UNIT + 4} ${13 * UNIT + 4}`}
        role="img"
        aria-label="A 21 by 13 rectangle divided into squares of side 13, 8, 5, 3, 2, 1 and 1."
      >
        {SQUARES.map(({ x, y, s }, i) => (
          <g key={i}>
            <rect
              className={`euclid__sq${s === 1 ? " euclid__sq--hi" : ""}`}
              x={x * UNIT}
              y={y * UNIT}
              width={s * UNIT}
              height={s * UNIT}
            />
            {s > 1 && (
              <text
                className="euclid__label"
                x={(x + s / 2) * UNIT}
                y={(y + s / 2) * UNIT + 4}
                textAnchor="middle"
              >
                {s}
              </text>
            )}
          </g>
        ))}
      </svg>
      <ol className="euclid__steps" aria-label="Division steps">
        {STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <figcaption>
        The Euclidean algorithm as a picture: keep cutting off the largest square. The last square has side{" "}
        <strong>gcd(21, 13) = 1</strong>.
      </figcaption>
    </figure>
  );
}
