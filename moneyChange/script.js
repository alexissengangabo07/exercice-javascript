/*  ========== ==== */
/*  MONEY CHANGE  */


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

// récupérer les deux élément
const usdInput = document.getElementById('input-usd')
const cdfInput = document.getElementById('input-cdf')

//Associer un événement qui correspond au changement de la valeur du champs
usdInput.addEventListener('input', () => {
    // recupérer la valeur saisi par l'utilisateur
    const usd = usdInput.value
    // Convertir la valeur en nombre
    const usdNombre = parseFloat(usd)

    //récupérer le taux
   const taux = cdfInput.getAttribute('data-taux')

    // Convertir le taux en nombre
    const tauxNombre = parseFloat(taux)

    //Calculer la nouvelle conversion
    const nouvelleConversion = usdNombre * tauxNombre
    console.log(nouvelleConversion)

    //Conversion nouvelle nombre en text avec 5 chiffre après la virgule
    const nouvelleConversionText = nouvelleConversion.toFixed(3)
    console.log(nouvelleConversionText)
    


    //Mettre à jour le champ
    cdfInput.value = nouvelleConversionText

})

cdfInput.addEventListener('input', () => {

     // recupérer la valeur saisi par l'utilisateur
     const cdf = cdfInput.value
     // Convertir la valeur en nombre
     const cdfNombre = parseFloat(cdf)
 
     //récupérer le taux
    const taux = cdfInput.getAttribute('data-taux')
 
     // Convertir le taux en nombre
     const tauxNombre = parseFloat(taux)
 
     //Calculer la nouvelle conversion
     const nouvelleConversion = cdfNombre / tauxNombre
     console.log(nouvelleConversion)

       //Conversion nouvelle nombre en text avec 5 chiffre après la virgule
    const nouvelleConversionText = nouvelleConversion.toFixed(3)
    console.log(nouvelleConversionText)
 
 
     //Mettre à jour le champ
     usdInput.value = nouvelleConversionText
    
})
/*  ============== */

console.log('Hello World');