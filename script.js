const slides =document.querySelectorAll(".slider");
var counter=0;

slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index *100} %`
    }
)
const goNext=()=>{
    counter++
    slideImage();
}

const goPrevious=()=>{
    counter--;
    slideImage();
}


function slideImage(slides) {
    slides.style.transform=`translateX(-${counter*100})`
}

