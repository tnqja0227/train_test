import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BattleWindow from '../components/BattleWindow';
import Controls from '../components/Controls';
import EndScreen from '../components/EndScreen';

const BattleScreen = () => {
    const [isBattleActive, setIsBattleActive] = useState(false);
    const [battleResult, setBattleResult] = useState(null);

    const startBattle = () => {
        setIsBattleActive(true);
        // Logic to start the battle
    };

    const endBattle = (result) => {
        setIsBattleActive(false);
        setBattleResult(result);
    };

    return (
        <View style={styles.container}>
            {isBattleActive ? (
                <>
                    <BattleWindow onEndBattle={endBattle} />
                    <Controls onStartBattle={startBattle} />
                </>
            ) : battleResult ? (
                <EndScreen result={battleResult} onRestart={() => setBattleResult(null)} />
            ) : (
                <Text>Welcome to the Battle! Press Start to begin.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default BattleScreen;