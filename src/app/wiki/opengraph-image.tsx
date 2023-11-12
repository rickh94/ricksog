import { ImageResponse } from "next/og";
import { Wrapper } from "../_components/wrapper";
import { Logo } from "./logo";
import { playfairBold, playfairRegular } from "./fonts";

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
      <Wrapper background="linear-gradient(135deg, #ecfeff 0%, #ffffff 100%)">
        <Logo />
        <div
          style={{
            fontSize: 96,
            color: "#1e293b",
          }}
        >
          Violin Teaching Wiki
        </div>
        <div
          style={{
            color: "#0ea5e9",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 32,
            marginBottom: -48,
          }}
        >
          wiki.rickhenry.studio
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair",
          data: await playfairRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Playfair",
          data: await playfairBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
