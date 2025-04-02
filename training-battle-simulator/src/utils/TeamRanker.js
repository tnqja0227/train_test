export const rankTeams = (teams) => {
    // This function ranks teams based on their performance and statistics.
    // The ranking logic can be customized based on specific criteria.

    return teams.sort((teamA, teamB) => {
        // Example ranking criteria: total wins, total battles, etc.
        const scoreA = teamA.wins / (teamA.battles || 1);
        const scoreB = teamB.wins / (teamB.battles || 1);
        return scoreB - scoreA; // Higher score comes first
    });
};

export const calculateTeamStats = (team) => {
    // This function calculates statistics for a given team.
    const totalBattles = team.battles || 0;
    const totalWins = team.wins || 0;
    const winRate = totalBattles > 0 ? (totalWins / totalBattles) * 100 : 0;

    return {
        totalBattles,
        totalWins,
        winRate,
    };
};