/**
 *
 * @param {Array} arr
 * @param {any} elementToRemove
 */
const removeFromArray = function (arr, ...elementsToRemove) {
  for (let element of elementsToRemove) {
    while (arr.includes(element)) {
      const indexToRemove = arr.indexOf(element);
      if (indexToRemove != -1) {
        arr.splice(indexToRemove, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
