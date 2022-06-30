let d = document,
    w = window,
    n = navigator


export default function networkStatus(div){

    let $div = d.querySelector(div)
    $div.style.visibility = "hidden"

    w.addEventListener("online", e => {

        $div.style.visibility = "visible"
        $div.style["background-color"] = "green"
        $div.innerHTML = "<p>online!</p>"
        
        setTimeout(() =>{$div.style.visibility = "hidden"}, 2000)
        
        
        
    })
    
    w.addEventListener("offline", e => {
        
        $div.style.visibility = "visible"
        $div.style["background-color"] = "red"
        $div.innerHTML = "<p>off-line!</p>"


        setTimeout(() =>{$div.style.visibility = "hidden"}, 2000)

    })
    

}