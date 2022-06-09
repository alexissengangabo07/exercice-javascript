const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');

const  afficherMenu = () => {
    if(links.style.display == 'none' || links.style.display == '') {
        links.style.display = 'flex';
    }
    else {
        links.style.display = 'none';
    }
}

icon.addEventListener('click', () => {
   afficherMenu()
});


//SELECTEUR
let btnsDelete = '';
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
    const liste = document.createElement("list");
    liste.classList.add("todo_list");
    liste.innerText = formular.value;
    // INSERTION DE LA LIST DANS LA DIV
    tododiv.appendChild(liste);
    // CREATION DES DEUX BUTTON (MODIFIER) & (Stodo_listUPPRIMER)  
    const todobutton = document.createElement("btn");
    todobutton.classList.add("btn_mod");
    todobutton.innerHTML = '<i class="fa fa-edit " > </i>';
    tododiv.appendChild(todobutton);
    const todobutton2 = document.createElement("btn");
    todobutton2.classList.add("btn_trash");
    todobutton2.innerHTML = '<i class="fa fa-trash " > </i>';
    tododiv.appendChild(todobutton2);
    todolist.appendChild(tododiv);
    formular.value = "";


    btnsDelete = document.querySelectorAll('.btn_trash');
    btnsDelete.forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            element.parentNode.remove();
        })
    });
}



