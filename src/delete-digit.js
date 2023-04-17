const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  const strNum = String(n)
  for (let num of strNum) {
    arr.push(+strNum.replace(num, ''))
  }
  return arr.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
