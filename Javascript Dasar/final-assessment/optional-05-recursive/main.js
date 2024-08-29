import factorial from "./factorial.js";
import fibonacci from "./fibonacci.js";

const numberForFactorial = 5;
console.log(
  `Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`
);

const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);

const fibSequence = fibonacci(numberForFibonacci);
for (let i = 0; i < fibSequence.length; i++) {
  console.log(fibSequence.slice(0, i + 1));
}
