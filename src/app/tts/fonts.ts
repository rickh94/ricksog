// spots world font
export const sportsWorld = fetch(
  new URL("./SportsWorld-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

// roboto font
export const robotoRegular = fetch(
  new URL("./Roboto-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export const sevenSegment = fetch(
  new URL("./7segment.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
