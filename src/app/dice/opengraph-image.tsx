import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { robotoBold, robotoRegular } from "./fonts";
import { Logo } from "./logo";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Dice Probability Calculator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <Wrapper background="linear-gradient(135deg, #a7f3d0 0%, #ffffff 100%)">
        <Logo />
        <div
          style={{
            fontSize: 96,
            color: "#1e293b",
          }}
        >
          Dice Probability Calculator
        </div>
        <div
          style={{
            color: "#059669",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 48,
            marginBottom: -64,
          }}
        >
          rollprobability.com
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Roboto",
          data: await robotoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: await robotoBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
