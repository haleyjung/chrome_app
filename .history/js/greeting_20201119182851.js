const nameContainer = document.querySelector(".js-name");

function paintName(name) {
    nameContainer.innerHTML = "";
    const title = document.createElement("span");
    title.className = "name__text";
    title.innerHTML = `Hello ${name}`;
    nameContainer.appendChild(title);
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    localStorage.setItem("username", value);
    paintName(value);
}

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();