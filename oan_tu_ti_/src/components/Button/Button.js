import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './styles';

const Button = ({ name, onPress }) => (
    <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => onPress(name)}
    >
        <Text style={styles.buttonText}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
    </TouchableOpacity>
);

export default Button;