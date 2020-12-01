const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

function loadToDos() {
    const toDos = localStorage.getItem();
}

function init() {
    loadToDos();
}

init();