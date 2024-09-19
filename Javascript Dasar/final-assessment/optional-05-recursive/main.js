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

/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen  10 adalah:
 * [ 0 ]
 * [ 0, 1 ]
 * [ 0, 1, 1 ]
 * [ 0, 1, 1, 2 ]
 * [ 0, 1, 1, 2, 3 ]
 * [ 0, 1, 1, 2, 3, 5 ]
 * [ 0, 1, 1, 2, 3, 5, 8 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
