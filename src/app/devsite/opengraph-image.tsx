import { ImageResponse } from "next/og";
import { Wrapper } from "../_components/wrapper";
import { Logo } from "./logo";
import { montserrat } from "./fonts";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Rick Henry Development";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <Wrapper background="linear-gradient(135deg, #3b82f6 0%, #bfdbfe 100%)">
        <Logo />
        <div
          style={{
            color: "#1e3a8a",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 32,
            marginBottom: -48,
          }}
        >
          rickhenry.dev
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: await montserrat,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
