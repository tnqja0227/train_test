import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, Switch } from 'react-native';

const TrainingSetup = ({ onSettingsChange }) => {
    const [league, setLeague] = useState('');
    const [difficulty, setDifficulty] = useState(0);
    const [teamMethod, setTeamMethod] = useState('random');
    const [autotap, setAutotap] = useState(false);

    const handleSettingsChange = () => {
        onSettingsChange({ league, difficulty, teamMethod, autotap });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training Setup</Text>

            <Text style={styles.label}>League & Cup</Text>
            <Picker
                selectedValue={league}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setLeague(itemValue);
                    handleSettingsChange();
                }}>
                <Picker.Item label="Select a league" value="" />
                <Picker.Item label="GO Battle League (Great)" value="1500 gobattleleague" />
                <Picker.Item label="GO Battle League (Ultra)" value="2500 gobattleleague" />
                <Picker.Item label="GO Battle League (Master)" value="10000 gobattleleague" />
                <Picker.Item label="Great League" value="1500 all" />
                <Picker.Item label="Ultra League" value="2500 all" />
                <Picker.Item label="Master League" value="10000 all" />
            </Picker>

            <Text style={styles.label}>Difficulty</Text>
            <Picker
                selectedValue={difficulty}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setDifficulty(itemValue);
                    handleSettingsChange();
                }}>
                <Picker.Item label="Novice" value={0} />
                <Picker.Item label="Rival" value={1} />
                <Picker.Item label="Elite" value={2} />
                <Picker.Item label="Champion" value={3} />
            </Picker>

            <Text style={styles.label}>Team Selection Method</Text>
            <Picker
                selectedValue={teamMethod}
                style={styles.picker}
                onValueChange={(itemValue) => {
                    setTeamMethod(itemValue);
                    handleSettingsChange();
                }}>
                <Picker.Item label="Random" value="random" />
                <Picker.Item label="Manual" value="manual" />
                <Picker.Item label="Import" value="custom" />
            </Picker>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Autotap</Text>
                <Switch
                    value={autotap}
                    onValueChange={(value) => {
                        setAutotap(value);
                        handleSettingsChange();
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
});

export default TrainingSetup;