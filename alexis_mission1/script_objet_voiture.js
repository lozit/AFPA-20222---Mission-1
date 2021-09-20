// creer un objet avec class
class Voiture{

    #immatriculation = String;
    #couleur = String;
    #poids = Int8Array;
    #puissance = Int8Array;
    #capaciteDuReservoir = Int8Array;
    #niveauEssence = Int8Array;
    #nombrePlace = Int8Array;
    #assure = Boolean;
    #messageTableauDeBord = String;

    // constructor = constructeur, recupere les parametres, est permet de les stocker dans des propriétés.
    constructor (immatriculation,couleur,poids,puissance, capaciteDuReservoir,niveauEssence,nombrePlace,assure,messageTableauDeBord){
        this.#immatriculation        = immatriculation;         //propriété immatruculation ect...
        this.#couleur                = couleur;
        this.#poids                  = poids;
        this.#puissance              = puissance;
        this.#capaciteDuReservoir    = capaciteDuReservoir;
        this.#niveauEssence          = niveauEssence;
        this.#nombrePlace            = nombrePlace;
        this.#assure                 = assure;
        this.#messageTableauDeBord   = messageTableauDeBord;
    }

    //Liste des Methodes = fonction que tout les objets peuvent heriter
        //peint la voiture en newcouleur, ou raffraichi si newcouleur=couleur de base. Affecte la nouvelle couleur a mon objet
    repeindre (newCouleur){
        if (newCouleur == this.#couleur) {
            console.log ("Merci pour le rafraichissement!!");
        } else{
            this.#couleur = newCouleur
            console.log ("voiture repeinte en "+ this.#couleur);
        }
    };
        // Methode permet de savoir le niveau du plein, on peut rajouter, si on ajoute trop, message d'erreur
    mettreEssence (quantiteEssence){
        if ((this.#capaciteDuReservoir - this.#niveauEssence) >= quantiteEssence) {
            quantiteEssence = this.#niveauEssence + quantiteEssence;
            this.#niveauEssence = quantiteEssence;
            console.log ("Vous avez "+this.#niveauEssence+" L disponible");
        }
        else{
            console.log ("Le reservoir est trop petit");
        }
    };
        // Methode calcule le reste du plein selon la vitesse et la distance parcouru.
    seDeplacer (distanceKm, vitesse){
        if (vitesse <= 50) {
            consommation (10,distanceKm,this.#niveauEssence);
            // console.log (this.niveauEssence);
            // console.log (restePlein);
            if (restePlein <= 0) {
                console.log ("Le trajet est impossible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L \nVous roulez en ville.");
            }
        }
        if (vitesse >=50 && vitesse <= 90) {
            consommation (5,distanceKm,this.#niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est impossible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L \nVous roulez sur la national.");
            }
        }
        if (vitesse >=90 && vitesse <= 130) {
            consommation (8,distanceKm,this.#niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est impossible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L \nVous roulez sur l'autoroute.");
            }
        }
        if (vitesse > 130) {
            consommation (12,distanceKm,this.#niveauEssence);
            if (restePlein <= 0) {
                console.log ("Le trajet est impossible");
            }
            else{
                console.log ("Il vous reste "+restePlein+" L\nMais tu n'a plus de permis ksos");
            }
        }
    };
        //methode qui affiche des donnees

    toString (){
        console.log ("l'immatriculation est " +this.#immatriculation+ "\n la puissance est " +this.#puissance+" ch"+"\n la couleur est : "+this.#couleur);
    }
    
        // Un getter accesseur premet de récupérer une propriété
    get getterAssurance (){
        return this.#assure;
    }
    // Un setter mutateur permet de definir une propriété
    set getterAssurance (valeur){
        if (valeur == true || valeur == false) {
            this.#assure = valeur;
        }else{
           console.log ("valeur impossible");
        }
    }

    get getterTableauBord (){
        return this.#messageTableauDeBord;
    }
    set getterTableauBord (valeur2){
        valeur2 = console.log ("vous avait " + this.#niveauEssence+" L d'essence");

    }

}
        //Fonction de calcule de reste de plein.
        function consommation(nbEssence, nbKm, nivEssence) {
            valeur = (nbEssence * nbKm) / 100;
            restePlein = nivEssence - valeur;
            return restePlein;
        }

// creation de mon objet blanche issue du constructeur Voiture.
var blanche = new Voiture ('CD-4352-BG','jaune',1000,95,150,45,7,false,'yo!!');
blanche.getterAssurance = true;
console.log (blanche.getterAssurance)
// affiche mon objet
console.log (blanche);
//repeint en vert
blanche.repeindre ("bleu");
// ajoute de l'essence
blanche.mettreEssence (60);
console.log (50); //affiche le nouveau niveau d'essence actuelle apres le plein
// permet de savoir si le trajet est possible
blanche.seDeplacer(600,40);
// affichage des parametres de la voiture
blanche.toString();