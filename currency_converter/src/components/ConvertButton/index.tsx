import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles';
import { IConvertButtonProps } from './interface';
import Constant from '../../constants';

const ConvertButton: React.FC<IConvertButtonProps> = ({ from, to, currentCurrency, changeCurrency }) => {

    const isActive = currentCurrency === from;
    const { flags } = Constant;

    return (
        <TouchableOpacity
            style={[styles.convertBtn, isActive && styles.activeConvertBtn]}
            onPress={() => {
                if (!isActive) {
                    changeCurrency(from)
                }
            }}
        >
            <View style={[styles.buttonContent]}>
                <Image source={flags[from]} style={styles.flag} />
                <Text
                    style={[styles.text, isActive && styles.activeText]}
                >
                    to
                </Text>
                <Image source={flags[to]} style={styles.flag} />
            </View>
        </TouchableOpacity >
    )
}

export default ConvertButton;