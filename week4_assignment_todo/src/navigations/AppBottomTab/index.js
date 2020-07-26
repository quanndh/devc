import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import DoneScreen from '../../screens/DoneScreen';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="DoneScreen" component={DoneScreen} />
        </Tab.Navigator>
    )
}

export default AppBottomTab;