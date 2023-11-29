export const workSansSemibold = fetch(
  new URL("./WorkSans-SemiBold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
