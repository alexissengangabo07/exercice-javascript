//SELECTEUR
const formular = document.querySelector(".formulaire");
const button = document.querySelector(".btn");
const todolist = document.querySelector(".todo_list");
//ECOUTEUR
button.addEventListener("click", addTodo);
//FONCTION
function addTodo(event) {
    event.preventDefault();
    //Todo Div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo")
        // CREATION DE LA LIST
    const list = document.createElement("list_");
    list.classList.add("todo_list");
    // INSERTION DE LA LIST DANS LA DIV
    tododiv.appendChild(list);
    // CREATION DES DEUX BUTTON (MODIFIER) & (SUPPRIMER)  
    const todobutton = document.createElement("btn");
    todobutton.classList.add("btn_del");
    todobutton.innerHTML = '<i class="fa fa-check " > </i>';
    tododiv.appendChild(todobutton);
    const todobutton2 = document.createElement("btn");
    todobutton2.classList.add("btn_trash");
    todobutton2.innerHTML = '<i class="fa fa-trash " > </i>';
    tododiv.appendChild(todobutton2);
    todolist.appendChild(tododiv);

}