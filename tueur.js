// Création du tueur Jason
let Tueur = {
    prenom: "Jason",
    ptsVie: 100
}

// Création de la classe Caracteristique
class Caracteristique {
    constructor(probaMort, probaDegats, probaMortDegats) {
        this.probaMort = probaMort
        this.probaDegats = probaDegats
        this.probaMortDegats = probaMortDegats
    }
}

// Création des caractéristiques possibles
const Caracteristiques = [
    Nerd = new Caracteristique(0.5, 0.3, 0.2),
    Blonde = new Caracteristique(0.7, 0.2, 0.4),
    Sportif = new Caracteristique(0.2, 0.6, 0.2)
]

// Création du tableau des prenoms
const prenoms = ["Paul", "Karen", "Tim", "Jeffrey", "Marie", "Laura", "Thomas", "Hélène", "Maxime", "Françoise", "Pierre", "Matt", "Alex", "Mattéo", "Clément", "Victor", "Anne", "Pauline", "Lucie", "Victoria", "Sophie", "Carole", "Elodie"]

// Création du tableau des survivants
let Survivants = []

// Fonction qui va créer 5 survivants aléatoirement
createSurvivants = () => {
    for(let i = 0; i < 5; i++) {
        Survivants.push({
            prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
            caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
            mort: false
        })
    }
}

// On appelle la fonction pour créer les survivants
createSurvivants()

// On définit le nombre de survivants en vie
let survivantsAlive = 5

// Tant que Jason et les survivants sont en vie, on continue la boucle
while(Tueur.ptsVie > 0 && survivantsAlive > 0) {
    // Boucle pour chaque survivant
    Survivants.forEach((survivant) => {
        // Si le survivant est mort, on arrête la boucle
        if(survivant.mort) return

        // On définit les nombres aléatoires pour la probabilité de mort, de dégats et de mort avec dégats
        let rdmMort = Math.random()
        let rdmDegats = Math.random()
        let rdmMortDegats = Math.random()

        // Si la probabilité de mort est supérieure ou égale au nombre aléatoire, le survivant meurt
        if(survivant.caracteristique.probaMort >= rdmMort) {
            survivant.mort = true
            survivantsAlive -= 1
            console.log("Jason a tué " + survivant.prenom)
        }
        // Sinon, si la probabilité de dégats est supérieure ou égale au nombre aléatoire, Jason perd 10 points de vie et le survivant esquive
        else if(survivant.caracteristique.probaDegats >= rdmDegats) {
            Tueur.ptsVie -= 10
            console.log(survivant.prenom + " esquive et inflige 10 points de dégâts")
        }

        // Sinon, si la probabilité de mort en infligeant des dégats est supérieure ou égale au nombre aléatoire, le survivant meurt et Jason perd 15 points de vie
        else if(survivant.caracteristique.probaMortDegats >= rdmMortDegats) {
            survivant.mort = true
            survivantsAlive -= 1
            Tueur.ptsVie -= 15
            console.log(survivant.prenom + " inflige 15 points de dégâts mais meurt")
        }
    })
}

// Si Jason est mort, on affiche que les survivants ont gagné et on affiche les survivants morts
if(Tueur.ptsVie <= 0) {
    console.log("Les survivants ont gagné. RIP ")
    Survivants.forEach((survivant) => {
        if(survivant.mort) console.log(survivant.prenom + ", ")
    })
}

// Sinon, on affiche que Jason a gagné et on affiche les survivants morts
else {
    console.log("Jason a gagné. Les morts sont : ")
    Survivants.forEach((survivant) => {
        if(survivant.mort) console.log(survivant.prenom + ", ")
    })
}