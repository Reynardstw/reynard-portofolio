import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

const data = portfolioData.id;

export const alt = `${data.profile.name} portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#09090b", color: "#f4f4f5", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>{data.profile.initials}<span style={{ color: "#8b5cf6" }}>.</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#a1a1aa" }}>
          <span style={{ width: 12, height: 12, borderRadius: 99, background: "#34d399" }} />
          {data.profile.availability}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: 980 }}>{data.profile.name}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#a1a1aa" }}>{data.profile.role} · {data.profile.location}</div>
      </div>
      <div style={{ width: "100%", height: 4, background: "linear-gradient(90deg, #8b5cf6, #22d3ee, transparent)" }} />
    </div>,
    size,
  );
}
