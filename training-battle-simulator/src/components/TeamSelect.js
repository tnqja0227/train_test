import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PokeMultiSelect from './PokeMultiSelect';

const TeamSelect = ({ team, setTeam }) => {
    const handleSelect = (selectedPokemon) => {
        setTeam(selectedPokemon);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Team</Text>
            <PokeMultiSelect 
                selectedPokemon={team} 
                onSelect={handleSelect} 
            />
            <Text style={styles.instructions}>
                Select and order your team of Pokémon for battle!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructions: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
});

export default TeamSelect;