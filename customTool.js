//-------------------------------------Custom tools --------------------------------------

//drop down list 
var selectedFontSize = document.getElementById("fontList");
var selectedColourMode = document.getElementById("colorList");


//====================colour
var headerBackground = document.querySelector('.hearderColour');
var footerBackground = document.querySelector('.footerColour');

//get color mode option
changeColor();
selectedColourMode.addEventListener('change',function(){
    localStorage.colourMode = selectedColourMode.value;

    changeColor();
});

function changeColor(){
    if (localStorage.colourMode == 'green'){
        headerBackground.setAttribute('class', 'green nav nav-tabs nav-fill red justify-content-center border-bottom');
        footerBackground.setAttribute('class', 'green page-footer font-small text-light');
    }
    else if (localStorage.colourMode == 'dark'){
        headerBackground.setAttribute('class', 'dark nav nav-tabs nav-fill red justify-content-center border-bottom');
        footerBackground.setAttribute('class', 'dark page-footer font-small text-light');
    }
    else if (localStorage.colourMode == 'purple'){
        headerBackground.setAttribute('class', 'purple nav nav-tabs nav-fill red justify-content-center border-bottom');
        footerBackground.setAttribute('class', 'purple page-footer font-small text-light');
    }
    else if (localStorage.colourMode == 'blue'){
        headerBackground.setAttribute('class', 'blue nav nav-tabs nav-fill red justify-content-center border-bottom');
        footerBackground.setAttribute('class', 'blue page-footer font-small text-light');
    }
    else if (localStorage.colourMode == 'grey'){
        headerBackground.setAttribute('class', 'grey nav nav-tabs nav-fill red justify-content-center border-bottom');
        footerBackground.setAttribute('class', 'grey page-footer font-small text-light');
    }
}



//====================font size
var fontSizeContainer = document.querySelector('.fontSizeContainer');

//get font size option
changeFontSize();
selectedFontSize.addEventListener('change',function(){
    localStorage.sizeMode = selectedFontSize.value;
    changeFontSize();
});


function changeFontSize(){
    if (localStorage.sizeMode == 'small'){
        fontSizeContainer.setAttribute('class', 'fontSizeContainer small');
    }
    else if (localStorage.sizeMode == 'normal'){
        fontSizeContainer.setAttribute('class', 'fontSizeContainer normal');
    }
    else if (localStorage.sizeMode == 'large'){
        fontSizeContainer.setAttribute('class', 'fontSizeContainer large');
    }
    
}