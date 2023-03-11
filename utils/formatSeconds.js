/**
 *
 * Convert seconds to hh:mm:ss format
 *
 * @param {number} seconds The number of seconds
 * @returns {string} The time formatted
 *
 * @example
 * formatSeconds(3600); // 01:00:00
 */
export const formatSeconds = (seconds) =>
  new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
