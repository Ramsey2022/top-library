class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

const newBookButton = document.getElementById("new-book-button");
const newBookModal = document.getElementById("new-book-modal");
const newBookModalClose = document.getElementsByClassName("new-book-button-close")[0];
const newBookForm = document.getElementById("new-book");
const mainContent = document.getElementById("main-content");
const checkBox = document.getElementById("read");

newBookButton.addEventListener("click", toggleNewBookForm);
newBookModalClose.addEventListener("click", toggleNewBookForm);

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  id = myLibrary.length + 1;
  myLibrary.push(new Book(title, author, pages, read, id));
}

function resetNewBookForm() {
  newBookForm.reset();
}

function addReadButtons() {
  const readButtons = document.getElementsByClassName("book-button-read");
  for (let i = 0; i < readButtons.length; i++) {
    readButtons[i].addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("read");
      if (myLibrary.read == true) {
        myLibrary[i].read = false;
      } else {
        myLibrary[i].read = true;
      }
    });
  }
}

function addDeleteButtons() {
  const deleteButtons = document.getElementsByClassName("book-button-delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (e) => {
      book = e.target.parentNode;
      myLibrary.splice(myLibrary.indexOf(book.id), 1);
      book.remove();
    });
  }
}

function toggleNewBookForm() {
  newBookModal.classList.toggle("hidden");
}

function displayBooks() {
  mainContent.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    if (book.read == true) {
      mainContent.insertAdjacentHTML(
        "afterbegin",
        `<div class='book read' id='${book.id}'><div class='book-title'>${book.title} </div><div class='book-author'>${book.author}</div><div class='book-pages'>${book.pages} pages</div><button class='book-button-read'>Read?</button><button class='book-button-delete'>X</button></></div>`
      );
    } else {
      mainContent.insertAdjacentHTML(
        "afterbegin",
        `<div class='book' id='${book.id}'><div class='book-title'>${book.title} </div><div class='book-author'>${book.author}</div><div class='book-pages'>${book.pages} pages</div><button class='book-button-read'>Read?</button><button class='book-button-delete'>X</button></></div>`
      );
    }
  }
  addDeleteButtons();
  addReadButtons();
}

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = newBookForm.elements["title"].value;
  const author = newBookForm.elements["author"].value;
  const pages = newBookForm.elements["pages"].value;
  const read = checkBox.checked;

  addBookToLibrary(title, author, pages, read);
  resetNewBookForm();
  toggleNewBookForm();
  displayBooks();
});

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
displayBooks();