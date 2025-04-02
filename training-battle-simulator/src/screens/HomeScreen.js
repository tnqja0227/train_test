import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training Battle</Text>
            <Text style={styles.description}>
                Select your team and options below to battle in a real-time simulation against a CPU opponent.
            </Text>
            <Button
                title="Start Battle"
                onPress={() => navigation.navigate('BattleScreen')}
            />
            <Button
                title="View Analysis"
                onPress={() => navigation.navigate('AnalysisScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
});

export default HomeScreen;