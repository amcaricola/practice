import botonMenu from "./modulo1.js"
import RelogAlarma from "./modulo2.js"
import teclasActivas from "./modulo3.js"
import countdown from "./modulo4.js"
import toTop from "./modulo5.js"
import darkMode from "./modulo6.js"
import responsivejs from "./modulo7.js"
import responsiveTestet from "./modulo8.js"
import detectDevice from "./modulo9.js"
import networkStatus from "./modulo10.js"


let d = document

d.addEventListener("DOMContentLoaded", (e) => {

    botonMenu("#menu",".menu_desplegado")
    RelogAlarma("#relogDigital","#audioControler")
    teclasActivas("#circuloTeclas")
    countdown("#countdown")
    toTop("#top",".toTop")
    responsiveTestet("#respondive-tester")
    detectDevice("#dispositivos")

    
    
})

darkMode('#darkmode', '#sun' , '#moon')

responsivejs(
    "(max-width: 1080px)",
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/DDwmKkxAyk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<a href="https://youtu.be/DDwmKkxAyk0">VE EL MEJOR VIDEO DE KYARY!</a>',
    "#rrd"
 )

 networkStatus(".onlineCheck");

