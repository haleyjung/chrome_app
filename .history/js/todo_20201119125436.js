const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init() {
    loadToDos();
}

init();