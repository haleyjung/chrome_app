const body = document.querySelector("body");

const IMG_NUMBER = 3;

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
}

init();