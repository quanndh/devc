import React from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './styles';
import Colors from "../../../constant/Colors";

const TabBar = ({ state, descriptors, navigation }) => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
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
                            <Text style={[styles.label, { color: isFocused ? Colors.primary : Colors.disabled }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default TabBar;