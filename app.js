

//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};



//UI COnstructor

function Ui() {};

//Event Listeners
document.getElementsByClassName('book-form').addEventListener('submit', function(e){
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;
          
          console.log(title, author, isbn)

          preventDefault();
})


