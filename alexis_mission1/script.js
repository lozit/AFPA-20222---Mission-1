let saisieClavier;
let nombreDesaisie = [];
let moyenne = 0;

const addition = (nombreA, nombreB) => nombreA + nombreB; //fonction addition du tableau

do{
   saisieClavier = Number (prompt ("Entrer un nombre"));
   nombreDesaisie.push (saisieClavier);
}
while (saisieClavier != 0) {
    // nombreDesaisie = parseInt (nombreDesaisie);
    moyenne = nombreDesaisie.reduce(addition)/(nombreDesaisie.length-1);
};


console.log (nombreDesaisie.length-1);
console.log (Math.min (nombreDesaisie));
console.log(nombreDesaisie.reduce(addition));
console.log (moyenne);
console.log (nombreDesaisie);
