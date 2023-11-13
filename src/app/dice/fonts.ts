export const robotoRegular = fetch(
  new URL("./Roboto-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export const robotoBold = fetch(
  new URL("./Roboto-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
