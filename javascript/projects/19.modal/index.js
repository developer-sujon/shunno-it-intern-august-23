const button = document.querySelectorAll('.button')[0]
const close = document.querySelector('.close')
const modal =document.getElementById('modal')

const openModal = () => {
    modal.style.display = 'block'
}
const closeModal = () => {
    modal.style.display = 'none'
}
button.addEventListener('click', openModal)
close.addEventListener('click', closeModal)