import React from 'react';
import { Text, View, Image } from 'react-native';
import { IFormatCurrencyProps } from './interface';
import helpers from '../../helpers';
import Constant from '../../constants'
import styles from './styles';

const FormatCurrency: React.FC<IFormatCurrencyProps> = ({ value, type }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {helpers.formatCurrency(value, type)}
            </Text>
            <Image style={styles.flag} source={Constant.flags[type]} />
        </View>

    )
}

export default FormatCurrency;