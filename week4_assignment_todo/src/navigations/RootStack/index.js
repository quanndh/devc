import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppBottomTab from '../AppBottomTab';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="HomeScreen" component={AppBottomTab} />
        </Stack.Navigator>
    )
}

export default RootStack;