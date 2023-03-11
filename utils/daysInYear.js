/**
 * Get the total number of days in a year
 *
 * @param {number} year The year number
 * @returns {number} The number of days in the year
 *
 * @example
 * daysInYear(2023); // 365
 */
export const daysInYear = (year) =>
  new Date(year, 1, 29).getDate() === 29 ? 366 : 365;
