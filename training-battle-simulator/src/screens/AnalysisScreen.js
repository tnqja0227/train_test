import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AnalysisScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Battle Analysis</Text>
            <ScrollView>
                <Text style={styles.subtitle}>Insights from Previous Battles:</Text>
                {/* Placeholder for battle statistics and insights */}
                <Text style={styles.analysisText}>- Total Battles: 10</Text>
                <Text style={styles.analysisText}>- Wins: 7</Text>
                <Text style={styles.analysisText}>- Losses: 3</Text>
                <Text style={styles.analysisText}>- Most Used Pokémon: Pikachu</Text>
                <Text style={styles.analysisText}>- Average Battle Duration: 5 minutes</Text>
                {/* Add more analysis data as needed */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    analysisText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default AnalysisScreen;