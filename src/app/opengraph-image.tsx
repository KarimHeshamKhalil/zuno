import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#f4efe3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Left brand panel */}
        <div
          style={{
            width: "520px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 60px",
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 900,
              color: "#f0672c",
              letterSpacing: 2,
            }}
          >
            ZUNO
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              color: "#141414",
              lineHeight: 1.02,
              marginTop: 18,
              textTransform: "uppercase",
            }}
          >
            Your dream location starts here
          </div>
          <div style={{ fontSize: 22, color: "#7a7568", marginTop: 20 }}>
            Verified villas · Apartments · Penthouses
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              background: "#141414",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 999,
              width: 300,
              justifyContent: "center",
            }}
          >
            zuno-estate.vercel.app
          </div>
        </div>
        {/* Right photo panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: 28,
          }}
        >
          {/* OG photo panel */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
            alt=""
            width={620}
            height={574}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 28,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
