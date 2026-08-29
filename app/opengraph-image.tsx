import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Good Fruit Creative — Smart design, built properly.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "good-fruit-logo.png",
  );

  const logoBuffer = await readFile(logoPath);

  const logoDataUrl = `data:image/png;base64,${logoBuffer.toString(
    "base64",
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f6f1e6",
          color: "#174a32",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              marginBottom: "48px",
              fontSize: "25px",
              fontWeight: 700,
            }}
          >
            good fruit creative
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontSize: "80px",
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-3px",
            }}
          >
            <span>Smart design,</span>
            <span>built properly.</span>
          </div>
        </div>

        <img
          src={logoDataUrl}
          width="300"
          height="300"
          alt=""
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}