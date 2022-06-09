/*  ================ */
/*  PAGE FORMULAIRE */
/*  =============== */

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

const nomImput = document.querySelector("name");
const email = document.querySelector("email");
const message = document.querySelector("message");
const succes = document.querySelector("succes");
const errorNodes = document.querySelector("error");


function validateForm(){

clearMessage();
let errorFlag = false;

if(nameInput.value.length < 1){
    errorNodes[0].innerText = "Name Cannot be blanK";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(email.value)){
    errorNodes[1].innerText = "Invalid email adress";
    email.classList.add("error-border");
    errorFlag = true;
  }
   if (message.value.length < 1){
    errorNodes[2].innerText = "Tappez le message svp";
    message.classList.add("error-border");
    errorFlag = true;
}
    if(!errorFlag){
        succes.innerText = "Success!";
    }
}

//efface l'erreur/message succès 
function clearMessage(){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText= "";
    }
    succes.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// tester la validité du mail
 function emailIsValid(email){
     let pattern = /\S+@\S+\.\S+/;
     return pattern.test(email)
 }