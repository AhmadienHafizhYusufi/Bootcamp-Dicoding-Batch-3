/**
 * Membuat map
 */
const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap);

/**
 * Menyimpan nilai di map
 */
// dengan set
const map = new Map();
map.set("name", "aras");
console.log(map); // Map(1) { 'name' => 'aras' }

map.set(1, "number one");
console.log(map); // Map(1) { 1 => 'number one' }

/**
 * Mengakses nilai di map
 */
// dengan get
console.log(map.get("name")); // Output: aras

/**
 * Mengahpus nilai di map
 */
// dengan delete
map.set("name", "aras");
map.set("last name", "opraza");
map.delete("last name");
console.log(map); // Map(1) { 'name' => 'aras' }
