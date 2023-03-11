/**
 * Get the number of days in given month
 *
 * @param {number} month The month number
 * @param {number} year The year number
 * @returns {number} The number of days in the month
 *
 * @example
 *
 * daysInMonth(2, 2023); // 28
 *
 */
export const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
