let Personnage = {
    prenom: "John",
    sante: 10
}

const musiques = [
    "Anissa - Wejdene",
    "Thriller - Mickael Jakson",
    "Comme d'habitude - Claude François",
    "S.T.A.Y - Hans Zimmer",
    "Watermelon Sugar - Harry Styles"
]

let trajet = {
    radio: "",
    feux: 30,
    changements: 0
}

let changeMusique = () => {
    return musiques[Math.floor(Math.random()*musiques.length)]
}

for(let i = trajet.feux; i >= 0; i--) {
    trajet.radio = changeMusique()

    if(trajet.radio === "Anissa - Wejdene") {
        Personnage.sante -= 1
        trajet.changements ++
    }
    console.log("Musique : " + trajet.radio + "\nFeux restants : " + i + "\nSanté mentale : " + Personnage.sante)

    if(Personnage.sante === 0) {
        console.log("Explosion de John")
        break
    }

    if(i === 0) {
        console.log("John est bien arrivé à destination, en changeant " + trajet.changements + " fois de taxi.")
    }
}