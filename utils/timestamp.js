/**
 * Get the current timestamp in seconds
 * @returns {number} The current timestamp in seconds
 *
 * @example
 * timeStamp(); // 1620000000
 */
export const timeStamp = () => Math.floor(new Date().getTime() / 1000);
