/**
 *
 * Get tomorrows date
 *
 * @returns {Date} The date of tomorrow
 *
 * @example
 * tomorrow(); // 2023-03-12T17:52:58.226Z
 *
 */
export const tomorrow = () =>
  new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
