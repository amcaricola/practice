let d = document;
let dateWanted = "1/1/23"


export default function countdown(countdownDOM){
    let actualDate = new Date()
    let newYear = new Date(dateWanted);

    let leftTime =  Math.abs(actualDate.getTime() - newYear.getTime() ) 

    let seconds, minutes, hours, day, timer,timerDOM;

    let $countdown = d.querySelector(countdownDOM)
    
    timer = setInterval(() => {
        leftTime -= 1000


        day = leftTime / (1000 * 60 *60 * 24 )
        hours = (day - Math.floor(day) )  * 24
        minutes = (hours - Math.floor(hours)) * 60
        seconds = (minutes - Math.floor(minutes)) * 60

        timerDOM = `${Math.floor(day)} dias ${Math.floor(hours)} horas ${Math.floor(minutes)} minutos ${Math.floor(seconds)} segundos.`

        $countdown.textContent = timerDOM

        if (leftTime === 0){
            clearInterval(timer)
            $countdown.textContent = "FELIZ AÑO NUEVOOOO!!!!"
        }
        
    }, 1000);


}