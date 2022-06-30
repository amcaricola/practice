let w = window
let d = document

export default function toTop (idTop, idSelf) {

    let isActive = false 
    
    w.addEventListener("scroll", (e) =>{

        if (w.scrollY > 500){
            if (!isActive){
                d.querySelector(idSelf).classList.toggle("toTop-is-active")
                isActive = true
            }        
        }

        if (w.scrollY < 500){
            if (isActive){
                d.querySelector(idSelf).classList.toggle("toTop-is-active")
                isActive = false
            } 
        }

    })

    d.addEventListener("click", (e) => {


        if ( e.target.matches(idSelf) || e.target.matches(`${idSelf} *`) ){
            w.scrollTo(0,0)

        }


    })




} 