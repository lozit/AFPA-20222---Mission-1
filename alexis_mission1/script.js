// Declaration de mes variables
let saisieClavier;
let nombreDesaisie = [];
let valeurMax = [];
let valeurMin = [];
let somme;
let i = 0;
let longueurTab;

//Declaration de mes fonctions

  //addition
addition = (previousValue, currentValue) => previousValue + currentValue;   //fonction fléchée addition

  //moyenne
function moyenne(array) {
  for (let i = 0; i < array.length; i++) {
    valeurMoyenne = array.reduce(addition) / array.length;     //reduce liste tout les elements du array
    return valeurMoyenne;
  };
};
  //boucle pour recuperer les saisies de l'utilisateur
do{
   saisieClavier = Number (prompt ("Entrez vos données \n0 pour terminer la saisie"));    //recupere les saisies de l'utilisateur
   nombreDesaisie.push (saisieClavier);                       //rempli mon array
}
while (saisieClavier != 0) {
    nombreDesaisie.pop();                                    //supprime la valeur 0 de fin de boucle
    longueurTab = nombreDesaisie.length;                     //recupere la longueur de mon array 
    valeurMax = Math.max(...nombreDesaisie);                //fonction JS valeur max
    valeurMin = Math.min(...nombreDesaisie);                //fonction JS valeur min
};

somme = nombreDesaisie.reduce(addition);                    //affectation de mon resultat addition dans somme                  

// console.log (somme);
// console.log ("somme "+ somme);
// console.log (valeurMax);                                  // test dans ma console
// console.log (valeurMin);
// moyenne(nombreDesaisie);

alert (longueurTab+" Nombres saisie\n" + "Compris entre "+valeurMin+" et "+valeurMax + "\nPour une somme de "+ somme +"\nEt pour une moyenne de "+ moyenne(nombreDesaisie));