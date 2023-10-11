// Création du personnage John
let Personnage = {
    prenom: "John",
    sante: 10
}

// Création du tableau de musiques
const musiques = [
    "Anissa - Wejdene",
    "Thriller - Mickael Jakson",
    "Comme d'habitude - Claude François",
    "S.T.A.Y - Hans Zimmer",
    "Watermelon Sugar - Harry Styles"
]

// Création de l'objet trajet
let trajet = {
    radio: "",
    feux: 30,
    changements: 0
}

// Fonction qui retourne une musique aléatoire
let changeMusique = () => {
    return musiques[Math.floor(Math.random()*musiques.length)]
}

// Boucle qui va de 30 à 0 (le nombre de feux)
for(let i = trajet.feux; i >= 0; i--) {
    // On change la musique
    trajet.radio = changeMusique()

    // Si la musique est "Anissa - Wejdene", on enlève 1 point de santé mentale et on ajoute 1 au nombre de changements
    if(trajet.radio === "Anissa - Wejdene") {
        Personnage.sante -= 1
        trajet.changements ++
    }
    // On affiche la musique, les changements et la santé mentale
    console.log("Musique : " + trajet.radio + "\nFeux restants : " + trajet.changements + "\nSanté mentale : " + Personnage.sante)

    // Si la santé mentale est égale à 0, on affiche que John a explosé et on arrête la boucle
    if(Personnage.sante === 0) {
        console.log("Explosion de John")
        break
    }

    // Si le nombre de feux est égal à 0, on affiche que John est bien arrivé à destination et on affiche le nombre de changements
    if(i === 0) {
        console.log("John est bien arrivé à destination, en changeant " + trajet.changements + " fois de taxi.")
    }
}