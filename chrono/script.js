/*  ============= */
/*  PAGE  CHRONO*/
/*  ===========  */

const affiche = document.querySelector('#affiche');
const demarrer = document.querySelector('#demarrer');
const pause = document.querySelector('#pause');
const reinitialiser = document.querySelector('#reinitialiser');
let containerStart;

let tierce = 0;
let sec = 0;
let min = 0;
let hrs = 0;

function comptage(){
    tierce++;
    if (tierce >= 100) {
        tierce = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if(min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
}
function ajoutTexte() {
    comptage();
    affiche.innerHTML = (min > 9 ? min : "0" + min) 
        	 + ":" + (sec > 9 ? sec : "0" + sec)
       		 + ":" + (tierce > 9 ? tierce : "0" + tierce);
    timer();
}

function timer() {
    containerStart = setTimeout(ajoutTexte, 10);
}

demarrer.addEventListener('click', ()=> {
    ajoutTexte(); 
});

pause.onclick = function() {
    clearTimeout(containerStart);
    affiche.textContent = (min > 9 ? min : "0" + min) 
        	 + ":" + (sec > 9 ? sec : "0" + sec)
       		 + ":" + (tierce > 9 ? tierce : "0" + tierce);
 }

 reinitialiser.addEventListener('click', () => {
    affiche.textContent = "00:00:00";
    clearTimeout(containerStart);
    tierce = 0;
    sec = 0;
    min = 0;
    hrs = 0;
 });