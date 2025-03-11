//const Book1 = new Book("The Hobbit", "JRR Tolkein", "1", "read");
//const Book2 = new Book("test", "test", "test", "test");

const myLibrary = [];
const container = document.querySelector(".container")

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

// take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
}

function bookDisplay(bookObj) {
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
  read.textContent = readStatus;
  bookDisplay.appendChild(read);
}

//myLibrary.forEach((book) => );

const test = document.querySelector("button")
test.addEventListener("click", bookDisplay);