const colors = ['red', 'aqua', 'lightpink', 'skyblue', 'yellow']
const displayColor = document.getElementById('displayColor')
const button = document.querySelector('.button')

button.addEventListener('click', function(){
    const randomColor = Math.round(Math.random() * colors.length)
    // console.log(randomColor)
    document.body.style.backgroundColor = colors[randomColor]
    displayColor.textContent = `${colors[randomColor]}`;
})