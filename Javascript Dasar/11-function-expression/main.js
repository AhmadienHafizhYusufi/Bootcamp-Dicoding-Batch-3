// function expression
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi:", temperatureInFahrenheit);

/* Output:
  Hasil konversi: 194
  */

/**
 * First-class citizen
 */
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/* Output:
  20
  33
  */
