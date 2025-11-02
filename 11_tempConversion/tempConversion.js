function round(value, precision = 1) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);
  return round(result);
};

const convertToFahrenheit = function (celsius) {
  let result = celsius * (9 / 5) + 32;
  return round(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
