// konversi ke string
const number = 123;
const boolean0 = true;

const strNumber0 = String(number);
const strBoolean = boolean.toString();

console.log(strNumber0); // output: "123"
console.log(strBoolean0); // output: "true"

// konversi ke number
const strNumber = "123";
const strFloat = "3.14";
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14

// parseFloat() dan parseInt()
const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const cm1 = "20.55cm";
const px1 = "64.23px";

const floatFromCM = parseFloat(cm1);
const floatFromPX = parseFloat(px1);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

// konversi ke boolean
const number2 = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

// konversi implisit
const age = 20;
const message = "Umurku: " + age;

console.log(message); // output: Umurku: 20

const strNumber1 = "123";
const result = strNumber1 * 2;

console.log(result); // output: 246

const bool = true;
const result2 = 1 + bool;

console.log(result2); // output: 2
