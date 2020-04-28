const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


prev.addEventListener("click",function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click",function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

//circle indicator

function circleIndicator(){
    for (let index = 0; index < slides.length; index++) {
        const div=document.createElement("div");
            div.innerHTML=index+1;
        div.setAttribute("onclick","indicateSlide(this)")
        div.id=index;
        if (index==0) {
            div.className="active";
        }
        indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(element) {
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator(){
    for (let index = 0; index < indicator.children.length; index++) {
        indicator.children[index].classList.remove("active");
        
    }
    indicator.children[index].classList.add("active");

}


function prevSlide(){
    if (index==0) {
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide()
}

function nextSlide() {
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    
    changeSlide()
}

function changeSlide(){
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");

        slides[index].classList.add("active")
        
    }
    
}

function resetTimer() {
    clearInterval(timer);
    timer=setInterval(autoPlay,4000);
}


function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer=setInterval(autoPlay,4000);

// /////////////////////////////////// /////


const sliders=document.querySelector(".sliderr").children;
const indicatorImages = document.querySelector(".slider-indicator").children;


for (let index = 0; index < indicatorImages.length; index++) {
    indicatorImages[index].addEventListener("click",function(){
        for (let j = 0; j < indicatorImages.length; j++){
            indicatorImages[j].classList.remove("activee")
        }
        this.classList.add("activee");
        const id=this.getAttribute("data-id");
        for (let j = 0; j < sliders.length; j++) {
            sliders[j].classList.remove("activee");
            
        }
        sliders[id].classList.add("activee");
    });
    
}