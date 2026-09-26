import { SmartLink } from "@/components/SmartLink";
import { formatDate } from "@/lib/format";
import type { Announcement } from "@/lib/types";

export function Announcements({ items }: { items: Announcement[] }) {
  return (
    <ul className="announcements">
      {items.map((a) => (
        <li key={`${a.date}-${a.title}`} className="announcement">
          <time dateTime={a.date}>{formatDate(a.date, "short")}</time>
          <div>
            <h3>{a.title}</h3>
            {a.body && <p>{a.body}</p>}
            {a.link && <SmartLink href={a.link.url}>{a.link.label}</SmartLink>}
          </div>
        </li>
      ))}
    </ul>
  );
}
