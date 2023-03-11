/**
 *
 * Extracts the year, month, day, hour, minute, second, and millisecond from a Date object
 *
 * @param {Date} date The object from new Date()
 * @returns {Array} The array of [year, month, day, hour, minute, second, millisecond]
 *
 * @example
 * extract(new Date('2014-12-19T03:24:00')); // [2014, 12, 19, 02, 24, 00, 000]
 */

export const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);
