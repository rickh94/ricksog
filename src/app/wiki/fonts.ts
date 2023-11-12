export const playfairRegular = fetch(
  new URL("./PlayfairDisplay-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export const playfairBold = fetch(
  new URL("./PlayfairDisplay-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
