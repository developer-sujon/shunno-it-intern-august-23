const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const displayColor = document.getElementById('displayColor')
const button = document.querySelector('.button')

const generateColor = () => {
    let hexColor = '#'
    const randomColor = Math.round(Math.random() * hex.length)
    for(var i = 0; i < 6; i++){
        hexColor += hex[randomColor]
    }
    console.log(hexColor)

    document.body.style.backgroundColor = `${hexColor}`
    displayColor.textContent = `${hexColor}`;
}
button.addEventListener('click', generateColor)
