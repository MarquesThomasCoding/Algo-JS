class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() > this.luck
    }

    attackPokemon(enemy) {
        let degats = this.attack - enemy.defense
        enemy.hp -= degats
        console.log(enemy.name + " a " + enemy.hp + " points de vie et a subit " + degats + " points de dégats.")
        if(enemy.hp <= 0) console.log(enemy.name + " est mort. Il a perdu le combat")
    }
}

pokemon1 = new Pokemon("Pikachu", 30, 25, 30, 0.5)
pokemon2 = new Pokemon("Tortank", 30, 25, 30, 0.4)



while(pokemon1.hp > 0 && pokemon2.hp > 0) {
    console.log(pokemon1.name + " attaque " + pokemon2.name)

    pokemon1.isLucky() ? pokemon1.attackPokemon(pokemon2) : console.log(pokemon1.name + " n'a pas de chance.")
    if(pokemon2.hp <= 0) break


    console.log(pokemon2.name + " attaque " + pokemon1.name)

    pokemon2.isLucky() ? pokemon2.attackPokemon(pokemon1) : console.log(pokemon2.name + " n'a pas de chance.")
    if(pokemon1.hp <= 0) break
}