let d = document, 
w = window

export default function responsivejs(mediaQuery,DeskContent, MobileContent,contentBlock) {

    let checkQuery = w.matchMedia(mediaQuery)

    
    function checkTheMedia(){
    
        let block = d.querySelector(contentBlock)
        
        if (checkQuery.matches) {
            block.innerHTML = MobileContent
    
        }else{
            block.innerHTML = DeskContent
    
        }
    }

    checkTheMedia()

 
    checkQuery.addEventListener("change", e => {
        checkTheMedia()
    })
        
        
}
    