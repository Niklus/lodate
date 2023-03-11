/**
 *
 * Get the hours and minutes from the decimal time
 *
 * @param {number} value The decimal time to convert
 * @returns {number[]} The hours and minutes [hours, minutes]
 *
 * @example
 * getHoursAndMinutes(4.5); // [4, 30]
 * getHoursAndMinutes(7.89); // [7, 53]
 */

export const getHoursAndMinutes = (value) => [
  Math.floor(value),
  Math.floor((value * 60) % 60),
];
