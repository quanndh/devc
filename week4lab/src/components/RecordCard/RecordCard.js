import React from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native'
import Paper from '../Paper/Paper';
import styles from './styles';

const RecordCard = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Detail", { title: data.title, data: data.data, icon: data.icon, color: data.color })}>
            <Paper style={styles.info}>
                <View style={styles.line}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.subtitle}>{data.lastRecord}</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.subtitle}>Credit card</Text>
                    <Text style={[styles.subtitle, { color: data.color }]}>{"$" + data.total.toFixed(2)}</Text>
                </View>
                <View style={[styles.iconContainer, { backgroundColor: data.color }]}>
                    <Image style={styles.icon} source={data.icon} />
                </View>
            </Paper>
        </TouchableOpacity>
    )
}

export default RecordCard