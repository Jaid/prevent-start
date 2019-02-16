/** @module prevent-start */

import {isEqual, take, slice} from "lodash"

/**
 * Prevents a string or an array from having a specified start
 * @example
 * import preventStart from "prevent-start"
 * preventStart("abcd", "ab")
 * // "cd"
 * @example
 * import preventStart from "prevent-start"
 * preventStart(["ab", "c" "d"], "ab")
 * // ["c", "d"]
 * @function
 * @param {string|array} value String or array that should not start with specified value
 * @param {string|array} badStart The unwanted start value
 * @returns {*} Cleaned value
 */
export default (value, badStart) => {
  if (typeof value === "string") {
    if (value.startsWith(badStart)) {
      return value.substr(badStart.length)
    }
    return value
  }
  if (Array.isArray(value, badStart)) {
    if (!Array.isArray(badStart)) {
      badStart = [badStart]
    }
    if (isEqual(take(value, badStart.length), badStart)) {
      return slice(value, badStart.length)
    }
    return value
  }
  return value
}