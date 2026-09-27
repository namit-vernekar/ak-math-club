import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { SmartLink } from "@/components/SmartLink";
import { siteInfo } from "@/lib/content";
import { hasLink } from "@/lib/format";
import { navItems } from "@/lib/nav";

export function SiteFooter() {
  const connect = [
    { label: "Band", url: siteInfo.links.band },
    { label: "Google Classroom", url: siteInfo.links.googleClassroom },
    { label: "Remind", url: siteInfo.links.remind },
    { label: "Instagram", url: siteInfo.links.instagram },
  ].filter((l) => hasLink(l.url));

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <Link href="/" className="brand">
              <LogoMark />
              <span>{siteInfo.name}</span>
            </Link>
          </div>
          <nav aria-label="Footer">
            <h2>Pages</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Connect</h2>
            <ul>
              {connect.map((l) => (
                <li key={l.label}>
                  <SmartLink href={l.url}>{l.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="site-footer__base">
          <span className="qed" aria-hidden="true">
            ∎
          </span>
        </div>
      </div>
    </footer>
  );
}
