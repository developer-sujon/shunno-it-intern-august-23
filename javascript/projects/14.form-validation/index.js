document.getElementById('form').addEventListener('input',function(e){
    e.preventDefault()
    console.log(e.target.nextElementSibling.children)
    const inputValue = e.target.value;
    if(e.target.type === 'text'){
        if(inputValue && inputValue.length > 5){
            e.target.parentElement.classList.add('success');
            e.target.parentElement.classList.remove('fail');
            e.target.nextElementSibling.children[0].style.visibility = 'visible';
            e.target.nextElementSibling.children[1].style.visibility = 'hidden';
        } else {
            e.target.parentElement.classList.add('fail');
            e.target.parentElement.classList.remove('success');
            e.target.nextElementSibling.children[0].style.visibility = 'hidden';
            e.target.nextElementSibling.children[1].style.visibility = 'visible';
        }
    }
})