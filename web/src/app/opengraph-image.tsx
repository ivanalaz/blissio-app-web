import { ImageResponse } from "next/og";

export const alt = "Blissio — platforma za klubove";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0D0C0B 0%, #1A1917 45%, #2e1064 100%)",
          color: "#F0EDE6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #C084FC, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0D0C0B",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <span style={{ fontSize: 56, fontWeight: 700 }}>Blissio</span>
        </div>
        <p style={{ fontSize: 28, opacity: 0.85, maxWidth: 900, textAlign: "center" }}>
          Rasporedi, članarine, prisustvo — jedna platforma za vaš klub.
        </p>
      </div>
    ),
    { ...size },
  );
}
