import { ImageResponse } from "next/og";
import { Wrapper } from "~/app/_components/wrapper";
import { Logo } from "../../logo";
import { cardo } from "../../fonts";
import { calculateFontSize, maybeTruncate } from "~/app/util";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Rick’s Music Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// TODO: add logic for picking smaller font sizes and truncating text

export default async function Image({ params }: { params: { page: string } }) {
  let titleText = `${params.page}`;
  const fontSize = calculateFontSize(titleText);
  titleText = maybeTruncate(titleText);
  return new ImageResponse(
    (
      <Wrapper background="linear-gradient(135deg, #f5d0fe 0%, #ffffff 100%)">
        <Logo />
        <div
          style={{
            fontSize,
            color: "#3f3f46",
            display: "flex",
          }}
        >
          {titleText}
        </div>
        <div
          style={{
            fontSize: 32,
            paddingBlock: 32,
            color: "#52525b",
            marginBottom: -16,
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
