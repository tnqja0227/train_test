import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const PokeMultiSelect = ({ pokemonList, selectedPokemon, onSelect }) => {
    const handleSelect = (pokemon) => {
        if (selectedPokemon.includes(pokemon)) {
            onSelect(selectedPokemon.filter(p => p !== pokemon));
        } else {
            onSelect([...selectedPokemon, pokemon]);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleSelect(item)}>
            <View style={{ padding: 10, backgroundColor: selectedPokemon.includes(item) ? '#d3d3d3' : '#fff' }}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text>Select Pokémon:</Text>
            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default PokeMultiSelect;