const header= document.getElementById("header")

window.addEventListener("scroll",()=>{

    if(window.scrollY>70){
        
        header.classList.add("positionFixed")
    }

    if(window.scrollY<10)
    {
        header.classList.remove("positionFixed")
    }

    
})
