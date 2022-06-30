let d = document;

export default function darkMode(idButton,imgSun, imgMoon){
    
    let sun = d.querySelector(imgSun),
        moon = d.querySelector(imgMoon);


    const darkModeActive = () => {
        sun.classList.toggle("hidden")
        moon.classList.toggle("hidden")
        d.querySelector("article").classList.toggle("darkmode")
    }




        d.addEventListener("DOMContentLoaded", e => {

            if (localStorage.getItem("darkMode") == null) localStorage.setItem("darkMode", "light")
            if (localStorage.getItem("darkMode") == "dark") darkModeActive()

        })





    d.addEventListener("click", e => {

        if (e.target.matches(idButton) ||  e.target.matches(`${idButton} *`)){
            

            darkModeActive()


            if (localStorage.getItem("darkMode") == "light") {
                localStorage.setItem("darkMode", "dark")

            }else{
                localStorage.setItem("darkMode", "light")

            }

        }
    })


}
 