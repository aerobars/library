const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return (
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    )
  }
  console.log(this.info())
  theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}

function addBook() {
  // take params, create a book then store it in the array
}