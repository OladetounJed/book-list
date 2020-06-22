//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI COnstructor

function UI() {}

UI.prototype.addBookToList = function(book) {
  const bookList = document.getElementById("book-list");

  const row = document.createElement("tr");
  row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>`;

  bookList.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.getElementById("book-form");

  container.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 1000);
};

//Event Listeners
bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function(e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiate Book
  const book = new Book(title, author, isbn);

  //Instantiate UI

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please Fill in all Fields", "error");
  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert("Record Added", "success");
  }

  e.preventDefault();
});
