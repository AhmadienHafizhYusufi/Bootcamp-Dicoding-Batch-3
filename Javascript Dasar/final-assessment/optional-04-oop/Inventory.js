/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  // Properti item berupa array
  constructor() {
    this.items = [];
  }

  // Method addItem untuk menambahkan item baru diakhir array  dengan method push
  addItem(item) {
    this.items.push(item);
  }

  // Method removeItem untuk menghapus item berdasarkan nilai id nya
  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
    // this.items = this.items.filter((item) => item.id !== id);
  }

  // Method listItems untuk menampilkan informasi detail dari semua item yang ada di list
  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

// Mengekspor class inventory secara default
// Jangan hapus kode di bawah ini!
export default Inventory;
