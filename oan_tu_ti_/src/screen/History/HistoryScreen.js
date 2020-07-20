import React from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import styles from './styles';

const HistoryScreen = ({ navigation, route }) => {
    const { history } = route.params;

    const getResultColor = (result) => {
        if (result === 'Victory!') return 'green';
        if (result === 'Defeat!') return 'red';
        return "black";
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item} >
                <Image resizeMode="contain" style={styles.itemImage} source={{ uri: item.playerChoice }} />
                <Text style={[styles.itemText, { color: getResultColor(item.result) }]}>{item.result}</Text>
                <Image resizeMode="contain" style={styles.itemImage} source={{ uri: item.computerChoice }} />
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.headerText}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>History</Text>
                <Text style={styles.headerText}></Text>
            </View>
            <View style={styles.contentContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={history}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default HistoryScreen;