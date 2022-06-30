let d = document;


export default function teclasActivas(circulo){
    
    let $circulo = d.querySelector(circulo)
    let topCircle = 50;
    let rightCircle = 50;

    $circulo.style.top = `${topCircle}%`
    $circulo.style.right = `${rightCircle}%`


    d.addEventListener("keydown", e => {
        

        if (e.key == "a" && e.altKey == true){
            alert("esto es una alerta!")
        }

        if (e.key == "p" && e.altKey == true){
            prompt("esto es una prompt!")
        }

        if (e.key == "c" && e.altKey == true){
            confirm("esto es una confirm!")
        }
        
        
        if (e.key == "ArrowUp"){
            e.preventDefault()
            if (topCircle > 0){ 
                topCircle -- 
                $circulo.style.top = `${topCircle}%`
            }
            


        }

        if (e.key == "ArrowDown"){
            e.preventDefault()
            if (topCircle < 94){
                topCircle ++ 
                $circulo.style.top = `${topCircle}%`
            }
 
        }

        if (e.key == "ArrowLeft"){
            e.preventDefault()
            if (rightCircle < 96){
                rightCircle ++
                $circulo.style.right = `${rightCircle}%`

            }
        }

        if (e.key == "ArrowRight"){
            e.preventDefault()
            if (rightCircle > 0){
                rightCircle -- 
                $circulo.style.right = `${rightCircle}%`

            }
        }


    })

}

