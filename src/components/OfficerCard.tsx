import Image from "next/image";
import { SmartLink } from "@/components/SmartLink";
import { contactHref, hasLink } from "@/lib/format";
import type { Advisor, Officer } from "@/lib/types";

function initials(name: string) {
  return name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "")
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Portrait frame (4:5). Shows the photo if one is set; otherwise a
 * graph-paper tile with initials (or "?" for an unfilled position).
 */
function Portrait({ name, photo, className = "" }: { name: string; photo?: string; className?: string }) {
  if (name && hasLink(photo)) {
    return (
      <div className={`portrait ${className}`}>
        <Image src={photo} alt={`Photo of ${name}`} width={480} height={600} sizes="(max-width: 560px) 120px, 280px" />
      </div>
    );
  }
  return (
    <div className={`portrait portrait--placeholder graph-paper ${name ? "" : "portrait--vacant"} ${className}`} aria-hidden="true">
      <span>{name ? initials(name) : "?"}</span>
    </div>
  );
}

export function OfficerCard({ officer }: { officer: Officer }) {
  const vacant = !officer.name.trim();
  return (
    <article className={`officer-card${vacant ? " officer-card--vacant" : ""}`}>
      <Portrait name={officer.name} photo={officer.photo} />
      <div className="officer-card__text">
        <p className="officer-card__role">{officer.role}</p>
        <h3 className="officer-card__name">{vacant ? "To be announced" : officer.name}</h3>
        {officer.grade && <p className="officer-card__grade">{officer.grade}</p>}
        {officer.bio && <p className="officer-card__bio">{officer.bio}</p>}
        {hasLink(officer.contact) && (
          <p className="officer-card__contact">
            <SmartLink href={contactHref(officer.contact)}>Contact {officer.name}</SmartLink>
          </p>
        )}
      </div>
    </article>
  );
}

export function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <article className="advisor-card" aria-labelledby="advisor-name">
      <Portrait name={advisor.name} photo={advisor.photo} className="portrait--advisor" />
      <div>
        <p className="eyebrow">{advisor.title}</p>
        <h3 id="advisor-name">{advisor.name}</h3>
        {advisor.subtitle && <p className="advisor-card__subtitle">{advisor.subtitle}</p>}
        {advisor.bio && <p className="advisor-card__bio">{advisor.bio}</p>}
        <ul className="contact-links">
          {advisor.email && (
            <li>
              <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
            </li>
          )}
          {advisor.website && (
            <li>
              <SmartLink href={advisor.website}>{advisor.name}&rsquo;s website</SmartLink>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
