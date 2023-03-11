/**
 *
 * Initialize the current date but set time to midnight
 *
 * @returns {Date} The current date with time set to midnight
 *
 * @example
 * midnightOfToday(); // 2023-03-10T23:00:00.000Z
 */
export const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
