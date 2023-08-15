setTimeout(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const session = hours >= 12 ? 'pm' : 'am'

    const formatTwelveHour = hours > 12 ? hours - 12 : hours
    const formatHour = formatTwelveHour < 10 ? '0' + formatTwelveHour : formatTwelveHour
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes 
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds

    document.getElementById('hours').textContent = `${formatHour}`
    document.getElementById('minutes').textContent = `${formatMinutes}`
    document.getElementById('seconds').textContent = `${formatSeconds}`
    document.getElementById('session').textContent = `${session}`


}, 1000);