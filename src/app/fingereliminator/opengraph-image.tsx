import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { workSansSemibold } from "~/app/fingereliminator/fonts";
import { Logo } from "~/app/fingereliminator/logo";

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
      <Wrapper background="linear-gradient(135deg, #ca8b46 0%, #facc15 100%)">
        <Logo />
        <div
          style={{
            fontSize: 92,
            paddingBlock: 32,
            color: "#000000",
            marginBottom: -16,
          }}
        >
          Violin Finger Eliminator
        </div>
        <div
          style={{
            color: "#334155",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 32,
            marginBottom: -64,
          }}
        >
          finger-elminator.rickhenry.studio
        </div>
      </Wrapper>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Work Sans",
          data: await workSansSemibold,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
