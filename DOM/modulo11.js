let d = document 

export default function selectRandom (div, selectBtn, arr, selected = null) {

    let $div = d.querySelector(div);

    for (let i of arr) {
        

        $div.innerHTML += `<p>${i}</p>`


    }
    
    
    d.addEventListener("click" , e =>{

        if(e.target.matches(selectBtn)){
            
            let randomNumb = Math.floor(arr.length * Math.random())

            alert(`Tu elegido aleatoriamente es: ${arr[randomNumb]}` )

            if (selected != null) selected(arr[randomNumb])

        }
    })


}
