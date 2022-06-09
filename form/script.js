/*  ================ */
/*  PAGE FORMULAIRE */
/*  =============== */

const forlogin = ('forLogin');
const loginForm = ('loginForm');
const registerForm = ('registerForm');
const formContenair = ('formContenair');

const forRegister = document.querySelector('forRegister');

forRegister.addEventListener('click', () => {
    forlogin.classList.remove('active')
    forRegister.classList.add('active') 
    if(registerForm.classList.contains('toggleForm')){
        formContenair.style.transform = 'translate(-100%)';
        formContenair.style.transition ='Transform -5s';
         registerForm.classList.remove('toggleForm');
         loginForm.classList.add('toggleForm');

    }   

})