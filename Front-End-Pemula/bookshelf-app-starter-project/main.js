// Pilih elemen checbox dan span dalam tombol
const checkbox = document.getElementById("bookFormIsComplete");
const button = document.getElementById("bookFormSubmit");
const submitButtonSpan = document.querySelector("#bookFormSubmit span");

// Fungsi event listener untuk mengubah teks berdasarkan status checkbox
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    submitButtonSpan.textContent = "Finish"; // Jika chckbox dicentang
  } else {
    submitButtonSpan.textContent = "Reading"; // Jika checkbox tidak dicentang
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Seleksi elemen DOM
  const bookForm = document.getElementById("bookForm");
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");
  const searchForm = document.getElementById("searchBook");
  const searchResultsContainer = document.getElementById("searchResults");

  // Elemen form edit
  const editBookFormContainer = document.getElementById(
    "editBookFormContainer"
  );
  const editBookForm = document.getElementById("editBookForm");
  let editedBookId = null; // ID buku yang sedang diedit

  // Muat data buku dari Local Storage
  loadBooksFromLocalStorage();

  // Event listener untuk form submit (tambah buku baru)
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai input dari pengguna
    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = parseInt(document.getElementById("bookFormYear").value); // Konversi ke number
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    // Validasi sederhana untuk memastikan input tidak kosong
    if (title && author && !isNaN(year)) {
      if (editedBookId) {
        // Jika sedang mengedit buku, perbarui data buku yang ada
        updateBook(editedBookId, { title, author, year, isComplete });
        editedBookId = null; // Reset ID setelah selesai mengedit
      } else {
        // Buat objek buku baru
        const newBook = {
          id: Date.now().toString(), // Gunakan timestamp sebagai ID unik
          title,
          author,
          year,
          isComplete,
        };

        // Simpan buku baru ke Local Storage
        saveBookToLocalStorage(newBook);

        // Tambahkan buku baru ke daftar
        addBookToList(newBook);
      }

      // Reset form setelah submit
      bookForm.reset();
    } else {
      alert("Silakan isi semua data buku (Title, Author, Year).");
    }
  });

  // Event listener untuk form edit submit (simpan perubahan)
  editBookForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai input dari pengguna
    const title = document.getElementById("editBookFormTitle").value;
    const author = document.getElementById("editBookFormAuthor").value;
    const year = document.getElementById("editBookFormYear").value;
    const isComplete = document.getElementById(
      "editBookFormIsComplete"
    ).checked;

    // Validasi sederhana
    if (title && author && year) {
      updateBook(editedBookId, { title, author, year, isComplete });

      // Sembunyikan form edit setelah menyimpan perubahan
      editBookFormContainer.style.display = "none";
    }
  });

  // Event listener untuk tombol batal edit
  document.getElementById("cancelEdit").addEventListener("click", function () {
    editBookFormContainer.style.display = "none"; // Sembunyikan form edit
  });

  // Event listener untuk form pencarian buku
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit default

    // Ambil nilai input pencarian
    const searchTitle = document
      .getElementById("searchBookTitle")
      .value.toLowerCase()
      .trim();

    // Bersihkan hasil pencarian sebelumnya
    searchResultsContainer.innerHTML = "";

    // Cari buku berdasarkan judul
    if (searchTitle) {
      const books = getBooksFromLocalStorage();

      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTitle)
      );

      // Tampilkan hasil pencarian
      if (filteredBooks.length > 0) {
        filteredBooks.forEach((book) => {
          const bookElement = document.createElement("div");
          bookElement.setAttribute("data-bookid", book.id);
          bookElement.setAttribute("data-testid", "searchResultItem");

          const bookTitle = document.createElement("h3");
          bookTitle.textContent = book.title;
          bookElement.appendChild(bookTitle);

          const bookAuthor = document.createElement("p");
          bookAuthor.textContent = `Author: ${book.author}`;
          bookElement.appendChild(bookAuthor);

          const bookYear = document.createElement("p");
          bookYear.textContent = `Year: ${book.year}`;
          bookElement.appendChild(bookYear);

          searchResultsContainer.appendChild(bookElement);
        });
      } else {
        const noResultElement = document.createElement("p");
        noResultElement.textContent = "Book not found.";
        searchResultsContainer.appendChild(noResultElement);
      }
    }
  });

  // Fungsi untuk menambah buku ke daftar berdasarkan objek buku
  function addBookToList(book) {
    const newBookElement = document.createElement("div");
    newBookElement.setAttribute("data-bookid", book.id);
    newBookElement.setAttribute("data-testid", "bookItem");

    const bookTitle = document.createElement("h3");
    bookTitle.setAttribute("data-testid", "bookItemTitle");
    bookTitle.textContent = book.title;
    newBookElement.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("data-testid", "bookItemAuthor");
    bookAuthor.textContent = `Author: ${book.author}`;
    newBookElement.appendChild(bookAuthor);

    const bookYear = document.createElement("p");
    bookYear.setAttribute("data-testid", "bookItemYear");
    bookYear.textContent = `Year: ${book.year}`;
    newBookElement.appendChild(bookYear);

    const buttonContainer = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
    completeButton.textContent = book.isComplete ? "Incomplete" : "Complete";
    buttonContainer.appendChild(completeButton);

    const editButton = document.createElement("button");
    editButton.setAttribute("data-testid", "bookItemEditButton");
    editButton.textContent = "Edit";
    buttonContainer.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
    deleteButton.textContent = "Delete";
    buttonContainer.appendChild(deleteButton);

    newBookElement.appendChild(buttonContainer);

    // Event Listener untuk tombol "Selesai dibaca / Belum selesai dibaca"
    completeButton.addEventListener("click", function () {
      book.isComplete = !book.isComplete; // Toggle status
      saveBooksToLocalStorage(); // Update Local Storage
      newBookElement.remove(); // Hapus elemen dari DOM
      addBookToList(book); // Tambahkan elemen ke daftar yang sesuai
    });

    // Event Listener untuk tombol "Edit Buku"
    editButton.addEventListener("click", function () {
      fillFormForEdit(book); // Isi form untuk edit
    });

    // Event Listener untuk tombol "Hapus Buku"
    deleteButton.addEventListener("click", function () {
      removeBookFromLocalStorage(book.id); // Hapus dari Local Storage
      newBookElement.remove(); // Hapus buku dari daftar
    });

    if (book.isComplete) {
      completeBookList.appendChild(newBookElement);
    } else {
      incompleteBookList.appendChild(newBookElement);
    }
  }

  // Fungsi untuk mengisi form edit dengan data buku yang dipilih
  function fillFormForEdit(book) {
    // Tampilkan form edit
    editBookFormContainer.style.display = "block";

    // Isi form dengan data buku yang sedang diedit
    document.getElementById("editBookFormTitle").value = book.title;
    document.getElementById("editBookFormAuthor").value = book.author;
    document.getElementById("editBookFormYear").value = book.year;
    document.getElementById("editBookFormIsComplete").checked = book.isComplete;

    // Set ID buku yang sedang diedit
    editedBookId = book.id;
  }

  // Fungsi untuk memperbarui buku yang ada
  function updateBook(bookId, updatedData) {
    const books = getBooksFromLocalStorage();
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
      // Perbarui data buku
      books[bookIndex] = { ...books[bookIndex], ...updatedData };
      localStorage.setItem("books", JSON.stringify(books));

      // Refresh daftar buku
      loadBooksFromLocalStorage();
    }
  }

  // Fungsi untuk memuat buku dari Local Storage saat halaman dimuat
  function loadBooksFromLocalStorage() {
    incompleteBookList.innerHTML = ""; // Kosongkan daftar buku yang belum selesai dibaca
    completeBookList.innerHTML = ""; // Kosongkan daftar buku yang sudah selesai dibaca
    const books = getBooksFromLocalStorage();
    books.forEach((book) => {
      addBookToList(book);
    });
  }

  // Fungsi untuk menyimpan buku ke Local Storage
  function saveBookToLocalStorage(book) {
    const books = getBooksFromLocalStorage();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // Fungsi untuk menghapus buku dari Local Storage
  function removeBookFromLocalStorage(bookId) {
    const books = getBooksFromLocalStorage().filter(
      (book) => book.id !== bookId
    );
    localStorage.setItem("books", JSON.stringify(books));
  }

  // Fungsi untuk mendapatkan semua buku dari Local Storage
  function getBooksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("books")) || [];
  }

  // Fungsi untuk menyimpan semua buku ke Local Storage
  function saveBooksToLocalStorage() {
    const books = [];
    document.querySelectorAll("[data-bookid]").forEach((bookElement) => {
      const book = {
        id: bookElement.getAttribute("data-bookid"),
        title: bookElement.querySelector('[data-testid="bookItemTitle"]')
          .textContent,
        author: bookElement
          .querySelector('[data-testid="bookItemAuthor"]')
          .textContent.replace("Author: ", ""),
        year: bookElement
          .querySelector('[data-testid="bookItemYear"]')
          .textContent.replace("Year: ", ""),
        isComplete: completeBookList.contains(bookElement),
      };
      books.push(book);
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
});
