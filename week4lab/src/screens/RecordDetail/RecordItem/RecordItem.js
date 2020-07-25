import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';
import Paper from '../../../components/Paper/Paper';

const RecordItem = ({ data, icon, color }) => {
    return (
        <Paper style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <Image style={styles.icon} source={icon} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>You bought {data.production_name} for ${data.spend_money}</Text>
                <Text style={styles.subtitle}>{data.date_time}</Text>
            </View>
        </Paper>
    )
}

export default RecordItem;