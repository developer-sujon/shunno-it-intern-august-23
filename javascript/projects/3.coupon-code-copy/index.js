const input = document.getElementById('input')
const copy = document.getElementById('copy')

copy.addEventListener('click', function(){
    input.focus()
    input.select()
    document.execCommand('copy')

    copy.innerHTML = 'Copy...'

    setTimeout(() => {
        copy.innerHTML = 'Copy'
    }, 2000);
})