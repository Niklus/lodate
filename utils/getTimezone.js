/**
 *
 * Get the timezone string
 *
 * @returns {string} The timezone string
 *
 * @example
 * getTimezone(); // "Europe/Stockholm"
 */
export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;
