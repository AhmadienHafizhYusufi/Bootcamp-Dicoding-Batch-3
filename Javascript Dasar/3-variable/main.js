const id = 123;
let username = "Dicoding";

console.log(id);
console.log(username);

// const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya
// let, kita bisa menginisialisasi ulang nilainya.

let username1 = "Dicoding";
console.log("Sebelum diubah:", username1); // output: Sebelum diubah: Dicoding
username = "dicodingacademy";
console.log("Setelah diubah:", username1); // output: Setelah diubah: dicodingacademy

/**
 * contoh kode yang akan menghasilkan error karena memberikan nama variabel yang sudah terdefinisi sebelumnya.
 */
// Company data
const name = "Dicoding";
const legal = "LLC";

// Employee data
const name = "John"; // SyntaxError: Identifier 'name' has already been declared
const division = "IT";

/**
 * variabel yang berada dalam sebuah fungsi berbeda.
 */
function printCompanyInfo() {
  const name = "Dicoding"; // <- nama variabel sama
  const legal = "LLC";

  console.log("Company name:", name);
  console.log("Legal type:", legal);
}

function printEmployeeInfo() {
  const name = "John"; // <- nama variabel sama
  const division = "IT";

  console.log("Employee name:", name);
  console.log("Division:", division);
}

printCompanyInfo();
printEmployeeInfo();

// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 
// ..dan lain-lain

// nama variabel yang benar
const firstName1 = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';