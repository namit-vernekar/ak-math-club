/** Club mark: a square split by the Euclidean-algorithm tiling, with "AK". */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="30" height="30" rx="5" fill="var(--ink)" />
      <path d="M21 1v30M21 20h10M26 20v11" stroke="var(--paper)" strokeOpacity="0.35" strokeWidth="1" fill="none" />
      <text
        x="11"
        y="20.5"
        textAnchor="middle"
        fontFamily="var(--font-serif)"
        fontWeight="700"
        fontSize="12"
        fill="var(--paper)"
      >
        AK
      </text>
    </svg>
  );
}
