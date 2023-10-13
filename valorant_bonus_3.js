// Valorant bonus 3 (et 1 et 2) : Attaque de Jett, Smoke d'Omen et Flash de Phoenix

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

    let probaOfVictory = 0.5

    while(attaquants.length != 0 && defenseurs.length != 0) {
        let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
        let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

        let rdmProbaOfVictory = Math.random()

        let rdmOmenSmoke = Math.random()
        let rdmPhoenixFlash = Math.random()
        let chanceOfBlind = Math.random()

        if(spike) probaOfVictory = 0.7

        if(attaquant === "Phoenix" && rdmPhoenixFlash < 0.5) {
            console.log("Phoenix lance une flash !")
            if(chanceOfBlind < 0.8) {
                probaOfVictory = 0.6
                console.log("Sa flash aveugle les ennemis !")
            }
            else {
                probaOfVictory = 0.3
                console.log("Sa flash aveugle ses alliés !")
            }
        }

        if(spike) {
            if(rdmProbaOfVictory < probaOfVictory) {
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
        nbManchesdefenseurs++
        console.log(".\nManche " + manches + " remportée par l'équipe des défenseurs ! Ils ont gagné " + nbManchesdefenseurs + " manches.\n.\n")
    }
    
    else {
        nbManchesattaquants++
        console.log(".\nManche " + manches + " remportée par l'équipe des attaquants ! Ils ont gagné " + nbManchesattaquants + " manches.\n.\n")
    }
}

if(nbManchesattaquants === 13) console.log(".\nMatch terminé ! L'équipe des attaquants remporte la victoire !")
else console.log(".\nMatch terminé ! L'équipe des défenseurs remporte la victoire !")