const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const carousel = document.getElementById("carousel");       


        
let dato=0;

const arrayImages = ["https://d3tf9yuhsp2bpn.cloudfront.net/images/2020/09/29/20200929-1601381594-tours-de-noche-categorias-guadalajara-tuexperiencia.jpg","./assets/image/monterey.png"];

carousel.style.backgroundRepeat="no-repeat";
carousel.style.backgroundSize=" 100% 100%";
        
//carousel.style.backgroundAttachment="local";
carousel.style.backgroundImage="url('"+arrayImages[dato]+"')";

function changeImageEffect()
{
    carousel.style.transition="all .5s";
    carousel.style.transitionTimingFunction="steps(6,end)";
    carousel.style.backgroundImage="url('"+arrayImages[dato]+"')";

    setTimeout(()=>{
        carousel.style.transition="none";
    },600)
}


arrowLeft.addEventListener("click",()=>{
            
            

    dato--;

    if(dato===-1){
        dato=arrayImages.length-1;
    }


    changeImageEffect()

   





           
            
})

arrowRight.addEventListener("click",()=>{
            
           

    dato++;
            
    if(dato===(arrayImages.length)){
        dato=0;
    }


    changeImageEffect()


           
            
            
})


        

const changeImage = setInterval(()=>{
    dato++;
    if(dato===arrayImages.length)
        dato=0;
            
    changeImageEffect()

    
   

},6000)
