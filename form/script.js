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
    if ((email.value == '' || password.value == '' || confirmPassword.value == '') && (password.value.length < 5 && password.value.length < 5)) {
        btnForm.style.cursor = 'not-allowed';
        btnForm.style.backgroundColor = 'gray';
    } else {
        btnForm.style.cursor = 'pointer';
        btnForm.style.backgroundColor = 'green';
    }
}

const checkPasswordLength = () => {
    if (password.value.length < 5) {
        password.style.border = '1px solid red';
    } else {
        password.style.border = '1px solid lightgreen';
    }
}

const checkConfirmPassword = () => {
    if (confirmPassword.value == password.value) {
        confirmPassword.style.border = '1px solid lightgreen';
    } else {
        confirmPassword.style.border = '1px solid red';
    }
}

checkInput();

email.addEventListener('keyup', () => {
    checkInput();
});

password.addEventListener('keyup', () => {
    checkPasswordLength();
    checkInput();
});

confirmPassword.addEventListener('keyup', () => {
    checkConfirmPassword();
    checkInput();
});