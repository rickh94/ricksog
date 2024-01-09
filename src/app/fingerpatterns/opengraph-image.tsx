import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { libreBaskervilleBold } from "~/app/fingerpatterns/fonts";
import { Logo } from "~/app/fingerpatterns/logo";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Violin Fingering";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <Wrapper background="linear-gradient(135deg, #f5d0fe 0%, #fdf4ff 100%)">
        <Logo />
        <div
          style={{
            fontSize: 64,
            marginTop: 32,
            paddingBlock: 48,
            color: "#000000",
            marginBottom: -16,
          }}
        >
          Violin Finger Patterns
        </div>
        <div
          style={{
            color: "#334155",
            textAlign: "center",
            fontSize: 18,
            paddingTop: 32,
            marginBottom: -64,
          }}
        >
          violinfingering.com
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskervilled",
          data: await libreBaskervilleBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
