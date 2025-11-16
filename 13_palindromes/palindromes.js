/**
 *
 * @param {String} string
 */
function clearString(string) {
  string = string.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  string = string.replaceAll(" ", "");
  return string;
}

const palindromes = function (word) {
  let cleared = clearString(word);
  console.log(cleared);
  let arr = [];
  for (let char of cleared) {
    arr.push(char);
  }
  let reversed = [...arr].reverse();

  console.log(`reverse: ${reversed}`);
  console.log(`arr: ${arr}`);
  for (let i = 0; i < reversed.length; i++) {
    if (arr[i].toLocaleLowerCase() !== reversed[i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

module.exports = palindromes;
