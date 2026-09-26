import type { ReactNode } from "react";
import { isExternal } from "@/lib/format";

/** A link that opens external sites in a new tab and tells screen readers so. */
export function SmartLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  if (!isExternal(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
