const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = []
  matrix.forEach(item => {
    const newArr = new Array(item.length).fill(0)
    arr.push(newArr)
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true) {
        arr[i][j] = arr[i][j] - 1;
        for(let a = i - 1; a <= i + 1; a++) {
          for(let b = j - 1; b <= j + 1; b++) {
            if(a >= 0 && a < matrix.length && b >= 0 && b < matrix[i].length) {
              arr[a][b] = arr[a][b] + 1;
            }
          }
        }
      }
    }
  }

  return arr;
}

module.exports = {
  minesweeper
};
