import { SmartLink } from "@/components/SmartLink";
import { formatDate } from "@/lib/format";
import type { Competition } from "@/lib/types";

export function CompetitionCard({ competition: c }: { competition: Competition }) {
  return (
    <article className="comp-card" aria-labelledby={`comp-${slug(c.name)}`}>
      <div>
        <span className="tag">{c.level}</span>
      </div>
      <h3 id={`comp-${slug(c.name)}`}>{c.name}</h3>
      <p className="comp-card__desc">{c.description}</p>
      <dl className="facts">
        <dt>Date</dt>
        <dd>{c.date ? <time dateTime={c.date}>{formatDate(c.date)}</time> : <span className="tba">TBA</span>}</dd>
        <dt>Who</dt>
        <dd>{c.eligibility || <span className="tba">To be added</span>}</dd>
        <dt>Sign up</dt>
        <dd>{c.registration || <span className="tba">Registration details coming soon</span>}</dd>
      </dl>
      {c.links.length > 0 && (
        <ul className="link-list" aria-label={`${c.name} links`}>
          {c.links.map((l) => (
            <li key={l.url + l.label}>
              <SmartLink href={l.url}>
                {l.label} <span aria-hidden="true">↗</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
