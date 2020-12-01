const form = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = documenet.querySelector(".js-toDoList");

function init() {
    loadToDos();
}

init();