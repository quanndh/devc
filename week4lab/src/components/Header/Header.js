import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './styles';

const Header = ({ title, left, right }) => {
    return (
        <View style={styles.container}>
            {
                left ? left : <View style={styles.empty} />
            }
            <Text style={styles.title}>{title}</Text>
            {
                right ? right : <View style={styles.empty} />
            }
        </View>
    )
}

export default Header;