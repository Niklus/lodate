// Get the day of the year from a date
// `date` is a Date object
export const dayOfYear = (date) =>
  Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );

// Get the month name of a date
// `date` is a Date object
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

// Get the timezone string
export const getTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

// Get the total number of days in a year
export const numberOfDays = (year) =>
  new Date(year, 1, 29).getDate() === 29 ? 366 : 365;

// Get the weekday of a date
// `date` is a Date object
export const getWeekday = (date) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];

// Get yesterdays date
export const yesterday = () =>
  new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

// Sort Date Descending
// `arr` is an array of `Date` items
export const sortDateDesc = (arr) =>
  arr.sort((a, b) => a.getTime() > b.getTime());

// Sort Date Ascending
// `arr` is an array of `Date` items
export const sortDateAsc = (arr) =>
  arr.sort((a, b) => a.getTime() < b.getTime());

// Convert seconds to hh:mm:ss format
// `s` is number of seconds
export const formatSeconds = (s) =>
  new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

// Extract is an array of [year, month, day, hour, minute, second, millisecond]
// `date` is a `Date` object
export const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);

// Get the current timestamp in seconds
const timeStamp = () => Math.floor(new Date().getTime() / 1000);
