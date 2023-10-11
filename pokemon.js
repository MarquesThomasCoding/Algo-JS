// Création de la classe Pokemon

class Pokemon {
    // Constructeur de la classe Pokemon, avec les paramètres name, attack, defense, hp et luck
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    // Fonction isLucky qui retourne un booléen en fonction de si la chance du pokemon est supérieure à un nombre aléatoire
    isLucky() {
        return Math.random() > this.luck
    }

    // Fonction attackPokemon qui prend en paramètre un pokemon et qui lui inflige des dégats, tout en affichant les dégats infligés et les points de vie restants
    attackPokemon(enemy) {
        let degats = this.attack - enemy.defense
        enemy.hp -= degats
        console.log(enemy.name + " a " + enemy.hp + " points de vie et a subit " + degats + " points de dégats.")
        // Si les points de vie du pokemon sont inférieurs ou égaux à 0, on affiche qu'il est mort
        if(enemy.hp <= 0) console.log(enemy.name + " est mort. Il a perdu le combat")
    }
}

// Création de deux pokemons
pokemon1 = new Pokemon("Pikachu", 30, 25, 30, 0.5)
pokemon2 = new Pokemon("Tortank", 30, 25, 30, 0.4)


// Tant que les points de vie des deux pokemons sont supérieurs à 0, on continue le combat (aucun n'est mort)
while(pokemon1.hp > 0 && pokemon2.hp > 0) {
    // On affiche le pokemon qui attaque
    console.log(pokemon1.name + " attaque " + pokemon2.name)

    // On vérifie si le pokemon1 est chanceux, si oui, on attaque le pokemon2, sinon on affiche qu'il n'a pas de chance
    pokemon1.isLucky() ? pokemon1.attackPokemon(pokemon2) : console.log(pokemon1.name + " n'a pas de chance.")
    // Si le pokemon2 est mort, on arrête la boucle
    if(pokemon2.hp <= 0) break

    // On affiche le pokemon qui attaque
    console.log(pokemon2.name + " attaque " + pokemon1.name)

    // On vérifie si le pokemon2 est chanceux, si oui, on attaque le pokemon1, sinon on affiche qu'il n'a pas de chance
    pokemon2.isLucky() ? pokemon2.attackPokemon(pokemon1) : console.log(pokemon2.name + " n'a pas de chance.")
    // Si le pokemon1 est mort, on arrête la boucle
    if(pokemon1.hp <= 0) break
}