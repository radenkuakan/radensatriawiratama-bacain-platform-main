feather.replace();

//fetching data 10 buku
const jsonUrl = "books.json";

async function getBooks() {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error("Gagal mengambil data buku");
    }
    const books = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayBooks(books) {
  const booksGrid = document.querySelector("#books-grid");
  booksGrid.innerHTML = "";

  books.forEach((book, index) => {
    const cardNumber = index + 1;
    booksGrid.innerHTML += `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}" />
        <p>${book.title}</p>
        <div class="badge">${cardNumber}</div>
      </div>
    `;
  });
}

//fungsi fetch pada saat halaman dimuatnya
getBooks();