//-------------------------------------Thunbnail Image Zoom effect --------------------------------------
//get relavent elements
const zoomBkg = document.querySelector('.thumbnailBackgroung');//dark background
const zoomItems = document.querySelector('.zoomContainer');
const closeBtn = document.querySelector('.closeButton i');
const Speed = 10;//animation speed
var targetWidth = window.screen.width * 0.6;//60% of screen width
var currentWidth = 0;//set default width to 0

var targetHeight = window.screen.height * 0.55;//55% of screen height
var currentHeight = 0;//set default height to 0

var currentOpacity = 0;//set default opacity to 0
var timer = null;

var flyerFlag = 0;

//Image
var zoomImg = document.getElementById("zoomImage");
var targetImg = document.getElementsByClassName("zoomTarget");


for(var i = 0; i < targetImg.length; i++) {
    targetImg[i].addEventListener("click", function() {
        var imageSrc = this.src;
        zoomImg.src = imageSrc;
        zoomBkg.style.visibility='visible';
        timer = setInterval(zoomIn, 5);
    });
}

//Flyer
var targetImg2 = document.getElementsByClassName("zoomTarget2");

for(var i = 0; i < targetImg2.length; i++) {
    targetImg2[i].addEventListener("click", function() {
        var imageSrc = this.src;
        zoomImg.src = imageSrc;
        zoomBkg.style.visibility='visible';
        timer = setInterval(zoomIn2, 5);
    });
}

//zoom in items

function zoomIn(){
    if(currentWidth >= targetWidth){
        clearInterval(timer);
    }
    else{
        currentWidth += Speed;
        currentOpacity += Speed/targetWidth;
        zoomItems.style.width = currentWidth  + 'px'; 
        zoomItems.style.opacity = currentOpacity;
    }
}

//zoom in Flyers
function zoomIn2(){
    if(currentHeight >= targetHeight){
        clearInterval(timer);
        flyerFlag = 1;
    }
    else{
        currentHeight += Speed;
        currentOpacity += Speed/targetHeight;
        zoomItems.style.width = currentHeight  + 'px'; 
        zoomItems.style.opacity = currentOpacity;
    }
}

//add click event to hide the zoom image

closeBtn.addEventListener('click', function(){
    if(flyerFlag == 0){
        timer = setInterval(zoomOut, 4);
    }
    else if(flyerFlag == 1){
        timer = setInterval(zoomOut2, 4);
    }
});

//zoom out items
function zoomOut(){
    if(currentWidth <= 0){
        clearInterval(timer);
        zoomBkg.style.visibility='hidden';
    }
    else{
        currentWidth -= Speed;
        currentOpacity -= Speed/targetWidth;
        zoomItems.style.width = currentWidth  + 'px'; 
        zoomItems.style.opacity = currentOpacity;
    }
}

//zoom out Flyers
function zoomOut2(){
    if(currentHeight <= 0){
        clearInterval(timer);
        flyerFlag = 0;
        zoomBkg.style.visibility='hidden';
        
    }
    else{
        currentHeight -= Speed;
        currentOpacity -= Speed/targetHeight;
        zoomItems.style.width = currentHeight  + 'px'; 
        zoomItems.style.opacity = currentOpacity;
    }
}

