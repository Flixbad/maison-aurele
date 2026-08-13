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
          background: "#d4ff1e",
          color: "#0c0d0f",
          fontSize: 16,
          fontWeight: 800,
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
