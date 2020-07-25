import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Notification from '../../screens/Notification/Notification';
import RecordDetail from '../../screens/RecordDetail/RecordDetail';
import Header from '../../components/Header/Header';
import styles from './styles';
import {
    Image,
    TouchableOpacity
} from 'react-native'
const Stack = createStackNavigator();

const DashBoardStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title =
                        options.headerTitle !== undefined
                            ? options.headerTitle
                            : options.title !== undefined
                                ? options.title
                                : scene.route.name;

                    let left, right;
                    if (title == "Dashboard") {
                        left = (
                            <TouchableOpacity onPress={null}>
                                <Image style={styles.action} source={require("../../../assets/icons/drawer.png")} />
                            </TouchableOpacity>
                        )
                        right = (
                            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                                <Image style={styles.action} source={require("../../../assets/icons/bell.png")} />
                            </TouchableOpacity>
                        )
                    } else if (title == "Detail") {
                        left = (
                            <TouchableOpacity onPress={previous ? () => navigation.goBack() : null}>
                                <Image style={styles.action} source={require("../../../assets/icons/back.png")} />
                            </TouchableOpacity>
                        )
                        right = null;
                    } else {
                        left = null;
                        right = null;
                    }

                    return (
                        <Header
                            title={title}
                            left={left}
                            right={right}
                        />
                    );
                }
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Detail" component={RecordDetail} />
        </Stack.Navigator >
    )
}

export default DashBoardStack;