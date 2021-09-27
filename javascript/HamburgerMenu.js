const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu-aside");



toggle.addEventListener("click",()=>{
            
    toggle.classList.toggle("change")

    if(toggle.className=="toggle-menu"){
        menu.style.display="none";
        arrowLeft.style.display="inline-block";
        //arrowRight.style.left="86%";
        arrowRight.style.marginLeft="0";
    }else{
        menu.style.display="block";
        arrowLeft.style.display="none";
        //arrowRight.style.left="75%";
        arrowRight.style.marginLeft="54px";
    }
    

})