export const montserrat = fetch(
  new URL("./Montserrat.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
