const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber){
    const image = new Image();
    
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();