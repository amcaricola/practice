// modulo del boton


export default function botonMenu(button, menu_desplegado){
    let d = document

    d.addEventListener("click", (e)=> {

        if (e.target.matches(button) || e.target.matches(`${button} *`) ){
            d.querySelector(menu_desplegado).classList.toggle("is-active")
        }

        if (e.target.matches(`${menu_desplegado} a`)){
            d.querySelector(menu_desplegado).classList.remove("is-active")

        }

    })


}





