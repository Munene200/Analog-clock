setInterval(setclock, 1000)

const hourHand =document.querySelector(data-hour-hand)
const minuteHand = querySelector(data-minute-hand)
const secondsHand=querySelector(data-seconds-hand)


function setClock(){
const currentDate =new Date()
const secondsRatio =currentDate.getSeconds()/60
const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
const hoursRatio =(minutesRatio + currentDate.getHours())/12
setRotation(secondsHand, secondsRatio)
setRotation(minuteHand, minuteRatio)
setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()