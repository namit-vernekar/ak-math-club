import type { Metadata } from "next";
import { AdvisorCard, OfficerCard } from "@/components/OfficerCard";
import { PageHeader } from "@/components/PageHeader";
import { advisor, officers, siteInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Officers",
  description: `Meet the ${siteInfo.schoolYear} student officers and faculty advisor of ${siteInfo.name}.`,
};

export default function OfficersPage() {
  return (
    <>
      <PageHeader eyebrow={`${siteInfo.schoolYear} · Leadership`} title="Officers">
        <p>The students and faculty advisor who run {siteInfo.name}.</p>
      </PageHeader>

      <section className="section" aria-labelledby="advisor-title">
        <div className="container">
          <h2 id="advisor-title" className="eyebrow">
            Faculty advisor
          </h2>
          <AdvisorCard advisor={advisor} />

          <h2 className="eyebrow" id="officers-title" style={{ marginTop: 48 }}>
            Student officers
          </h2>
          <ul className="officer-grid" aria-labelledby="officers-title">
            {officers.map((o, i) => (
              <li key={`${o.role}-${i}`}>
                <OfficerCard officer={o} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
