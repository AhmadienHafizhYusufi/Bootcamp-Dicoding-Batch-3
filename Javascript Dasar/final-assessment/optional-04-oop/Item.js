/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
  // Membuat objek dengan properti id,name,quantity, dan price
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /*constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }*/

  // Methode updateDetails untuk memperbarui informasi item sesuai properti name, quantity, dan price
  updateDetails(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Methode displayDetails untuk mengembalikan informasi tentang item dengan format string
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// Mengekspor class item secara default
// Jangan hapus kode di bawah ini!
export default Item;
