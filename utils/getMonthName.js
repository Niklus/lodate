/**
 *
 * Get the month name of a date
 *
 * @param {Date} date The date object to get the month name of
 * @returns {string} The month name
 *
 * @example
 * getMonthName(new Date()); // "March"
 */
export const getMonthName = (date) =>
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    " November",
    "December",
  ][date.getMonth()];
