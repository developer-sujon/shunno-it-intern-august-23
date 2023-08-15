window.addEventListener('load', function(){
    navigator.geolocation.getCurrentPosition((response, success)=>{
        let lat = response.coords.latitude;
        let long = response.coords.logitude;
        let api = `http://api.weatherapi.com/v1/current.json?key=9728aa32a6c94e9d87c215301211211&q=${lat},${long}&aqi=no`;

        fetch(api).then(response => response.json()).then(data => showData(data)).catch(error => console.log(error.error))

        const showData = (data) => {
            document.getElementById('country').innerHTML = data.location.country;
            document.getElementById('localtime').innerHTML = data.location.localtime;
            document.getElementById('temp_c').innerHTML = data.location.temp_c;
            document.getElementById('condition').innerHTML = data.location.condition;
            document.getElementById('icon').src = data.location.icon;

            console.log(data.current.condition)
        }
    })
})