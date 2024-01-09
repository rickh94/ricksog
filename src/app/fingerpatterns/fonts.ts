export const libreBaskervilleBold = fetch(
  new URL("./LibreBaskerville-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
