import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Controls = ({ onStartBattle, onSelectTeam, onBack }) => {
    return (
        <View style={styles.container}>
            <Button title="Start Battle" onPress={onStartBattle} />
            <Button title="Select Team" onPress={onSelectTeam} />
            <Button title="Back" onPress={onBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
});

export default Controls;