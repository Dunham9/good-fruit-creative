import { ImageResponse } from "next/og";

export const alt =
  "Good Fruit Creative — thoughtful websites for growing businesses";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "72px 78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f6f1e6",
          color: "#20251f",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: "720px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              marginBottom: "50px",
              display: "flex",
              color: "#174a32",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            good fruit creative
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-5px",
            }}
          >
            <span>Smart websites</span>
            <span style={{ color: "#174a32" }}>
              for growing businesses.
            </span>
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              fontSize: "24px",
              color: "#596159",
            }}
          >
            Smart design. Solid development.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "25px",
              width: "120px",
              height: "120px",
              borderRadius: "999px",
              background: "#e8785e",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "90px",
              width: "145px",
              height: "145px",
              borderRadius: "999px",
              background: "#a8ce63",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "65px",
              right: "10px",
              width: "110px",
              height: "110px",
              borderRadius: "999px",
              background: "#f2b84b",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "140px",
              left: "10px",
              width: "280px",
              height: "135px",
              display: "flex",
              borderRadius: "0 0 150px 150px",
              background: "#174a32",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "205px",
              left: "70px",
              width: "160px",
              height: "35px",
              display: "flex",
              borderBottom: "10px solid #f6f1e6",
              borderRadius: "0 0 100px 100px",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}