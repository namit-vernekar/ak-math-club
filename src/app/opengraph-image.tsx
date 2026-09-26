import { ImageResponse } from "next/og";
import { siteInfo } from "@/data/siteInfo";

// The preview image shown when the site is shared (iMessage, Discord, etc.).
export const dynamic = "force-static";
export const alt = `${siteInfo.name} · ${siteInfo.schoolYear}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#141d33";
const PAPER = "#fbfaf6";
const GRID = "rgba(20,29,51,0.07)";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: PAPER,
          backgroundImage: `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: INK,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#b0400f", fontFamily: "monospace", letterSpacing: 2 }}>
          {siteInfo.schoolYear.replace("–", "-")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>{siteInfo.name}</div>
          <div style={{ fontSize: 36, marginTop: 24, color: "#4a5470" }}>{siteInfo.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4a5470" }}>
          {siteInfo.school} · {siteInfo.location}
        </div>
      </div>
    ),
    size,
  );
}
