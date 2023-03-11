/**
 *
 * Get the weekday of a date
 *
 * @param {Date} date The date object to get the weekday of (default: now)
 * @returns {string} The weekday
 *
 * @example
 * getWeekday(new Date()); // "Monday"
 * getWeekday(new Date("December 17, 1995 03:24:00")); // "Sunday"
 */
export const getWeekday = (date = new Date()) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];
