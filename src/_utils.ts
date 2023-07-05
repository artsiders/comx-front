export function textToSlug(str: string): string {
  return str.replace(/\s+/g, "-");
}
export function slugToText(str: string): string {
  return str.replace(/-/g, " ");
}
export function removeTrailingSlash(str: string): string {
  if (str.charAt(str.length - 1) === "/") {
    return str.slice(0, -1);
  }
  return str;
}
