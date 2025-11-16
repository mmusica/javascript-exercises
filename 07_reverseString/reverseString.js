/**
 *
 * @param {String} word
 */
const reverseString = function (word) {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    arr.push(word.charAt(i));
  }
  let reversed = "";
  const arrLength = arr.length;
  for (let i = 0; i <arrLength;  i++) {
    reversed += arr.pop();
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
