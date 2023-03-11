/**
 *
 * Get yesterdays date
 *
 * @returns {Date} The date of yesterday
 *
 * @example
 * yesterday(); // 2023-03-10T17:55:25.205Z
 */
export const yesterday = () =>
  new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
