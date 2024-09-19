// membuat array
const users = new Array();
console.log(users);

// dengan array.from
const foo = Array.from("foo");
console.log(foo); // Output: ['f', 'o', 'o']

// array from untuk menyalin array lain
const users1 = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(users1);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// dengan array literal
const fruits = ["apple", "banana", "cherry", "", "grape"];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

/**
 * Mengakses element array
 */
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

/**
 * Manipulasi nilai array
 */
// dengan indexing
const myArray1 = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray1); // Output: [1, 10, 3, 4, 5]

// dengan push
const myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
console.log(myArray2); // Output: [1, 2, 3, 4, 5, 6]

/**
 * Menghapus element dan data array
 */
// dengan delete
const myArray3 = ["Android", "Data Science", "Web"];
delete myArray3[1];

console.log(myArray3); // Output: ['Android', <1 empty item>, 'Web']

// dengan splice
const myArray4 = ["Android", "Data Science", "Web"];
myArray4.splice(1, 1);
console.log(myArray4); // Output: ['Android', 'Web']

// dengan shift dan pop
const myArray5 = ["Android", "Data Science", "Web"];
myArray5.shift();
console.log(myArray5); // Output: ['Data Science', 'Web']

const myArray6 = ["Android", "Data Science", "Web"];
myArray6.pop();
console.log(myArray6); // Output: ["Android", "Data Science"]

/**
 * Array destructuring
 */
const introduction = ["Hello", "Arsy"];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

/**
 * Array method
 */
// reverse
const myArray7 = ["Android", "Data Science", "Web"];
myArray7.reverse();
console.log(myArray7); // Output: [ 'Web', 'Data Science', 'Android' ]

// sort
const myArray8 = ["Web", "Android", "Data Science"];
myArray8.sort();
console.log(myArray8); // Output: [ 'Android', 'Data Science', 'Web' ]
