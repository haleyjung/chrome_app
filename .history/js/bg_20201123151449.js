const body = document.querySelector("body");

const IMG_NUMBER = 4;

// If loading images from API, include the functions in these comments:
// function handleImgLoad(){
//     console.log('finished loading');
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/img/${lamiesstudio-imgNumber + 1}.png`;
    image.classList.add('bgImage');
    body.prepend(image);
    // image.addEventListener("loadend", handleImgLoad);
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

