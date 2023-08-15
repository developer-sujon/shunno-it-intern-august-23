const input = document.getElementById('input')
const displayCharacter = document.getElementById('displayCharacter')

input.addEventListener('keyup', function(e){
    let count = e.target.value.length
    displayCharacter.innerHTML = count
})