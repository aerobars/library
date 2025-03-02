const Book1 = new Book("The Hobbit", "JRR Tolkein", "1", "read");
const Book2 = new Book("test", "test", "test", "test");

const myLibrary = [Book1, Book2];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return (
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    )
  }
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook)
}

function showLib() {
  myLibrary.forEach((book) => console.log(book.info())) 
}

const test = document.querySelector("button")
test.addEventListener("click", showLib)