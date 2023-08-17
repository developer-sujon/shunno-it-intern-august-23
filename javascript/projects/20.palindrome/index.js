const input = document.getElementById('input');
const button = document.getElementById('check');
const displayPalindrome = document.getElementById('displayPalindrome');

const palindromeCheck = ()=>{
    const word = input.value.toLowerCase()
    const reverseWord = word.split('').reverse().join('')
    if(word === reverseWord){
        displayPalindrome.innerText = `${word.toUpperCase()} is a Palindrome word`
    }
    else{
        displayPalindrome.innerText = `${word.toUpperCase()} is not a Palindrome word`
    }
}
button.addEventListener('click', palindromeCheck);