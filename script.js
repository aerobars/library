//Book1 and Book2 for testing only
//const Book1 = new Book("The Hobbit", "JRR Tolkein", "1", "read");
//const Book2 = new Book("test", "test", "test", "test");

const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.getElementById("new-btn");
const submitBookBtn = document.getElementById("submit-btn");
const bookInput = document.getElementById("input-dialog");
const viewBooks = document.getElementById("show-books");
const clearBooksBtn = document.getElementById("clear-books");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = read;
  //this.info = () => {
    //return (
      //`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    //)
  //}
}


newBookBtn.addEventListener("click", openDialog);

function openDialog() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

clearBooksBtn.addEventListener("click", clearBooks);

function clearBooks() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
submitBookBtn.addEventListener("click",(e) => {
  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const pageTotal = document.getElementById("page-total");
  const readStatus = document.querySelector("input[name=read-status]:checked");
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, pageTotal.value, readStatus.value);
  bookInput.close();
})

// take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, read) {
  const addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
}

viewBooks.addEventListener("click", showBooks);

function showBooks() {
  myLibrary.forEach((book, index) => {

  const bookDisplay = document.createElement("div");
  bookDisplay.classList.add("card");
  bookDisplay.dataset.bookId = index;
  container.appendChild(bookDisplay)

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = book.title;
  title.dataset.bookId = index;
  bookDisplay.appendChild(title);

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = book.author;
  author.dataset.bookId = index;
  bookDisplay.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = book.pages + " pages";
  pages.dataset.bookId = index;
  bookDisplay.appendChild(pages);

  const read = document.createElement("div");
  read.classList.add("read");
  read.textContent = book.readStatus;
  read.dataset.bookId = index;
  bookDisplay.appendChild(read);

  const remove = document.createElement("button");
  remove.textContent = "Remove Book";
  remove.dataset.bookId = index;
  bookDisplay.appendChild(remove);
  remove.addEventListener("click", () => {
    myLibrary.splice(index, 1)
    while (bookDisplay.firstChild) {
      bookDisplay.removeChild(bookDisplay.firstChild)
      }
    bookDisplay.remove();
    })
  })
}