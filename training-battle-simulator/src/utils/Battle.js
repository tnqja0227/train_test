import { useState } from 'react';

class Battle {
    constructor(player, opponent) {
        this.player = player;
        this.opponent = opponent;
        this.turn = 'player'; // 'player' or 'opponent'
        this.battleLog = [];
        this.isBattleActive = false;
    }

    startBattle() {
        this.isBattleActive = true;
        this.battleLog.push('Battle started!');
    }

    endBattle(winner) {
        this.isBattleActive = false;
        this.battleLog.push(`${winner} wins the battle!`);
    }

    switchTurn() {
        this.turn = this.turn === 'player' ? 'opponent' : 'player';
    }

    attack(attacker, defender) {
        if (!this.isBattleActive) {
            return 'Battle is not active.';
        }

        const damage = this.calculateDamage(attacker, defender);
        defender.health -= damage;
        this.battleLog.push(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);

        if (defender.health <= 0) {
            this.endBattle(attacker.name);
        } else {
            this.switchTurn();
        }
    }

    calculateDamage(attacker, defender) {
        // Basic damage calculation logic
        return Math.max(0, attacker.attack - defender.defense);
    }

    getBattleLog() {
        return this.battleLog;
    }
}

export default Battle;