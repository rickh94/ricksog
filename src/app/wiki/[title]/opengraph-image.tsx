import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { playfairRegular, playfairBold } from "../fonts";
import { Logo } from "../logo";

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
export default async function Image({ params }: { params: { title: string } }) {
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
          {params.title}
        </div>
        <div
          style={{
            fontSize: 32,
            paddingBlock: 32,
            color: "#64748b",
            marginBottom: -16,
          }}
        >
          Violin Teaching Wiki
        </div>
        <div
          style={{
            color: "#0ea5e9",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 48,
            marginBottom: -64,
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
