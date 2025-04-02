import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EndScreen = ({ result, onRestart, onGoHome }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Battle Results</Text>
            <Text style={styles.result}>{result}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Restart Battle" onPress={onRestart} />
                <Button title="Go to Home" onPress={onGoHome} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default EndScreen;