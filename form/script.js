/*  ================ */
/*  PAGE FORMULAIRE */
/*  =============== */

const icon = document.querySelector('.mdi-menu');
const links = document.querySelector('#menu-links');

const afficherMenu = () => {
    if (links.style.display == 'none' || links.style.display == '') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
}

icon.addEventListener('click', () => {
    afficherMenu()
});

/*=============*/
/*=============*/

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const btnForm = document.querySelector('#btn-form');

const checkInput = () => {
    if ((email.value == '' || password.value == '' || confirmPassword.value == '') || (password.value.length < 5 || password.value.length < 5)) {
        btnForm.style.cursor = 'not-allowed';
        btnForm.style.backgroundColor = 'gray';
    } else {
        btnForm.style.cursor = 'pointer';
        btnForm.style.backgroundColor = 'green';
    }
}

checkInput();

email.addEventListener('keydown', () => {
    checkInput();
});

password.addEventListener('keydown', () => {
    checkInput();
});

confirmPassword.addEventListener('keydown', () => {
    checkInput();
});