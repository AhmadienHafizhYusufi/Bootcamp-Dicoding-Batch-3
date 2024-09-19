// membuat object dengan object literals
const user = {};
const products = { name: "Sepatu", price: 230000 };

const user1 = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

// mengakses properti object
const user2 = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

// menggunakan dot
console.log(user2.name); // Output: Dicoding
// menggunakan square bracket
console.log(user2["last name"]); // Output: Indonesia

// mengakses dengan object destructuring
const { name, lastName } = user2;
console.log(name, lastName); // Output: Dicoding Indonesia

const user3 = {
  id: 24,
  email: "aras@dicoding.com",
  name: "Arsy",
  nickname: "Aras",
  username: "aras123",
  password: "secret",
};

const { id, email } = user3;

/**
 * Mengubah nilai di properti object
 */
const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

/**
 * Mengahpus properti di object
 */
const user4 = {
  name: "Dicoding",
  "last name": "Indonesia",
  age: 9,
};

delete user4.age;
console.log(user4); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }
delete user["age"];
console.log(user); // Output: { name: 'Dicoding', lastName: 'Indonesia' }
