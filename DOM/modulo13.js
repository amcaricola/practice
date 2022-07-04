let d = document,
    w = window

export default function smartVideo () {

    const $videos = d.querySelectorAll("video[data-smart-video]")


    const cb = (entries) => {

        entries.forEach(el => {
            if(el.isIntersecting){
                el.target.play()
            }else{
                el.target.pause()
            }

            w.addEventListener("visibilitychange", e =>{ 
                (d.visibilityState === "visible")
                ?el.target.play()
                :el.target.pause()
            } )
        });
    }

    const observer = new IntersectionObserver(cb,{
        threshold:[.50]
    })

    $videos.forEach(el => observer.observe(el))


}