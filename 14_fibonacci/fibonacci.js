const fibonacci = function (n) {
  n = +n;
  if (n < 0) {
    return "OOPS"
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
