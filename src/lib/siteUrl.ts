import { siteInfo } from "@/data/siteInfo";

/**
 * The public address of the site. Uses `siteUrl` from src/data/siteInfo.ts,
 * or Vercel's production URL automatically, or localhost during development.
 */
export const siteUrl = (
  siteInfo.siteUrl ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
