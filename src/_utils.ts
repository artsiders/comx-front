export function textToSlug(str: string): string {
  return str.replace(/\s+/g, "-");
}
export function slugToText(str: string): string {
  return str.replace(/-/g, " ");
}
