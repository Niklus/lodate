/**
 *
 * Format a date for the given locale
 *
 * @param {Date} date The object from new Date()
 * @param {string} locale The locale (en-US, pt-BR, etc)
 * @returns {string} The date formatted
 *
 * @example
 * formatLocale(new Date(), 'pt-BR'); // 11/03/2023
 */
export const formatLocale = (date, locale) =>
  new Intl.DateTimeFormat(locale).format(date);
