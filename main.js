class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  addBookToLibrary(book) {
    const shelf = document.querySelector('#bookshelf');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>
        <i class="fa-sharp fa-solid fa-question"></i>
        <i class="fa-solid fa-trash"></i>
      </td>
      
    `;

    shelf.appendChild(row);
  }
}





// Caching the DOM
const bookInput = document.querySelector('.book-input');


// Events
bookInput.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;

  const book = new Book(bookTitle, bookAuthor, bookPages);
  book.addBookToLibrary(book);
  // console.log(book);
})


