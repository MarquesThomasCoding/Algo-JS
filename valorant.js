// Valorant

let nbManchesEquipe1 = 0
let nbManchesEquipe2 = 0
let manches = 0

let spike = false

while(nbManchesEquipe1 < 13 && nbManchesEquipe2 < 13) {
    let equipe1 = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]
    let equipe2 = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]

    let rdmEquipe = Math.random()
    let player1 = equipe1[Math.floor(Math.random()*equipe1.length)]
    let player2 = equipe2[Math.floor(Math.random()*equipe2.length)]

    if(rdmEquipe < 0.5) {
        equipe2.splice(equipe2.indexOf(player2), 1)
        console.log(player2 + ", des défenseurs, a été éliminé par " + player1)

        let rdmSpike = Math.random()
        if(rdmSpike < 0.6) {
            spike = true
            console.log("Le spike a été posé")
        }
        else {
            console.log("Le spike n'a pas été posé")
        }
    }
    else {
        equipe1.splice(equipe1.indexOf(player1), 1)
        console.log(player1 + ", des attaquants, a été éliminé par " + player2)

        let rdmSpike = Math.random()
        if(rdmSpike < 0.4) {
            spike = true
            console.log("Le spike a été posé")
        }
        else {
            console.log("Le spike n'a pas été posé")
        }
    }

    while(equipe1.length != 0 && equipe2.length != 0) {
        let player1 = equipe1[Math.floor(Math.random()*equipe1.length)]
        let player2 = equipe2[Math.floor(Math.random()*equipe2.length)]

        let probaOfVictory = Math.random()

        switch(spike) {
            case true:
                if(probaOfVictory < 0.7) {
                    equipe2.splice(equipe2.indexOf(player2), 1)
                    console.log(player2 + ", des défenseurs, a été éliminé par " + player1)
                }
                else {
                    equipe1.splice(equipe1.indexOf(player1), 1)
                    console.log(player1 + ", des attaquants, a été éliminé par " + player2)
                }

                break

            case false:                
                if(probaOfVictory < 0.5) {
                    equipe2.splice(equipe2.indexOf(player2), 1)
                    console.log(player2 + ", des défenseurs, a été éliminé par " + player1)
                }
                else {
                    equipe1.splice(equipe1.indexOf(player1), 1)
                    console.log(player1 + ", des attaquants, a été éliminé par " + player2)
                }

                break

        }
    }

    manches++

    if(equipe1.length === 0) {
        nbManchesEquipe2++
        console.log("Manche " + manches + " remportée par l'équipe des défenseurs ! Ils sont à " + nbManchesEquipe2 + " manches de gagnées.")
    }
    else {
        nbManchesEquipe1++
        console.log("Manche " + manches + " remportée par l'équipe des attaquants ! Ils sont à " + nbManchesEquipe1 + " manches de gagnées.")
    }
}

if(nbManchesEquipe1 === 13) console.log("Match terminé ! L'équipe des attaquants remporte la victoire !")
else console.log("Match terminé ! L'équipe des défenseurs remporte la victoire !")