class Player {
    constructor(name) {
        this.name = name;
        this.team = [];
        this.currentPokemon = null;
        this.health = 100; // Default health
    }

    selectPokemon(pokemon) {
        if (this.team.includes(pokemon)) {
            this.currentPokemon = pokemon;
        } else {
            console.error("Pokemon not in team");
        }
    }

    addPokemonToTeam(pokemon) {
        if (this.team.length < 6) {
            this.team.push(pokemon);
        } else {
            console.error("Team is full");
        }
    }

    removePokemonFromTeam(pokemon) {
        const index = this.team.indexOf(pokemon);
        if (index > -1) {
            this.team.splice(index, 1);
        } else {
            console.error("Pokemon not found in team");
        }
    }

    healPokemon() {
        if (this.currentPokemon) {
            this.currentPokemon.health = 100; // Reset health to 100
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.name} has fainted!`);
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

export default Player;