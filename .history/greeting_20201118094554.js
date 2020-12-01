const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js=greetings");

const USER_LS = "currentUser"

function paintGreeting(text) {
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
    } else {

    }
}

function init() {
    loadName();
}

init();