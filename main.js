class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  addBookToLibrary() {
    const shelf = document.querySelector('#bookshelf');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td class="first-column">${book.title}</td>
      <td class="second-column">${book.author}</td>
      <td class="third-column">${book.pages}</td>
      <td class="fourth-column">
        <i class="fa-sharp fa-solid fa-question"></i>
        <i class="fa-solid fa-trash delete"></i>
      </td>
    `;

    shelf.appendChild(row);

    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
  }

  deleteBook(e) {
    if(e.target.classList.contains('delete')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

let book;

// Submit info 
document.querySelector(".book-input").addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  book = new Book(title, author, pages);
  book.addBookToLibrary(book);
})

// Delete book btn
document.querySelector("#bookshelf").addEventListener('click', (e) => {
  book.deleteBook(e);
})


