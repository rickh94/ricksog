export function calculateFontSize(text: string): number {
  if (text.length > 30) {
    return 48;
  }
  if (text.length > 20) {
    return 64;
  }
  return 80;
}
export function maybeTruncate(text: string): string {
  if (text.length > 50) {
    return text.substring(0, 50) + "…";
  }
  return text;
}
