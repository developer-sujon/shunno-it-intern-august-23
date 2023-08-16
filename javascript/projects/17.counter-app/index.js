const display = document.getElementById('display')
const subtract = document.querySelectorAll('.subtract')[0]
const addition = document.querySelectorAll('.addition')[0]
const reset = document.querySelectorAll('.reset')[0]

let initialValue = Number(display.innerHTML)

subtract.addEventListener('click', function(){
    initialValue -= 1
    display.innerHTML = initialValue
    // display.innerHTML.style.color = 'red'
})

addition.addEventListener('click', function(){
    initialValue += 1
    display.innerHTML = initialValue
    // display.innerHTML.style.color = 'blue'
})

reset.addEventListener('click', function(){
    initialValue = 0
    display.innerHTML = initialValue
})