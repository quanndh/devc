import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screen/Home/HomeScreen';
import HistoryScreen from '../../screen/History/HistoryScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
    )
}

export default AppStack;