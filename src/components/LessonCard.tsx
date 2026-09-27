import Link from "next/link";
import { ResourceLinks } from "@/components/ResourceLinks";
import { formatDate, pad2 } from "@/lib/format";
import type { WeeklyLesson } from "@/lib/types";

type Props = {
  lesson: WeeklyLesson;
  /** Bigger version used for the "Latest Week" on the home page. */
  featured?: boolean;
  /** Heading level for the topic, to keep the page outline correct. */
  headingLevel?: "h2" | "h3";
  /** Show a link to this week's Problem of the Week. */
  hasProblems?: boolean;
};

export function LessonCard({ lesson, featured = false, headingLevel = "h3", hasProblems = false }: Props) {
  const Heading = headingLevel;
  const titleId = `week-${lesson.week}-title`;
  return (
    <article className={`lesson-card${featured ? " lesson-card--feature" : ""}`} aria-labelledby={titleId}>
      <div className="lesson-card__num" aria-hidden="true">
        <span className="lesson-card__num-label">Week</span>
        <span className="lesson-card__num-value">{pad2(lesson.week)}</span>
      </div>
      <div>
        <p className="lesson-card__meta">
          <span className="visually-hidden">Week {lesson.week}, </span>
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          {lesson.category && <span className="tag">{lesson.category}</span>}
        </p>
        <Heading id={titleId}>{lesson.topic}</Heading>
        {lesson.description && <p className="lesson-card__desc">{lesson.description}</p>}
        {lesson.notes && <p className="lesson-card__note">{lesson.notes}</p>}
        <ResourceLinks lesson={lesson} />
        {hasProblems && (
          <p className="lesson-card__potw">
            <Link href={`/problems#week-${lesson.week}`}>
              Problem of the Week <span aria-hidden="true">→</span>
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
