import React, { useLayoutEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import { FlatList } from 'react-native-gesture-handler';
import RecordItem from './RecordItem/RecordItem';

const RecordDetail = ({ navigation, route }) => {

    const { title, data, icon, color } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            header: ({ scene, previous, navigation }) => {

                let left = (
                    <TouchableOpacity onPress={previous ? () => navigation.goBack() : null}>
                        <Image style={styles.action} source={require("../../../assets/icons/back.png")} />
                    </TouchableOpacity>
                )
                let right = null;

                return (
                    <Header
                        title={title}
                        left={left}
                        right={right}
                    />
                );
            }
        });
    }, [navigation, title])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({ item }) => {
                    return <RecordItem icon={icon} color={color} data={item} />
                }}
            />
        </View>
    )
}

export default RecordDetail;