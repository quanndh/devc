import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ReduxService from '../../../service/ReduxService';

const TarBar = ({ state, descriptors, navigation }) => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    };

    return (
        <View style={styles.container}>
            {
                state.routes.slice(0, Math.round(state.routes.length / 2)).map((route, index) => {
                    const { options } = descriptors[route.key];
                    let label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    if (label == "HomeScreen") label = "All"
                    else if (label == "DoneScreen") label = "Done"

                    const isFocused = state.index === index;

                    console.log(state.index, index, "a")
                    let icon;
                    if (label == "All") {
                        icon = <FontAwesomeIcon size={20} color={isFocused ? "white" : "black"} name="tasks" />
                    } else if (label == "Done") {
                        icon = <OcticonsIcon size={20} color={isFocused ? "white" : "black"} name="tasklist" />
                    }

                    const onPress = () => {
                        console.log(1)
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };


                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tab}
                            key={"bottom-tab-" + index}
                        >
                            {icon}
                            <Text style={[styles.label, { color: isFocused ? "white" : "black" }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
            <View style={styles.middleContainer}>
                <TouchableOpacity onPress={() => ReduxService.toggleCreateModal()} style={styles.bigButton}>
                    <OcticonsIcon name="plus" size={40} color="white" />
                </TouchableOpacity>
            </View>
            {
                state.routes.slice(Math.round(state.routes.length / 2)).map((route, index) => {
                    const { options } = descriptors[route.key];

                    let label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    if (label == "HomeScreen") label = "All"
                    else if (label == "DoneScreen") label = "Done"

                    const isFocused = state.index === Math.round(state.routes.length / 2) + index;

                    let icon;
                    if (label == "All") {
                        icon = <FontAwesomeIcon size={20} color={isFocused ? "white" : "black"} name="tasks" />
                    } else if (label == "Done") {
                        icon = <OcticonsIcon size={20} color={isFocused ? "white" : "black"} name="tasklist" />
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };


                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => {
                                if (!isFocused) {
                                    navigation.navigate(route.name);
                                }
                            }}
                            onLongPress={onLongPress}
                            style={styles.tab}
                            key={"bottom-tab-" + index}
                        >
                            {icon}
                            <Text style={[styles.label, { color: isFocused ? "white" : "black" }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default TarBar;