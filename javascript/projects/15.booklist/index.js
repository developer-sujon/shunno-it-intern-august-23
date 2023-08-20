const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const tableBody = document.querySelector('#table-body');
const clearBookList = document.querySelector('#clearBookList');


form.addEventListener('submit', function (e) {
  e.preventDefault()

  const bookJson = { title: title.value, author: title.value, year: year.value }
  console.log(bookJson)

  const row = `<tr>
    <td>${bookJson.title}</td>
      <td>${bookJson.author}</td>
      <td>${bookJson.year}</td>
      <td><button class="delete">Delete</button></td>
      </tr>`
  tableBody.innerHTML += row
})


tableBody.addEventListener('click',removeTask)
function removeTask(e) {
  const clickedButton = e.target;
  console.log(clickedButton)
  if (clickedButton.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove()
  }
}