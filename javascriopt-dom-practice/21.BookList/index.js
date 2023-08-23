// select form and run event listener on form
const form = document.querySelector("#form");
// select tableBody
const tableBody = document.querySelector("#table-body");

// add book list function
function addBookList(e) {
  e.preventDefault();

  const formData = e.target;

  // select input values
  const title = formData.title.value;
  const author = formData.author.value;
  const year = formData.year.value;

  // save data on localstorage
  saveDataOnLocalStorage({ title, author, year });

  // reset form
  form.reset();
}

// show book list on ui

// =================== localStorage start ===================

// save data on localstorage on function
const saveDataOnLocalStorage = (title, author, year) => {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push({ title, author, year });
  localStorage.setItem("books", JSON.stringify(books));
};

// get data from localStorage
const getDataFromLocalStorage = () => {
  const books = JSON.parse(localStorage.getItem("books"));
  books.forEach((book) => {
    const { title, author, year } = book;
    addBookToTable(title, author, year);
  });
};
// =================== localStorage end ===================

// event listener
form.addEventListener("submit", addBookList);
