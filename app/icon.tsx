import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          position: "relative",
          display: "flex",
          background: "#f6f1e6",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "12px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "#e8785e",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "22px",
            width: "27px",
            height: "27px",
            borderRadius: "50%",
            background: "#a8ce63",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "19px",
            right: "7px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#f2b84b",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "8px",
            width: "48px",
            height: "25px",
            display: "flex",
            background: "#174a32",
            borderRadius: "0 0 28px 28px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "42px",
            left: "19px",
            width: "26px",
            height: "8px",
            display: "flex",
            borderBottom: "3px solid #f6f1e6",
            borderRadius: "0 0 20px 20px",
          }}
        />
      </div>
    ),
    size,
  );
}