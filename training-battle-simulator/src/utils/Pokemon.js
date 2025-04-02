export default class Pokemon {
    constructor(id, name, type, stats) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.stats = stats; // stats should be an object containing various stats like HP, Attack, Defense, etc.
    }

    getType() {
        return this.type;
    }

    getStats() {
        return this.stats;
    }

    calculateDamage(opponent) {
        // Implement damage calculation logic based on types and stats
        let damage = this.stats.attack - opponent.stats.defense;
        return damage > 0 ? damage : 0; // Ensure damage is not negative
    }

    isFainted() {
        return this.stats.hp <= 0;
    }
}