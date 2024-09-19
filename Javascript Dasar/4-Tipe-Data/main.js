"Ini merupakan contoh string di JavaScript";
"Ini merupakan contoh string di JavaScript";
`Ini merupakan contoh string di JavaScript`;

("Baris pertama.\nBaris kedua.");
("Baris pertama.\nBaris kedua.");
`Baris pertama.
Baris kedua.`;

// Menggunakan template literals
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

40;
3.14;
5;
3.333;

const result = 50 / 0;
console.log(result); // output: Infinity

const result1 = Number("Dicoding");
console.log(result1); // output: NaN

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)

// Null menunjukan nilai yang tidak ada
let message = null;

console.log(message); // output: null

// Undefined mendeklarasikan variable yang tidak memiliki nilai inisialisasi
let message1;

console.log(message1); // output: undefined

let message2 = undefined;

console.log(message2); // output: undefined

const name1 = { first: "Dicoding", last: null };
const name2 = { first: "Dicoding", last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}
