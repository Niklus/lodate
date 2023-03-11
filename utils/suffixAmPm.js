/**
 *
 * Add am / pm suffix to an hour
 *
 * @param {number} h The hour number between 0 and 23
 * @returns {string} The hour with am / pm suffix
 *
 * @example
 * suffixAmPm(0); // '12am'
 * suffixAmPm(5); // '5am'
 * suffixAmPm(16) // '4pm'
 */
export const suffixAmPm = (h) =>
  `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "am" : "pm"}`;
