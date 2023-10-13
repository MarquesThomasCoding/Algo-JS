// Valorant bonus 1 : Attaque de Jett

let nbManchesattaquants = 0
let nbManchesdefenseurs = 0
let manches = 0

let spike = false

console.log("Le match commence ! Le premier à 13 manches gagnées remporte la victoire !\n.")

while(nbManchesattaquants < 13 && nbManchesdefenseurs < 13) {
    let attaquants = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]
    let defenseurs = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]

    let rdmEquipe = Math.random()
    let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
    let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

    let rdmJettAttack = Math.random()

    if((manches % 3 === 0 && attaquant === "Jett" && rdmJettAttack < 0.8) || rdmEquipe < 0.5) {
        defenseurs.splice(defenseurs.indexOf(defenseur), 1)
        console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")

        let rdmSpike = Math.random()
        if(rdmSpike < 0.6) {
            spike = true
            console.log("Le spike a été amorcé")
        }
        else {
            console.log("Le spike n'a pas été amorcé")
        }
    }
    else {
        attaquants.splice(attaquants.indexOf(attaquant), 1)
        console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")

        let rdmSpike = Math.random()
        if(rdmSpike < 0.4) {
            spike = true
            console.log("Le spike a été amorcé")
        }
        else {
            console.log("Le spike n'a pas été amorcé")
        }
    }

    while(attaquants.length != 0 && defenseurs.length != 0) {
        let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
        let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

        let rdmProbaOfVictory = Math.random()

        if(spike) {
            if(rdmProbaOfVictory < 0.7) {
                defenseurs.splice(defenseurs.indexOf(defenseur), 1)
                console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")
            }
            else {
                attaquants.splice(attaquants.indexOf(attaquant), 1)
                console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")
            }
        }

        else {
            if(rdmProbaOfVictory < 0.5) {
                defenseurs.splice(defenseurs.indexOf(defenseur), 1)
                console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant  + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")
            }
            else {
                attaquants.splice(attaquants.indexOf(attaquant), 1)
                console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")
            }
        }
    }

    manches++

    if(attaquants.length === 0) {
        nbManchesdefenseurs++
        console.log(".\nManche " + manches + " remportée par l'équipe des défenseurs ! Ils sont à " + nbManchesdefenseurs + " manches de gagnées.\n.\n")
    }
    else {
        nbManchesattaquants++
        console.log(".\nManche " + manches + " remportée par l'équipe des attaquants ! Ils sont à " + nbManchesattaquants + " manches de gagnées.\n.\n")
    }
}

if(nbManchesattaquants === 13) console.log(".\nMatch terminé ! L'équipe des attaquants remporte la victoire !")
else console.log(".\nMatch terminé ! L'équipe des défenseurs remporte la victoire !")