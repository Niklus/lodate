/**
 * Get the day of the year from a date
 *
 * @param {Date} date The object from new Date()
 * @returns {number} The day number
 *
 * @example
 *
 * dayOfYear(new Date(2020, 4, 16)); // 136
 *
 */
export const dayOfYear = (date) =>
  Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
