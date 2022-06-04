/*  ================ */
/*  PAGE FORMULAIRE */
/*  =============== */

const nomImput = document.querySelector("name");
const email = document.querySelector("email");
const message = document.querySelector("message");
const succes = document.querySelector("succes");
const errorNodes = document.querySelector("error");


function validateForm(){

clearMessage();

if(nameInput.value.length <1){
    errorNodes[0].innerText = "Name Cannot be blanK";
    nameInput.classList.add("error-border");
  }

  if(!emailIsValid(email.value)){
    errorNodes[0].innerText = "Invalid email adress";
    email.classList.add("error-border");
  }


}

//efface l'erreur/message succès 
function clearMessage(){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes.classList.remove("error-border");
    }
}// tester la validité du mail
 function emailIsValid(email){
     let pattern = /\S+@\S+\.\S+/;
     return pattern.test(email)
 }