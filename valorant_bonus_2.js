// Valorant bonus 2 (et 1) : Attaque de Jett + Smoke d'Omen

let nbManchesAttaquants = 0
let nbManchesDefenseurs = 0
let manches = 0

let spike = false

// Fonction pour amorcer le spike en fonction de sa probabilité de l'être
amorceSpike = (proba) => {
    let rdmSpike = Math.random()
    if(rdmSpike < proba) {
        spike = true
        console.log("Le spike a été amorcé")
    }
    else {
        console.log("Le spike n'a pas été amorcé")
    }
}

console.log("Le match commence ! Le premier à 13 manches gagnées remporte la victoire !\n.")

while(nbManchesAttaquants < 13 && nbManchesDefenseurs < 13) {
    let attaquants = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]
    let defenseurs = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]

    let rdmEquipe = Math.random()
    let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
    let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

    let rdmJettAttack = Math.random()

    if((manches % 3 === 0 && attaquant === "Jett" && rdmJettAttack < 0.8) || rdmEquipe < 0.5) {
        defenseurs.splice(defenseurs.indexOf(defenseur), 1)
        console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")

        amorceSpike(0.6)
    }
    else {
        attaquants.splice(attaquants.indexOf(attaquant), 1)
        console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")

        amorceSpike(0.4)
    }

    let probaOfVictory = 0.5

    while(attaquants.length != 0 && defenseurs.length != 0) {
        let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
        let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

        let rdmProbaOfVictory = Math.random()

        let rdmOmenSmoke = Math.random()

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
            if(attaquant === "Omen" && rdmOmenSmoke < 0.5) {
                probaOfVictory = 0.6
                console.log("Omen lance une smoke !")
            }

            if(rdmProbaOfVictory < probaOfVictory) {
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
        nbManchesDefenseurs++
        console.log(".\nManche " + manches + " remportée par l'équipe des défenseurs ! Ils ont gagné " + nbManchesDefenseurs + " manches.\n.\n")
    }
    
    else {
        nbManchesAttaquants++
        console.log(".\nManche " + manches + " remportée par l'équipe des attaquants ! Ils ont gagné " + nbManchesAttaquants + " manches.\n.\n")
    }
}

if(nbManchesAttaquants === 13) console.log(".\nMatch terminé ! L'équipe des attaquants remporte la victoire !")
else console.log(".\nMatch terminé ! L'équipe des défenseurs remporte la victoire !")