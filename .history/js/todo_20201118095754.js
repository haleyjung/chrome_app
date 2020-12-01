const form = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = documenet.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {

    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListern("submit", handleSubmit);
}

init();