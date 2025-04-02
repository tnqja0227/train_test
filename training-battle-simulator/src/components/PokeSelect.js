import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PokeSelect = ({ pokemonList, onSelect }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.pokemonItem} onPress={() => onSelect(item)}>
            <Text style={styles.pokemonName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Pokémon</Text>
            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    pokemonItem: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
    },
    pokemonName: {
        fontSize: 18,
    },
});

export default PokeSelect;