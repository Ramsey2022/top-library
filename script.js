class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  id = myLibrary.length + 1;
  myLibrary.push(new Book(title, author, pages, read, id));
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);