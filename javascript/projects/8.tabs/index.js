const tabLinks = document.querySelectorAll('.tab-link')
const tabContents = document.querySelectorAll('.tab-content')

for(var i = 0; i < tabLinks.length; i++){
    tabLinks[i].addEventListener('click', function(e){
        const current = document.querySelectorAll('.active')
        current[0].className = current[0].className.replace(' active', '')
        e.target.className += ' active'

        tabContents.forEach(tabContent => {
            const filter = e.target.dataset.filter 
            if(tabContent.classList.contains(filter)){
                tabContent.style.display = 'block'
            }
            else{
                tabContent.style.display = 'none'
            }
        })
    })
}