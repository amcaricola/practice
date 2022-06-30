

let d = document ;


export default function RelogAlarma (relogDiv) {

    let $alarm = d.createElement("audio")
    $alarm.src = "./assets/nier_grandma.mp3"

    d.addEventListener("click", (e) => {
    
        if (e.target.matches("#iniciarRelog")){

            Relog(relogDiv)
            e.target.disabled = true
            
        }
    
        if (e.target.matches("#detenerRelog")){
            relogActivo = true;
            d.querySelector(relogDiv).innerHTML = null
            d.querySelector("#iniciarRelog").disabled = false

        }
    
        if (e.target.matches("#IniciarAlarma")){
            $alarm.play()
            e.target.disabled = true


        }
    
        if (e.target.matches("#DetenerAlarma")){
            $alarm.pause();
            $alarm.currentTime = 0
            d.querySelector("#IniciarAlarma").disabled = false

        }
    
    
    
    })

}

let relogActivo = false;

const Relog = (relogDiv) => {

    relogActivo = false; 
    let tiempo = new Date;
    d.querySelector(relogDiv).innerHTML = `<h3>${tiempo.toLocaleTimeString()}</h3>`
    
    setInterval(()=>{
        if (!relogActivo){
            tiempo = new Date;
            d.querySelector(relogDiv).innerHTML = `<h3>${tiempo.toLocaleTimeString()}</h3>`
        }else{
            clearInterval()
        }

    }, 1000)

}


