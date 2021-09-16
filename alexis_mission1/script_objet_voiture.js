// let chien = {
//     race: 'shiba',
//     poil:'Court',
//     aboyer: function(){
//         console.log ("waf waf");
//     }
// };

// chien.aboyer();

// oN crée une fonction constructeur

function Utilisateur(prenom, nom,mail) 
{
    this.prenom = prenom;
    this.nom = nom;
    this.mail = mail;
    this.sePresenter = ()=>{console.log ("hello" + this.prenom)};
};

// on crée un objet
var jean = new Utilisateur ("jean","dupond","jeandupond0yiaegfd.com");
var billi = new Utilisateur ("billi","tdc","ydzhod");

jean.sePresenter();
billi.sePresenter();

console.log (billi.mail);

billi.poste = "chaumeur";
console.log (billi);
console.log (jean);

function Logement(type, annee, placedeparking,proprietaire){
    this.type = type;
    this.annee = annee;
    this.placedeparking = placedeparking;
    this.proprietaire = proprietaire;
};
var appartementA = new Logement ('appart', 2020, false, billi);
console.log (appartementA.proprietaire.prenom);


// creer un objet la class
class Voiture{
    // constructor = constructeur, recupere les parametres, est permet de les stocker dans des propriétés.
    constructor (immatriculation,couleur,poids,puissance, capaciteDuReservoir,niveauEssence,nombrePlace,assure,messageTableauDeBord){
        this.immatriculation        = immatriculation;         //propriété immatruculation ect...
        this.couleur                = couleur;
        this.poids                  = poids;
        this.puissance              = puissance;
        this.capaciteDuReservoir    = capaciteDuReservoir;
        this.niveauEssence          = niveauEssence;
        this.nombrePlace            = nombrePlace;
        this.assure                 = assure;
        this.messageTableauDeBord   = messageTableauDeBord;
    }

    //Liste des Methodes = fonction que tout les objets peuvent heriter
        //peint la voiture en newcouleur, ou raffraichi si newcouleur=couleur de base. Affecte la nouvelle couleur a mon objet
    repeindre (newCouleur){
        if (newCouleur == this.couleur) {
            console.log ("Merci pour le rafraichissement!!");
        } else{
            this.couleur = newCouleur
            console.log ("voiture repeinte en "+ this.couleur);
        }
    };
        // Methode permet de savoir le niveau du plein, on peut rajouter, si on ajoute trop, message d'erreur
    mettreEssence (quantiteEssence){
        if ((this.capaciteDuReservoir - this.niveauEssence) >= quantiteEssence) {
            quantiteEssence = this.niveauEssence + quantiteEssence;
            this.niveauEssence = quantiteEssence;
            console.log ("Vous avez "+quantiteEssence+" L disponible");
        }
        else{
            console.log ("Le reservoir est trop petit");
        }
    };
        // Methode calcule le reste du plein selon la vitesse et la distance parcouru.
    seDeplacer (distanceKm, vitesse){
        if (vitesse <= 50) {
            consommation (10,distanceKm,this.niveauEssence);
            console.log (this.niveauEssence);
            console.log (restePlein);
            if (restePlein <= 0) {
                console.log ("Le trajet est impoosible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L");
            }
        }
        if (vitesse >=50 && vitesse <= 90) {
            consommation (5,distanceKm,this.niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est impoosible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L");
            }
        }
        if (vitesse >=90 && vitesse <= 130) {
            consommation (8,distanceKm,this.niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est impoosible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L");
            }
        }
        if (vitesse > 130) {
            consommation (12,distanceKm,this.niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est imposible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L\nMais tu n'a plus de permis ksos");
            }
        }
    };
        //methode qui affiche des donnees

    toString (){
        console.log ("l'immatriculation est " +this.immatriculation+ "\n la puissance est " +this.puissance+" ch"+"\n la couleur est : "+this.couleur);
    }

}
        //Fonction de calcule de reste de plein.
        function consommation(nbEssence, nbKm, nivEssence) {
            valeur = (nbEssence * nbKm) / 100;
            restePlein = nivEssence - valeur;
            return restePlein;
        }

// creation de mon objet blanche issue du constructeur Voiture.
var blanche = new Voiture ('CD-4352-BG','blanc',1000,95,150,45,7,true,'yo!!');
// affiche mon objet
console.log (blanche);
//repeint en vert
blanche.repeindre ("vert");
// ajoute de l'essence
blanche.mettreEssence (30);
console.log (blanche.niveauEssence);
blanche.seDeplacer(600,150);
blanche.toString();