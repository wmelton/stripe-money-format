/**
 * toStripeFormat(number: number): number
 * Default = USD Decimal Format
 */
const toStripeFormat = (amount) => {
  if (typeof amount != "number") throw new Error("amount must be of type number");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return +formatter.format(amount).replace(/[^\d-]/gim, "");
};

/**
 * toStripeCustomCurrency(currency: string, language: string , amount: number): number
 * Theoretically supports all formats found at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
const toStripeCustomCurrency = (currency, language, amount) => {
  if (typeof amount != "number") throw new Error("amount must be of type number");

  const formatter = new Intl.NumberFormat(language, {
    style: "decimal",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return +formatter.format(amount).replace(/[^\d-]/gim, "");
};

export default {toStripeFormat, toStripeCustomCurrency};
