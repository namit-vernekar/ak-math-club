import type { MetadataRoute } from "next";
import { navItems } from "@/lib/nav";
import { siteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({ url: `${siteUrl}${item.href === "/" ? "" : item.href}` }));
}
