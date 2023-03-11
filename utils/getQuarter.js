/**
 *
 * Get the current quarter of a date
 *
 * @param {Date} d The date object to get the quarter of (default: now)
 * @returns {number} The quarter
 *
 * @example
 * getQuarter(new Date()); // 1
 */
export const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
