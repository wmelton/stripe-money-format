/**
 * toStripeFormat(number: number): number
 * Default = USD Decimal Format
 */
const toStripeFormat = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return +formatter.format(number).replace(/[^\d-]/gim, "");
};

/**
 * toStripeCustomCurrency(currency: string, language: string , number: number): number
 * Theoretically supports all formats found at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
const toStripeCustomCurrency = (currency, language, number) => {
  const formatter = new Intl.NumberFormat(language, {
    style: "decimal",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return +formatter.format(number).replace(/[^\d-]/gim, "");
};

export default {toStripeFormat, toStripeCustomCurrency};
