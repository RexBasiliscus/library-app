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
        <img class="read" src="images/question_mark.png" alt="questionmark">
        <img class="delete" src="images/delete-icon.png" alt="delete-icon">
      </td>
    `;

    shelf.appendChild(row);

    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
  }

  buttonOptions(e) {
    if(e.target.classList.contains('delete')) {
      e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains('read')) {
      e.target.parentElement.innerHTML = `
      <img class="check" src="images/check-icon.png" alt="check-icon">
      <img class="delete" src="images/delete-icon.png" alt="delete-icon">`;
    }

    if(e.target.classList.contains('check')) {
      e.target.parentElement.innerHTML = `
      <img class="read" src="images/question_mark.png" alt="questionmark">
      <img class="delete" src="images/delete-icon.png" alt="delete-icon">`;
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

// book btns
document.querySelector("#bookshelf").addEventListener('click', (e) => {
  book.buttonOptions(e);
})


