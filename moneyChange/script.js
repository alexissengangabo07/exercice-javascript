/*  ========== ==== */
/*  MONEY CHANGE  */
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


    //Mettre à jour le champ
    cdfInput.value = nouvelleConversion

})

cdfInput.addEventListener('input', () => {
    
})
/*  ============== */

console.log('Hello World');