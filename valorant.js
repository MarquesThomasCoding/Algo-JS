// Valorant

// Initialisation du nombre de manches gagnées par les attaquants et les défenseurs, et du nombre de manches jouées
let nbManchesattaquants = 0
let nbManchesdefenseurs = 0
let manches = 0

// Initialisation de la variable qui détermine si le spike a été amorcé ou non
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

// Tant qu'aucune équipe n'a remporté 13 manches, on continue de jouer
while(nbManchesattaquants < 13 && nbManchesdefenseurs < 13) {
    // Initialisation des équipes
    let attaquants = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]
    let defenseurs = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"]

    // Choix aléatoire d'une équipe et des joueurs qui vont s'affronter
    let rdmEquipe = Math.random()
    let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
    let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

    // Si le nombre aléatoire représentant l'équipe est inférieur à 0.5, alors c'est l'équipe des attaquants qui commence
    if(rdmEquipe < 0.5) {
        // On retire le joueur éliminé de l'équipe des défenseurs, et on l'affiche dans la console
        defenseurs.splice(defenseurs.indexOf(defenseur), 1)
        console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")

        // On appelle la fonction amorceSpike avec la bonne probabilité
        amorceSpike(0.6)
    }
    // Sinon, c'est l'équipe des défenseurs qui commence
    else {
        // On retire le joueur éliminé de l'équipe des attaquants, et on l'affiche dans la console
        attaquants.splice(attaquants.indexOf(attaquant), 1)
        console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")

        // On appelle la fonction amorceSpike avec la bonne probabilité
        amorceSpike(0.4)
    }

    // Tant qu'aucune équipe n'est éliminée, on continue de jouer la manche
    while(attaquants.length != 0 && defenseurs.length != 0) {
        // Choix aléatoire d'un joueur attaquant et d'un joueur défenseur
        let attaquant = attaquants[Math.floor(Math.random()*attaquants.length)]
        let defenseur = defenseurs[Math.floor(Math.random()*defenseurs.length)]

        // Choix aléatoire d'un nombre qui déterminera si le joueur attaquant va gagner le duel
        let rdmProbaOfVictory = Math.random()

        // Si le spike a été amorcé, alors la probabilité de gagner le duel est de 70% pour le joueur attaquant, et donc 30 pour le défenseur
        if(spike) {
            if(rdmProbaOfVictory < 0.7) {
                // On retire le joueur éliminé de l'équipe des défenseurs, et on l'affiche dans la console
                defenseurs.splice(defenseurs.indexOf(defenseur), 1)
                console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")
            }
            else {
                // On retire le joueur éliminé de l'équipe des attaquants, et on l'affiche dans la console
                attaquants.splice(attaquants.indexOf(attaquant), 1)
                console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")
            }
        }

        // Sinon, si le spike n'a pas été amorcé, alors la probabilité de gagner le duel est de 50% pour chaque joueur
        else {
            if(rdmProbaOfVictory < 0.5) {
                // On retire le joueur éliminé de l'équipe des défenseurs, et on l'affiche dans la console
                defenseurs.splice(defenseurs.indexOf(defenseur), 1)
                console.log(defenseur + ", des défenseurs, a été éliminé par " + attaquant  + ". Encore " + defenseurs.length + " joueurs dans cette équipe.")
            }
            else {
                // On retire le joueur éliminé de l'équipe des attaquants, et on l'affiche dans la console
                attaquants.splice(attaquants.indexOf(attaquant), 1)
                console.log(attaquant + ", des attaquants, a été éliminé par " + defenseur + ". Encore " + attaquants.length + " joueurs dans cette équipe.")
            }
        }
    }

    // +1 au nombre de manches jouées
    manches++

    // Si c'est l'équipe des attaquants qui a été éliminée, +1 au nombre de manches remportées par les défenseurs
    if(attaquants.length === 0) {
        nbManchesdefenseurs++
        console.log(".\nManche " + manches + " remportée par l'équipe des défenseurs ! Ils ont gagné " + nbManchesdefenseurs + " manches.\n.\n")
    }
    // Sinon, +1 au nombre de manches remportées par les attaquants
    else {
        nbManchesattaquants++
        console.log(".\nManche " + manches + " remportée par l'équipe des attaquants ! Ils ont gagné " + nbManchesattaquants + " manches.\n.\n")
    }
}

// Si ce sont les attaquants qui ont gagné 13 manches, on affiche leur victoire
if(nbManchesattaquants === 13) console.log(".\nMatch terminé ! L'équipe des attaquants remporte la victoire !")
// Sinon on affiche la victoire des défenseurs
else console.log(".\nMatch terminé ! L'équipe des défenseurs remporte la victoire !")