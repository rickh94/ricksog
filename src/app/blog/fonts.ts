export const cardo = fetch(
  new URL("./Cardo-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
