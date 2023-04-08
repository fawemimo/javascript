class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");

    // Create tr element
    const row = document.createElement("tr");
    console.log(row);

    // iNSERT COLS
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete"> X </a></td>
          
          `;
    list.appendChild(row);
  }

  showAlert(msg, className) {
    const div = document.createElement("div");
    // Add className
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(msg));
    // Get Parent
    const container = document.querySelector(".container");

    // Get Form
    const form = document.querySelector("#book-form");
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3secs

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
      }
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Local Storage Class 
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem("books") == null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        };

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);
        })
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(){

    }
}


// dom load Events
document.addEventListener("DOMContentLoaded", Store.displayBooks, false);




// Event Listeners
document
  .querySelector("#book-form")
  .addEventListener("submit", booKForm, false);

function booKForm(e) {
  e.preventDefault();

  //   Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  console.log(title, author, isbn);

  //   instantiate a book
  const book = new Book(title, author, isbn);
  console.log(book);

  // INSTANTIATE UI
  const ui = new UI();
  console.log(ui);

  // validate
  if (title === "" || author === "" || isbn === "") {
    // alert('Please enter a title');
    // Error Alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to Local Storage
    Store.addBook(book);


    // Clear Fields
    ui.clearFields();
  }
}

// Event Listeners for delete
document
  .querySelector("#book-list")
  .addEventListener("click", deleteBtn, false);

function deleteBtn(e) {
  e.preventDefault();
  console.log("delete");

  // INSTANTIATE UI
  const ui = new UI();
  console.log(ui);

  // Delete the book
  ui.deleteBook(e.target)

  // Show message
  ui.showAlert('Book deleted successfully', 'success');
}
