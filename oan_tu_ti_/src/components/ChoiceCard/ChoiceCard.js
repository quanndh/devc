import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles';

const ChoiceCard = ({ player, choice: { uri, name }, point }) => {
    const title = name && name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>{player}</Text>
            <Text style={styles.choiceDescription}>{point}</Text>
            <Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
            <Text style={styles.choiceCardTitle}>{title}</Text>
        </View>
    );
};

export default ChoiceCard;