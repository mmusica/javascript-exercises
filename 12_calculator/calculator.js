const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

/**
 *
 * @param {Array} arr
 */
const sum = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, num) => sum * num, 1);
};

const power = function (base, pow) {
  return Math.pow(base, pow);
};

const factorial = function (number) {
  let sum = 1;
  for (let i = 2; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
