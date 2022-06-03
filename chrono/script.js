/*  ============= */
/*  PAGE  CHRONO*/
/*  ===========  */

var affiche = document.querySelector('#affiche');
var demarrer = document.querySelector('#demarrer');
var stop = document.querySelector('#stop');
var reinitialiser = document.querySelector('#reinitialiser');

let tierce = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let t;

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
    affiche.textContent = (min > 9 ? min : "0" + min) 
        	 + ":" + (sec > 9 ? sec : "0" + sec)
       		 + ":" + (tierce > 9 ? tierce : "0" + tierce);
    timer();
}
function timer() {
    t = setTimeout(ajoutTexte, 10);
}

// timer();
// start.onclick = timer;
// stop.onclick = function() {
//     clearTimeout(t);
// }
// reset.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }

demarrer.addEventListener('click', ()=> {
    add(); 
});