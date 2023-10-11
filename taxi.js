let Personnage = {
    prenom: "John",
    sante: 10
}

const musiques = ["Anissa - Wejdene", "Thriller - Mickael Jakson", "Comme d'habitude - Claude François", "S.T.A.Y - Hans Zimmer", "Watermelon Sugar - Harry Styles"]

let changeMusique = () => {
    return musiques[Math.floor(Math.random()*musiques.length)]
}

let changementsTaxi = 0

for(let i = 29; i >= 0; i--) {
    let radio = changeMusique()

    if(radio === "Anissa - Wejdene") {
        Personnage.sante -= 1
        changementsTaxi ++
    }
    console.log("Musique : " + radio + "\nFeux restants : " + i + "\nSanté mentale : " + Personnage.sante)

    if(Personnage.sante === 0) {
        console.log("Explosion de John")
        break
    }

    if(i === 0) {
        console.log("John est bien arrivé à destination, en changeant " + changementsTaxi + " fois de taxi.")
    }
}