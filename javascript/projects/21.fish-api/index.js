const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(form)

    fetch('https://whatsapp.devsujon.com/api/v1/fishial', {
        method: "POST",
        "Content-Type": "application/json",
        body: formData
    })
    .then(res => res.json())
    .then(data => showData(data.data.results[0].species[0]))
})

const showData = (data) => {
    document.getElementById('output').innerHTML = `<h1>${data.name}</h1>
    <img src='${data['fishangler-data']?.photo?.mediaUri}'/>
    `
    console.log(data['fishangler-data']?.photo?.mediaUri)
}