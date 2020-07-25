import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Profile/Profile';
import React from 'react';
import TabBar from './TabBar/TabBar';
import DashBoardStack from '../DashboardStack/DashBoardStack';

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            initialRouteName="Dashboard"
        >
            <Tab.Screen name="Dashboard" component={DashBoardStack} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    )
}

export default AppBottomTab;
