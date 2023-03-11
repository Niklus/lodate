/**
 *
 * Calculate the number of difference days between two dates
 *
 * @param {Date} date The object from new Date()
 * @param {Date} otherDate The object from new Date()
 * @returns {number} The number of difference between dates
 *
 * @example
 * diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839
 *
 */

export const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
