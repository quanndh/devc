import React from 'react';
import {
    View, Text,
} from 'react-native';
import styles from './styles';
import Colors from '../../constant/Colors';

const StatisticCard = ({ amount, type }) => {
    let title, backgroundColor;

    if (type == 1) {
        title = "Bank account"
        backgroundColor = Colors.bankAccount
    } else if (type == 2) {
        title = "Credit card"
        backgroundColor = Colors.creditCard
    } else if (type == 3) {
        title = "Cash"
        backgroundColor = Colors.cash
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.text}>{title}</Text>
            <Text style={[styles.text, styles.money]}>
                {"$" + amount.toFixed(2)}
            </Text>
        </View>
    )
}

export default StatisticCard;