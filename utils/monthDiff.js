/**
 *
 * Calculate the number of months between two dates
 *
 * @param {Date} startDate The start date
 * @param {Date} endDate The end date
 * @returns {number} The number of months between the two dates
 *
 * @example
 * monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
 */
export const monthDiff = (startDate, endDate) =>
  Math.max(
    0,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth()
  );
