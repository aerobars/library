//Book1 and Book2 for testing only
//const Book1 = new Book("The Hobbit", "JRR Tolkein", "1", "read");
//const Book2 = new Book("test", "test", "test", "test");

const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.getElementById("new-btn");
const submitBookBtn = document.getElementById("submit-btn");
const bookInput = document.getElementById("input-dialog");
const viewBooks = document.getElementById("show-books");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = read;
  this.info = () => {
    return (
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    )
  }
}


newBookBtn.addEventListener("click", openDialog);

function openDialog() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

submitBookBtn.addEventListener("click",(e) => {
  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const pageTotal = document.getElementById("page-total");
  const readStatus = document.querySelector("input[name=read-status]:checked");
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, pageTotal.value, readStatus.value);
  bookInput.close();
  console.log(myLibrary);
})

// take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, read) {
  const addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
}

viewBooks.addEventListener("click", showBooks);

function showBooks() {
  myLibrary.forEach((book) => bookCard(book));
}

function bookCard(bookObj) {
  const bookDisplay = document.createElement("div");
  bookDisplay.classList.add("card");
  container.appendChild(bookDisplay)

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = bookObj.title;
  bookDisplay.appendChild(title);

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = bookObj.author;
  bookDisplay.appendChild(author);

  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = bookObj.pages + " pages";
  bookDisplay.appendChild(pages);

  const read = document.createElement("div");
  read.classList.add("read");
  read.textContent = bookObj.readStatus;
  bookDisplay.appendChild(read);

  const remove = document.createElement("button");
  remove.textContent = "Remove Book";
  bookDisplay.appendChild(remove);
}