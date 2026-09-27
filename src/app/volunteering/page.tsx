import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { siteInfo, upcomingVolunteering } from "@/lib/content";

export const metadata: Metadata = {
  title: "Volunteering",
  description: `Volunteering events with ${siteInfo.name}.`,
};

export default function VolunteeringPage() {
  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · Service`} title="Volunteering" />
      <UpcomingEvents
        events={upcomingVolunteering}
        headingId="volunteering-title"
        title="Upcoming volunteering"
        eyebrow=""
        emptyText="No volunteering events right now. Check back soon."
      />
    </>
  );
}
