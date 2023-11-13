import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { sportsWorld, sevenSegment, robotoRegular } from "./fonts";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Violin Teaching Wiki";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <Wrapper background="#1d4ed8">
        <div
          style={{
            fontSize: 288,
            color: "#ffffff",
            fontFamily: "Seven Segment",
            paddingBottom: 64,
            letterSpacing: -12,
            marginTop: -32,
            marginLeft: -96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div>11</div>
          <div>-</div>
          <div>9</div>
        </div>
        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontFamily: "Sports World",
          }}
        >
          Table Tennis Scoreboard
        </div>
        <div
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 48,
            marginBottom: -64,
            fontFamily: "Roboto",
          }}
        >
          tabletennisscoreboard.com
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Sports World",
          data: await sportsWorld,
          style: "normal",
          weight: 400,
        },
        {
          name: "Seven Segment",
          data: await sevenSegment,
          style: "normal",
        },
        {
          name: "Roboto",
          data: await robotoRegular,
          style: "normal",
        },
      ],
    },
  );
}
