const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!")

  let result = []

    arr.forEach((item, i) => {
      if (item === '--double-prev') {
        result.push(result[i-1])
      } else if (item === '--double-next') {
        result.push(arr[i+1])
      } else if (item === '--discard-prev') {
        result.push(result[i-1] = undefined);
      } else if (item === '--discard-next') {
        result.push(undefined);
      } else if (arr[i-1] === '--discard-next') {
        result.push(undefined);
      } else result.push(item);
    });
  

  return result.filter(elem => typeof elem !== 'undefined');
}

module.exports = {
  transform
};
