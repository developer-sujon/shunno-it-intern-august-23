const input = document.getElementById('input')
const check = document.getElementById('check')
const displayVowel = document.getElementById('displayVowel')

check.addEventListener('click', function(){
    let count = 0;
    const words = input.value;
    [...words].forEach(word => {
        if(word.match(/[a,e,i,o,u]/)){
            count ++
            displayVowel.innerHTML = `${words} has ${count} vowels`
            displayVowel.style.color = "blue"
        }
        else{
            displayVowel.innerHTML = `${words} has no vowels`
            displayVowel.style.color = "red"
        }
    })
})