const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const tableBody = document.querySelector('#table-body');
const clearBookList = document.querySelector('#clearBookList');



form.addEventListener('submit', function (e) {
  e.preventDefault()
  e.stopImmediatePropagation()
  const bookJson = { title: title.value, author: title.value, year: year.value }

  const row = document.createElement('tr')
  row.innerHTML = `
    <td>${bookJson.title}</td>
      <td>${bookJson.author}</td>
      <td>${bookJson.year}</td>
      <td id='dlt' onclick="deleteRow(this)">X</td>
      `
  tableBody.append(row)
})
// document.getElementById('dlt').addEventListener('click', function () {
//   e.target.parentNode.removeChild(e.parentNode)
//   console.log(e.target.parentNode)
// })
     function deleteRow(e){
        e.target.parentNode.removeChild(e.child)
        console.log(e.target.parentNode)
    }