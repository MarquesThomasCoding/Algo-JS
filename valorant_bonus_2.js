// Valorant

let nbManchesEquipe1 = 0
let nbManchesEquipe2 = 0
let manches = 0

let spike = false

console.log("Le match commence ! Le premier à 13 manches de gagnées remporte la victoire !\n.")

while(nbManchesEquipe1 < 13 && nbManchesEquipe2 < 13) {
    let equipe1 = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]
    let equipe2 = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]

    let rdmEquipe = Math.random()
    let player1 = equipe1[Math.floor(Math.random()*equipe1.length)]
    let player2 = equipe2[Math.floor(Math.random()*equipe2.length)]

    let rdmJettAttack = Math.random()

    if((manches % 3 === 0 && player1 === "Jett" && rdmJettAttack < 0.8) || rdmEquipe < 0.5) {
        equipe2.splice(equipe2.indexOf(player2), 1)
        console.log(player2 + ", des défenseurs, a été éliminé par " + player1 + ". Encore " + equipe2.length + " joueurs dans cette équipe.")

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
        equipe1.splice(equipe1.indexOf(player1), 1)
        console.log(player1 + ", des attaquants, a été éliminé par " + player2 + ". Encore " + equipe1.length + " joueurs dans cette équipe.")

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

    while(equipe1.length != 0 && equipe2.length != 0) {
        let player1 = equipe1[Math.floor(Math.random()*equipe1.length)]
        let player2 = equipe2[Math.floor(Math.random()*equipe2.length)]

        let rdmProbaOfVictory = Math.random()

        let rdmOmenSmoke = Math.random()

        if(spike) {
            if(rdmProbaOfVictory < 0.7) {
                equipe2.splice(equipe2.indexOf(player2), 1)
                console.log(player2 + ", des défenseurs, a été éliminé par " + player1 + ". Encore " + equipe2.length + " joueurs dans cette équipe.")
            }
            else {
                equipe1.splice(equipe1.indexOf(player1), 1)
                console.log(player1 + ", des attaquants, a été éliminé par " + player2 + ". Encore " + equipe1.length + " joueurs dans cette équipe.")
            }
        }

        else {
            if(player1 === "Omen" && rdmOmenSmoke < 0.5) {
                probaOfVictory = 0.6
                console.log("Omen lance une smoke !")
            }

            if(rdmProbaOfVictory < probaOfVictory) {
                equipe2.splice(equipe2.indexOf(player2), 1)
                console.log(player2 + ", des défenseurs, a été éliminé par " + player1  + ". Encore " + equipe2.length + " joueurs dans cette équipe.")
            }
            else {
                equipe1.splice(equipe1.indexOf(player1), 1)
                console.log(player1 + ", des attaquants, a été éliminé par " + player2 + ". Encore " + equipe1.length + " joueurs dans cette équipe.")
            }
        }
    }

    manches++

    if(equipe1.length === 0) {
        nbManchesEquipe2++
        console.log(".\nManche " + manches + " remportée par l'équipe des défenseurs ! Ils sont à " + nbManchesEquipe2 + " manches de gagnées.\n.\n")
    }
    else {
        nbManchesEquipe1++
        console.log(".\nManche " + manches + " remportée par l'équipe des attaquants ! Ils sont à " + nbManchesEquipe1 + " manches de gagnées.\n.\n")
    }
}

if(nbManchesEquipe1 === 13) console.log(".\nMatch terminé ! L'équipe des attaquants remporte la victoire !")
else console.log(".\nMatch terminé ! L'équipe des défenseurs remporte la victoire !")