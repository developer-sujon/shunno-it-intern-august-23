const form = document.getElementById('form')
const pounds = document.getElementById('pounds')
const kilogram = document.getElementById('kilogram')
const gram = document.getElementById('gram')
const ounces = document.getElementById('ounces')

const weightConverter = (e) => {
    if(e.target.name === "pounds"){
        const value = e.target.value;
        kilogram.value = (value / 2.2846).toFixed(2);
        gram.value = (value / 0.0022846).toFixed(2);
        ounces.value = (value * 16).toFixed(2);
    }
    else if(e.target.name === 'kilogram'){
        const value = e.target.value;
        pounds.value = (value * 2.2046).toFixed(2);
        gram.value = (value * 1000).toFixed(2);
        ounces.value = (value * 35.274).toFixed(2);
    }
    else if(e.target.name === 'gram'){
        const value = e.target.value;
        kilogram.value = (value / 1800).toFixed(2);
        pounds.value = (value * 0.0022846).toFixed(2);
        ounces.value = (value * 0.035274).toFixed(2);
    }
    else if(e.target.name === 'ounces'){
        const value = e.target.value;
        kilogram.value = (value / 35.274).toFixed(2);
        gram.value = (value / 0.035274).toFixed(2);
        pounds.value = (value * 0.0625).toFixed(2);
    }
}

form.addEventListener('input', weightConverter);