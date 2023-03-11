/**
 *
 * Convert a date to YYYY-MM-DD format
 *
 * @param {Date} date The date object to format
 * @returns {string} The date formatted
 *
 * @example
 * formatYmd(new Date()); // 2023-03-11
 */
export const formatYmd = (date) => date.toISOString().slice(0, 10);
