const form = document.getElementById('form')
const bill = document.getElementById('bill')
const rateService = document.getElementById('rate-service')
const button = document.getElementById('button')
const tipAmount = document.getElementById('tipAmount')
const totalBill = document.getElementById('totalBill')
const error = document.getElementsByClassName('error')[0]

const hideError = () => {
    setTimeout(() => {
        error.style.display = 'none'
    }, 3000);
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(bill == '' || rateService == ''){
        error.innerHTML = 'Please fillup Bil and Rate Service field';
        error.style.color = 'red'
        error.style.display = 'block'
        hideError()
    }
    else if(isNaN(bill.value)){
        console.log(bill)
        error.innerHTML = 'Please enter a number';
        error.style.color = 'red'
        hideError()
    }
    else{
        let tip = Number(bill.value) * rateService.value
        // console.log(rateService)
        tip = Math.round(tip)
        tipAmount.innerHTML = `Tip Amount: $${Number(tip)}`
        totalBill.innerHTML = `Total Bill: $${tip + Number(bill.value)}`
        error.innerHTML = 'Tip Calculator Successfully';
    }

})