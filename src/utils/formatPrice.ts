/**
 * Narxni o'zbek so'mi formatida ko'rsatish (masalan: "1 250 000 so'm")
 */
export function formatPrice(price: number): string {
  if (typeof price !== 'number' || isNaN(price)) return "0 so'm";
  const formatted = Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${formatted} so'm`;
}

/**
 * Bo'lib to'lash (12 oyga) hisoblash (masalan: "oyiga 104 000 so'mdan")
 */
export function formatInstallment(price: number, months: number = 12): string {
  const perMonth = Math.ceil(price / months);
  return `oyiga ${formatPrice(perMonth).replace(" so'm", '')} so'mdan`;
}

/**
 * Chegirma foizini hisoblash
 */
export function calculateDiscountPercent(oldPrice: number, price: number): number {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
