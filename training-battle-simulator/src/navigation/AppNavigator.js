import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BattleScreen from '../screens/BattleScreen';
import AnalysisScreen from '../screens/AnalysisScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Battle" component={BattleScreen} />
                <Stack.Screen name="Analysis" component={AnalysisScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;