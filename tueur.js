let Tueur = {
    prenom: "Jason",
    ptsVie: 100
}

const Caracteristiques = [
    Nerd = {
        probaMort: 0.5,
        probaDegats: 0.3,
        probaMortDegats: 0.2
    },
    Blonde = {
        probaMort: 0.7,
        probaDegats: 0.2,
        probaMortDegats: 0.4
    },
    Sportif = {
        probaMort: 0.2,
        probaDegats: 0.6,
        probaMortDegats: 0.2
    }
]

const prenoms = ["Paul", "Karen", "Tim", "Jeffrey", "Marie", "Laura", "Thomas", "Hélène", "Maxime", "Françoise"]

let Survivants = [
    Survivant1 = {
        prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
        caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
        mort: false
    },
    Survivant2 = {
        prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
        caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
        mort: false
    },
    Survivant3 = {
        prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
        caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
        mort: false
    },
    Survivant4 = {
        prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
        caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
        mort: false
    },
    Survivant5 = {
        prenom: prenoms[Math.floor(Math.random()*prenoms.length)],
        caracteristique: Caracteristiques[Math.floor(Math.random()*Caracteristiques.length)],
        mort: false
    }
]

let survivantsAlive = 5

while(Tueur.ptsVie > 0 && survivantsAlive > 0) {
    Survivants.forEach((survivant) => {
        if(survivant.mort) return
        let rdmMort = Math.random()
        let rdmDegats = Math.random()
        let rdmMortDegats = Math.random()

        if(survivant.caracteristique.probaMort >= rdmMort) {
            survivant.mort = true
            survivantsAlive -= 1
            console.log("Jason a tué " + survivant.prenom)
        }
        else if(survivant.caracteristique.probaDegats >= rdmDegats) {
            Tueur.ptsVie -= 10
            console.log(survivant.prenom + " esquive et inflige 10 points de dégâts")
        }
        else if(survivant.caracteristique.probaMortDegats >= rdmMortDegats) {
            survivant.mort = true
            survivantsAlive -= 1
            Tueur.ptsVie -= 15
            console.log(survivant.prenom + " inflige 15 points de dégâts mais meurt")
        }
    })
}

if(Tueur.ptsVie <= 0) {
    console.log("Les survivants ont gagné. RIP ")
    Survivants.forEach((survivant) => {
        if(survivant.mort) console.log(survivant.prenom + ", ")
    })
}

else {
    console.log("Jason a gagné. Les morts sont : ")
    Survivants.forEach((survivant) => {
        if(survivant.mort) console.log(survivant.prenom + ", ")
    })
}
