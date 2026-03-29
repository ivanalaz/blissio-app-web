import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D0C0B",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 7,
            background: "linear-gradient(135deg, #C084FC, #7C3AED)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0D0C0B",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size },
  );
}
