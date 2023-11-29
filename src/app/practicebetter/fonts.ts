export const workSansSemibold = fetch(
  new URL("./WorkSans-Semibold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
