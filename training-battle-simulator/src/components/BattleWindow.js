import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Assuming you have a styles.js file for styling

const BattleWindow = ({ playerRoster, opponentRoster, battleState }) => {
    return (
        <View style={styles.battleWindow}>
            <Image 
                source={require('../assets/images/battle-window-block.png')} 
                style={styles.battleImage} 
            />
            <Text style={styles.title}>Battle!</Text>
            <View style={styles.rosterContainer}>
                <View style={styles.playerRoster}>
                    <Text style={styles.rosterTitle}>Your Roster</Text>
                    {playerRoster.map((pokemon, index) => (
                        <Text key={index} style={styles.pokemonName}>{pokemon.name}</Text>
                    ))}
                </View>
                <View style={styles.opponentRoster}>
                    <Text style={styles.rosterTitle}>Opponent's Roster</Text>
                    {opponentRoster.map((pokemon, index) => (
                        <Text key={index} style={styles.pokemonName}>{pokemon.name}</Text>
                    ))}
                </View>
            </View>
            <Text style={styles.battleStatus}>{battleState}</Text>
        </View>
    );
};

export default BattleWindow;