import reviews from "./reviews.js";

const personImg = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentReview = 0

const showReview = (e) => {
    const personData = reviews[currentReview]
    // console.log(reviews[currentReview])
    personImg.src = personData?.img
    author.textContent = personData?.name
    job.textContent = personData?.job
    info.textContent = personData?.text
}

nextBtn.addEventListener('click',function(e){
    // console.log(prevBtn)
    if(currentReview < reviews.length - 1){
        prevBtn.disabled = false
        currentReview++
        showReview(currentReview)
    }
    else if(currentReview > reviews.length - 2){
        e.currentTarget.disabled = true;
    }
})

prevBtn.addEventListener('click',function(e){
    if(currentReview > 0){
        nextBtn.disabled = false;
        currentReview--
        showReview(currentReview)
    }
    else{
        e.currentTarget.disabled = true;
    }
})

randomBtn.addEventListener('click', function(){
    let randomReview = Math.round(Math.random() * reviews.length)
    currentReview = randomReview
    showReview(currentReview)
})

window.addEventListener('load',showReview)