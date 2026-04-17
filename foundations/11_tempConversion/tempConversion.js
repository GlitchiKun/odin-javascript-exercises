const convertToCelsius = function (fahrenheit) {
  return Number(((fahrenheit - 32) * (5.0 / 9.0)).toFixed(1));
};

const convertToFahrenheit = function (celcius) {
  return Number((celcius * (9.0 / 5.0) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
