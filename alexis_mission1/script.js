let saisieClavier;
let nombreDesaisie = [];
let moyenne = 0;
do{
   saisieClavier = Number (prompt ("Entrer un nombre"));
   nombreDesaisie.push (saisieClavier);
}
while (saisieClavier != 0) {
    console.log (nombreDesaisie.length-1);
    function getMaxTableau(nombreDesaisie) {
      return Math.max.apply(null, nombreDesaisie);
  }
};
console.log (nombreDesaisie);



// const arr = [1, 2, 3, 4];
// const reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));


// console.log (nombreDesaisie);