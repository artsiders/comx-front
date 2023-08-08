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

export function discoutPercentage(price: number, priceAfterDiscount: number) {
  const reduction = priceAfterDiscount - price;
  const percentage = (reduction / priceAfterDiscount) * 100;
  return percentage.toFixed(2);
}

export function formatPrixFCFA(prix: number | string): string {
  const prixFormate = prix.toLocaleString("fr-FR", {
    style: "currency",
    currency: "XOF",
  });
  return prixFormate;
}
