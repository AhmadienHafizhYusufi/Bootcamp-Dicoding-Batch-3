function factorial(n) {
  if (n < 0) {
    throw new Error("Faktorial tidak mendefinisikan angka negatif");
  }

  if (n === 0) {
    return 1;
  }

  //return n * factorial(n - 1);
  return [...factorial(n - 1), n];
}

// Jangan hapus kode di bawah ini!
export default factorial;
