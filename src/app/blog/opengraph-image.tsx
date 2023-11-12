import { ImageResponse } from "next/og";
import { Wrapper } from "../_components/wrapper";
import { Logo } from "./logo";
import { cardo } from "./fonts";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Violin Teaching Wiki";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <Wrapper background="linear-gradient(135deg, #f5d0fe 0%, #ffffff 100%)">
        <Logo />
        <div
          style={{
            fontSize: 96,
            color: "#3f3f46",
          }}
        >
          Rick’s Music Blog
        </div>
        <div
          style={{
            color: "#a21caf",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 32,
            marginBottom: -48,
          }}
        >
          rickhenry.studio
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cardo",
          data: await cardo,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
