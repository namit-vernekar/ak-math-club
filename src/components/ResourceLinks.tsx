import type { ReactNode } from "react";
import { SmartLink } from "@/components/SmartLink";
import { hasLink } from "@/lib/format";
import type { WeeklyLesson } from "@/lib/types";

type ResourceKey = keyof WeeklyLesson["resources"];

/**
 * The buttons shown on every lesson. The three main resources always
 * appear (marked "coming soon" if the link is empty); the optional ones
 * only appear when a link is provided.
 */
const RESOURCE_TYPES: { key: ResourceKey; label: string; alwaysShow: boolean }[] = [
  { key: "slideshow", label: "Slide Show", alwaysShow: true },
  { key: "worksheet", label: "Worksheet", alwaysShow: true },
  { key: "solutions", label: "Solutions", alwaysShow: true },
  { key: "challenge", label: "Challenge Problems", alwaysShow: false },
  { key: "video", label: "Video", alwaysShow: false },
];

const ICONS: Record<ResourceKey, ReactNode> = {
  slideshow: <path d="M2 3h12v8H2zM8 11v3M5 14h6" />,
  worksheet: <path d="M4 1.5h6l3 3v10H4zM10 1.5v3h3M6 8h5M6 11h5" />,
  solutions: <path d="M3 8.5l3 3 7-7" />,
  challenge: <path d="M8 1.5l1.9 4 4.4.5-3.3 3 .9 4.4L8 11.2l-3.9 2.2.9-4.4-3.3-3 4.4-.5z" />,
  video: <path d="M2 3.5h12v9H2zM6.5 6v4l3.5-2z" />,
};

function Icon({ k }: { k: ResourceKey }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {ICONS[k]}
    </svg>
  );
}

export function ResourceLinks({ lesson }: { lesson: WeeklyLesson }) {
  const items = RESOURCE_TYPES.filter((t) => t.alwaysShow || hasLink(lesson.resources[t.key]));
  return (
    <ul className="resources" aria-label={`Week ${lesson.week} resources`}>
      {items.map(({ key, label }) => {
        const url = lesson.resources[key];
        return (
          <li key={key}>
            {hasLink(url) ? (
              <SmartLink href={url} className="resource">
                <Icon k={key} />
                {label}
              </SmartLink>
            ) : (
              <span className="resource resource--soon">
                <Icon k={key} />
                {label}
                <span className="resource__soon">· coming soon</span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
