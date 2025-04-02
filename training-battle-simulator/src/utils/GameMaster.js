export default class GameMaster {
    constructor() {
        this.data = {};
        this.rankings = [];
        this.trainRankings = [];
        this.groups = [];
        this.teamPools = [];
        this.loadedData = 0;
        this.allPokemon = {};
    }

    loadGameData(gmVersion, webRoot, siteVersion) {
        const url = `${webRoot}data/${gmVersion}.json?v=${siteVersion}`;
        
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                this.data = data;
                this.sortPokemon();
                this.updateFormatSelect();
                this.updateCupSelect();
            })
            .catch(error => {
                console.error("Error loading game data:", error);
            });
    }

    sortPokemon() {
        if (this.data.pokemon) {
            this.data.pokemon.sort((a, b) => (a.speciesName > b.speciesName) ? 1 : -1);
        }
    }

    updateFormatSelect() {
        if (typeof updateFormatSelect === "function") {
            updateFormatSelect(this.data.formats);
        }
    }

    updateCupSelect() {
        if (typeof updateCupSelect === "function") {
            updateCupSelect(this.data.formats);
        }
    }

    getAllPokemon(battle) {
        const key = battle.getCP();
        if (!this.allPokemon.hasOwnProperty(key)) {
            this.allPokemon[key] = []; // Initialize if not present
        }
        return this.allPokemon[key];
    }

    getPokemonById(id) {
        id = id.replace("_xl", "");
        return this.data.pokemon.find(poke => poke.id === id);
    }

    getPokemonByFamily(familyId) {
        return this.data.pokemon.filter(poke => poke.familyId === familyId);
    }

    getPokemonForms(dex) {
        return this.data.pokemon.filter(poke => poke.dex === dex);
    }

    getPokemonTier(id, cup) {
        // Implement logic to return the point value of a Pokemon in a tiered meta
    }
}